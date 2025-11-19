import { NextResponse } from "next/server";
import { getArtworkById, getShopById } from "@/data/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const artwork = getArtworkById(id);
  
  if (!artwork) {
    return NextResponse.json({ error: "Artwork not found" }, { status: 404 });
  }

  const shop = getShopById(artwork.shopId);

  return NextResponse.json({
    ...artwork,
    shop,
  });
}

