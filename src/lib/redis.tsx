import { createClient } from "redis";

// Create database client using REDIS_URL
const client = createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => console.error("Redis Client Error", err));

// Connect Redis database
async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
  }
}

export { client, connectRedis };
