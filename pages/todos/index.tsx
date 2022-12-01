import styles from "../../styles/Todos.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await data.json();
  console.log(typeof todos);
  // console.log (todos);
  return {
    props: { todos },
  };
}

type ITodo = {
  id: string;
  title: string;
};

export default function Todos({ todos }: any) {
  return (
    <>
      <ul className={styles.todolist}>
        <h1>Tasks to Do</h1>
        {todos.map((todo: ITodo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
