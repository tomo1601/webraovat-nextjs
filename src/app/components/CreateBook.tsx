"use client";
import { useQuery, useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { createBookQueryFn } from "../queryFns/TodosFns";
import { useQueryClientInstance } from "../context/QueryClientContext";

export default function CreateBook() {
  const { queryClient } = useQueryClientInstance();
  const newBook = {
    name: "Learn Reactjs in 30 days",
    description: "learn react in 30 days",
    price: 1200,
    publicationDate: "2023",
    author: "Cao Anh Quoc Huy CHó rách",
    tags: ["8a70c12d-3e26-4949-af1b-a2cd66a36455"],
  };

  const createBook = useMutation({
    mutationFn: createBookQueryFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
  return (
    <div>
      <button onClick={() => createBook.mutate(newBook)}>Tạo bài viết</button>
    </div>
  );
}
