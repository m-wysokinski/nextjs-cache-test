export async function POST() {
  let a = 0;

  for (let i = 0; i < 1_000_000_000; i++) {
    a += 1;
  }

  return Response.json({ data: a })
}