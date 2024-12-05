import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// Backend API (/api/getUserPanel) to fetch user panel data
export async function GET() {
  try {
    const rows = await sql`SELECT * FROM user_panels`;

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ error: "Failed to fetch data from database" });
  }
}
