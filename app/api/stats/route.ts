import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Provide all data for the Admin Dashboard and User Dashboards
export async function GET() {
  try {
    const activeUsers = await prisma.user.count();
    const claims = await prisma.claim.findMany({ include: { user: true }, orderBy: { createdAt: "desc" } });
    
    const lossRatioData = await prisma.$transaction([
      prisma.policy.aggregate({ _sum: { premiumDeductedThisWeek: true } }),
      prisma.claim.aggregate({ _sum: { payoutAmount: true } })
    ]);

    const premiumCollected = lossRatioData[0]._sum.premiumDeductedThisWeek || 0;
    const payoutsDisbursed = lossRatioData[1]._sum.payoutAmount || 0;
    const lossRatio = premiumCollected > 0 ? (payoutsDisbursed / premiumCollected) * 100 : 0;

    const fraudFlags = await prisma.claim.count({
      where: { status: { in: ["PENDING_REVIEW", "REJECTED"] } }
    });

    const approvedClaims = await prisma.claim.count({
      where: { status: "AUTO_APPROVED" }
    });

    const activePolicy = await prisma.policy.findFirst({
        where: { status: "active"},
        include: { user: true }
    });
    
    let walletTransactions: any[] = [];
    if (activePolicy) {
        walletTransactions = await prisma.transaction.findMany({
            where: { userId: activePolicy.userId },
            orderBy: { createdAt: "desc" },
            take: 10
        });
    }

    const activeEvents = await (prisma as any).event.findMany({
        where: { status: "active" },
        orderBy: { createdAt: "desc" },
        take: 3
    });

    return NextResponse.json({
      activeUsers,
      totalClaims: claims.length,
      fraudFlags,
      approvedClaims,
      premiumCollected,
      payoutsDisbursed,
      lossRatio: lossRatio.toFixed(1),
      claims,
      activePolicy, // Injecting current active user for Demo UI
      walletTransactions,
      activeEvents
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
