import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({ index: null, content: '' });

  const addToDo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
      console.log(todos);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const removeTodo = (index) => {
    const updatedTodods = [...todos];
    updatedTodods.splice(index, 1);
    setTodos(updatedTodods);
  };

  const updateTodo = () => {
    if (editedTodo.index !== null && editedTodo.content.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editedTodo.index] = editedTodo.content;
      setTodos(updatedTodos);
      setEditedTodo({ index: null, content: '' });
    }
  };
  return (
    <>
      <input type='text' value={inputValue} onChange={(e) => handleChange(e)} />
      <button onClick={addToDo}>Add to do</button>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {index === editedTodo.index ? (
                <div>
                  <input
                    type='text'
                    value={editedTodo.content}
                    onChange={(e) =>
                      setEditedTodo({ index, content: e.target.value })
                    }
                  />
                  <button onClick={updateTodo}>Update</button>
                </div>
              ) : (
                <div>
                  {todo}
                  <button onClick={() => removeTodo(index)}>Remove</button>
                  <button
                    onClick={() => setEditedTodo({ index, content: todo })}
                  >
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
