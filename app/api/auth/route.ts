import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, name, platform, upiId, planType } = body;

    // Check if user already exists
    let user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          phone, 
          name, 
          platform, 
          upiId, 
          walletBalance: 0,
          geoCluster: "Mumbai_Andheri" // Default for demo simulation
        }
      });
    }

    const limits: any = {
      Basic: { cap: 40, cover: 0.60, dLimit: 150, wLimit: 700 },
      Standard: { cap: 60, cover: 0.75, dLimit: 300, wLimit: 1000 },
      Pro: { cap: 80, cover: 0.90, dLimit: 400, wLimit: 1200 },
    };

    const planLimits = limits[planType] || limits.Standard;

    // Create policy
    const policy = await prisma.policy.create({
      data: {
        userId: user.id,
        planType,
        weeklyPremiumCap: planLimits.cap,
        coveragePercentage: planLimits.cover,
        dailyPayoutCap: planLimits.dLimit,
        weeklyPayoutLimit: planLimits.wLimit,
      }
    });

    return NextResponse.json({ success: true, user, policy });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
