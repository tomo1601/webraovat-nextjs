"use client";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await fetch("http://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      ),
  });

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
