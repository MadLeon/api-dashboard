import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Backend API (/seed) to create the user_panels table
export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS user_panels (
        id UUID PRIMARY KEY,
        weather BOOLEAN NOT NULL,
        news BOOLEAN NOT NULL,
        stock BOOLEAN NOT NULL,
        crypto BOOLEAN NOT NULL
      );
    `;
    return NextResponse.json({ message: "Table created successfully" });
  } catch (error) {
    console.error("Error creating table:", error);
    return NextResponse.json(
      { error: "Failed to create table" },
      { status: 500 }
    );
  }
}
