"use client";
import { useQuery, useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { getTodostsQueryFn } from "../queryFns/TodosFns";

export default function Login() {
  const { data,error,  isLoading, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: getTodostsQueryFn,
    staleTime: 180000,
    // getNextPageParam: (_, pages) => pages.length + 1,
  });
  const handleRefresh = () => {
    refetch();
  };

  return (
    <main>
      login
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
