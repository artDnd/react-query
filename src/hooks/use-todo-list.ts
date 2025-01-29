import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { todoListApi } from "../components/api";
import { useState } from "react";

export function useTodoList() {
  const [page, setPage] = useState(1);

  const {
    data: todoItems,
    error,
    isPending,
  } = useQuery({
    queryKey: ["tasks", "list", { page }],
    queryFn: (meta) => todoListApi.getTodoList({ page }, meta),
    placeholderData: keepPreviousData,
  });
  return { todoItems, error, isPending, setPage };
}
