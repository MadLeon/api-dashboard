// Don't need any custom config?:
import { sql } from "@vercel/postgres";
// `sql` is already set up and ready to go; no further action needed

// Need to customize your config?:
import { createPool } from "@vercel/postgres";
const pool = createPool({
  /* config */
});

// Need a single client?:
import { createClient } from "@vercel/postgres";
const client = createClient({
  /* config */
});

// no-config
import { sql } from "@vercel/postgres";

const id = 100;

// A one-shot query
const { rows } = await sql`SELECT * FROM users WHERE id = ${userId};`;

// Multiple queries on the same connection (improves performance)
// warning: Do not share clients across requests and be sure to release them!
const client = await sql.connect();
const { rows } = await client.sql`SELECT * FROM users WHERE id = ${userId};`;
await client.sql`UPDATE users SET status = 'satisfied' WHERE id = ${userId};`;
client.release();
