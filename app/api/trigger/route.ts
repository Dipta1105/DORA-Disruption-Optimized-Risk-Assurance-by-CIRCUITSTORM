import { NextResponse } from "next/server";
import { processParametricEvent, WeatherEvent, EventType } from "@/lib/insurance/trigger";

/**
 * API Trigger Endpoint - Ingests external Weather/Platform signals.
 * This can be called by an external cron job or API hook.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, location, severity, lat, lon } = body;

    // 1. Build Weather Event Object
    const event: WeatherEvent = {
        type: (type as EventType) || "HEAVY_RAIN",
        location: location || "Mumbai_Andheri",
        severityValue: severity || 35, // 35mm rain
        timestamp: new Date(),
        zoneRadius: 5, // 5km radius
        zoneLat: lat || 19.1136,
        zoneLon: lon || 72.8697
    };

    // 2. Trigger automated processing for all affected users.
    const result = await processParametricEvent(event);

    return NextResponse.json({ 
        success: true, 
        message: `Processed ${event.type} in ${event.location}`,
        result 
    });
  } catch (error: any) {
    console.error("[API_TRIGGER_ERROR]", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
