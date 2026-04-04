import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: { phone },
      include: { policies: true }
    });

    if (!user) {
      return NextResponse.json({ 
        error: "User not found. Please register first." 
      }, { status: 404 });
    }

    // In production, we would verify OTP here.
    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        platform: user.platform,
        walletBalance: user.walletBalance,
        geoCluster: user.geoCluster
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
