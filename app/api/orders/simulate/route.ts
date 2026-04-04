import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Simulates completing an order and applying the micro-premium deduction
export async function POST(req: Request) {
  try {
    const policy = await prisma.policy.findFirst({
      where: { status: "active" },
      include: { user: true }
    });

    if (!policy) {
      return NextResponse.json({ error: "No active user with policy found." }, { status: 400 });
    }

    const orderEarnings = 40; // Fixed ₹40 per order simulation
    let baseDeductionRate = 0.04; // Standard 4%
    if (policy.planType === "Basic") baseDeductionRate = 0.02;
    if (policy.planType === "Pro") baseDeductionRate = 0.06;

    let premiumToDeduct = orderEarnings * baseDeductionRate;
    
    // **EXCLUSIVE FEATURE: WEEKLY PRICING CAP LOGIC**
    const spaceLeftInCap = policy.weeklyPremiumCap - policy.premiumDeductedThisWeek;
    
    if (spaceLeftInCap <= 0) {
      premiumToDeduct = 0; // Cap reached, free orders!
    } else if (premiumToDeduct > spaceLeftInCap) {
      premiumToDeduct = spaceLeftInCap; // Deduct only what's left to hit cap
    }

    // 1. Log the order
    const order = await prisma.order.create({
      data: {
        userId: policy.userId,
        orderId: `ORD_${Date.now()}`,
        earnings: orderEarnings,
        premiumCharged: premiumToDeduct
      }
    });

    // 2. Update policy deducted amount
    if (premiumToDeduct > 0) {
      await prisma.policy.update({
        where: { id: policy.id },
        data: { premiumDeductedThisWeek: { increment: premiumToDeduct } }
      });

      // 3. Log transaction
      await prisma.transaction.create({
        data: {
          userId: policy.userId,
          type: "deduction",
          amount: parseFloat(premiumToDeduct.toFixed(2)),
          title: `Premium (Order ${order.orderId.slice(-4)})`
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      order, 
      message: premiumToDeduct === 0 ? "Weekly cap reached. ₹0 deducted." : `₹${premiumToDeduct.toFixed(2)} deducted.` 
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
