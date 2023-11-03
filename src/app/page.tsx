"use client";
import { useQuery } from "@tanstack/react-query";
import { getBookById } from "./queryFns/TodosFns";
import { useState } from "react";

interface Book {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  price: number;
  publicationDate: string;
  author: string;
  tags: any[];
}

export default function Home() {
  const [curentId, setCurrentId] = useState(0)
  const id = ['13b2923a-44c0-4b3c-b68f-30d9a065c551','0fa6fdf0-d705-47ef-85c0-83850983b6b1']
  const { data, isLoading } = useQuery(["book", id[curentId]]/* queryKey */,()=>getBookById(id[curentId]) /* ActionWillExe */,{staleTime: 180000} /* Time to need refetch data */);

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={()=>setCurrentId(curentId===0?1:0)}>Đổi bài viết</button>
    </main>
  );
}
