import { NextResponse } from "next/server";

// Backend API (/api/getCrypto) to fetch cryptocurrency data
const fetchCrypto = async () => {
  const cryptoUrl = "https://api.coincap.io/v2/assets";
  const cryptoResponse = await fetch(cryptoUrl);
  const cryptoData = await cryptoResponse.json();
  if (!cryptoResponse.ok) {
    throw new Error("Failed to fetch cryptocurrency data");
  }
  return cryptoData;
};

export async function GET() {
  const cryptoData = await fetchCrypto();
  return NextResponse.json(cryptoData);
}
