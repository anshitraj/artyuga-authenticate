import { NextResponse } from "next/server";
import { getArtworkById, getShopById, generateTransactionHash } from "@/data/mockData";

/**
 * API endpoint for verification data
 * Returns artwork data in the format expected by artyuga-verifier
 * 
 * Query params:
 * - shopId: Shop ID
 * - artId: Artwork ID
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shopId = searchParams.get('shopId');
  const artId = searchParams.get('artId');

  if (!artId) {
    return NextResponse.json(
      { error: "artId is required" },
      { status: 400 }
    );
  }

  const artwork = getArtworkById(artId);
  
  if (!artwork) {
    return NextResponse.json(
      { error: "Artwork not found" },
      { status: 404 }
    );
  }

  // Use provided shopId or artwork's shopId
  const finalShopId = shopId || artwork.shopId;
  const shop = getShopById(finalShopId);

  if (!shop) {
    return NextResponse.json(
      { error: "Shop not found" },
      { status: 404 }
    );
  }

  // Generate transaction hash for verification
  const txHash = generateTransactionHash();

  // Transform to format expected by artyuga-verifier
  return NextResponse.json({
    artId: artwork.id,
    title: artwork.title,
    artist: shop.name, // Use shop name as artist
    shopName: shop.name,
    owner: artwork.owner,
    price: artwork.price, // Keep original ETH price format
    network: "Base (Demo)",
    verified: true,
    txHash: txHash,
  });
}

