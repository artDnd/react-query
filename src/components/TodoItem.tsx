import styles from "./TodoItem.module.scss";
const TodoItem = () => {
  return (
    <li className={styles.todo}>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <p> text</p>
      </div>

      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
