import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const SimpleTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispath = useDispatch();
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li>
                {todo.text}
                <button onClick={() => dispath(removeTodo(todo.id))}>
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
