import { TodoDto } from "./api";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ text }: TodoDto) => {
  return (
    <li className={styles.todo}>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <p> {text}</p>
      </div>

      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
