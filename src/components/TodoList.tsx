import { keepPreviousData, useQuery } from "@tanstack/react-query";
import styles from "./TodoList.module.scss";
import TodoItem from "./TodoItem";
import { todoListApi } from "./api";
import { useState } from "react";

const TodoList = () => {
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

  if (isPending) return <h1>isLoading!</h1>;
  if (error) return <h1>error: {JSON.stringify(error)}</h1>;
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>TodoList</h1>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Add new TODO"
        />
        <button>Add</button>
      </div>
      <ul className={styles.ul}>
        {todoItems.data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button onClick={() => setPage((page) => Math.max(page - 1, 1))}>
        prev
      </button>
      <button
        onClick={() => setPage((page) => Math.min(page + 1, todoItems.pages))}
      >
        next
      </button>
    </div>
  );
};

export default TodoList;
