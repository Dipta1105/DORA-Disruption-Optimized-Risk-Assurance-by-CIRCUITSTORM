import { NextResponse } from "next/server";
import { 
    calculateDynamicPremium, 
    getRiskMultiplier, 
    getSeasonMultiplier 
} from "@/lib/insurance/pricing";

/**
 * API Pricing Endpoint - Calculates real-time premium for onboarding.
 */
export async function POST(req: Request) {
  try {
    const { tier } = await req.json();

    const riskMult = getRiskMultiplier(tier);
    const seasonMult = getSeasonMultiplier();
    
    // For demo, we'll use 1.0 for pool adjustment
    const premium = calculateDynamicPremium({
        riskMultiplier: riskMult,
        seasonMultiplier: seasonMult,
        poolAdjustment: 1.0
    });

    return NextResponse.json({ 
        success: true, 
        premium,
        breakdown: {
            basePrice: 25,
            tierMultiplier: riskMult,
            seasonMultiplier: seasonMult,
            poolAdjustment: 1.0
        }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
