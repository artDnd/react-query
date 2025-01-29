import { useQuery } from "@tanstack/react-query";
import styles from "./TodoList.module.scss";
import TodoItem from "./TodoItem";
import { todoListApi } from "./api";

const TodoList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: todoListApi.getTodoList,
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
        {data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
