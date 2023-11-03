"use client";

import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<{data: number}>();

  useEffect(() => {
    fetch("/api").then((res) => res.json()).then((value) => setData(value))
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.data}
    </main>
  )
}

// trzeba wrzucić produkcyjna wersje i sprawdzic cache, na devie póki co nic nie działa
