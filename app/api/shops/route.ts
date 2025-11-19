import { NextResponse } from "next/server";
import { shops } from "@/data/mockData";

export async function GET() {
  return NextResponse.json(shops);
}

