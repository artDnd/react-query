import styles from "./TodoList.module.scss";
import TodoItem from "./TodoItem";
import { useTodoList } from "../hooks/use-todo-list";

const TodoList = () => {
  const { error, isPending, todoItems, setPage } = useTodoList();
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
        {todoItems?.data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button onClick={() => setPage((page) => Math.max(page - 1, 1))}>
        prev
      </button>
      <button
        onClick={() => setPage((page) => Math.min(page + 1, 10))} // hard
      >
        next
      </button>
    </div>
  );
};

export default TodoList;
