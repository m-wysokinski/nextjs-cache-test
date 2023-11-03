export async function GET() {
  let a = 0;

  for (let i = 0; i < 5_000_000_000; i++) {
    a += 1;
  }

  return Response.json({ data: a })
}