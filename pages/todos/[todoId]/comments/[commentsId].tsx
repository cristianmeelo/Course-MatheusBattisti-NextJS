import Link from "next/link";
import { useRouter } from "next/router";

export default function Comments() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const commentsId = router.query.commentsId;
  return (
    <>
      <Link href={`/todos/${todoId}`}>
        <p>Voltar</p>
      </Link>
      <h1>Exibindo o comentário número: {commentsId}</h1>
      <p>Do toDo:{todoId}</p>
    </>
  );
}
