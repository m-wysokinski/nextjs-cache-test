export default async function Home() {
  const data = await fetch("http://localhost:3000/api").then((res) => res.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.data}
    </main>
  )
}


