import { NextResponse } from "next/server";
import { getShopById, getArtworksByShopId } from "@/data/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const shop = getShopById(id);
  
  if (!shop) {
    return NextResponse.json({ error: "Shop not found" }, { status: 404 });
  }

  const artworks = getArtworksByShopId(id);

  return NextResponse.json({
    ...shop,
    artworks,
  });
}

