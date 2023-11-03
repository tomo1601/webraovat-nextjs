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
  const id = ['d692501c-40d5-4b5e-a1d9-e1154ffc8283','18e96c30-a759-4de0-a7cc-0a87e75ccc04']
  const { data, isLoading } = useQuery(["book", id[curentId]]/* queryKey */,()=>getBookById(id[curentId]) /* ActionWillExe */,{staleTime: 180000} /* Time to need refetch data */);

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={()=>setCurrentId(curentId===0?1:0)}>Đổi bài viết</button>
    </main>
  );
}
