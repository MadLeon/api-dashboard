// Don't need any custom config?:
import { sql } from "@vercel/postgres";

// A one-shot query
const { rows } = await sql`SELECT * FROM users`;

console.log(rows);
