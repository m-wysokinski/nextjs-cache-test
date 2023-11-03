"use client";

import { revalidateTag } from "next/cache";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<{data: number}>();

  useEffect(() => {
    fetch("/api", {next: {tags: ["a"]}}).then((res) => res.json()).then((value) => setData(value))
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.data}
      <button type="button" onClick={() => revalidateTag("a")}>revalidate</button>
    </main>
  )
}

// trzeba wrzucić produkcyjna wersje i sprawdzic cache, na devie póki co nic nie działa
