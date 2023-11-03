import { NextRequest } from "next/server";

export async function GET(r: NextRequest) {
  let a = 0;

  for (let i = 0; i < 1_000_000_000; i++) {
    a += 1;
  }

  return Response.json({ data: a, request: r.nextUrl.searchParams.get("a") })
}
