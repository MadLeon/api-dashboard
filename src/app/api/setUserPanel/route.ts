import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { PanelState } from "@/lib/types";

// Backend API (/api/setUserPanel) to update user panel data
export async function POST(request: Request) {
  try {
    const data: PanelState = await request.json();
    const user_id = "410544b2-4001-4271-9855-fec4b6a6442a";
    const weather = data.weather ?? false;
    const news = data.news ?? false;
    const stock = data.stock ?? false;
    const crypto = data.crypto ?? false;

    const res = await sql`update user_panels
        set weather = ${weather},
            news = ${news},
            stock = ${stock},
            crypto = ${crypto}
        where id = ${user_id}`;

    return NextResponse.json(res);
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ error: "Failed to fetch data from database" });
  }
}
