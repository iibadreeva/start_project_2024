import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { AppState } from 'store';
import {
  addTodo,
  removeTodo,
  completedTodo,
  fetchTodos,
  deleteTodo,
  toggleStatus,
  addNewTodo
} from '../../store/todoSlice';

const Todo = () => {
  const { todos, status, error } = useSelector(
    (state: AppState) => state.todos
  );
  // const todos = useSelector((state: AppState) => state.todos.todos);
  // const [todos, setToos] = useState<TodoType[]>([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // dispatch(addTodo({ text }));
    dispatch(addNewTodo(text) as any);
    setText('');
    // if (text !== "") {
    //   const todo = {
    //     id: new Date().toISOString(),
    //     text,
    //     completed: false,
    //   };
    //   setToos((prev) => [...prev, todo]);
    //   setText("");
    // }
  };

  const handleCompletedTodo = (id: number) => {
    dispatch(toggleStatus(id) as any);
    // dispatch(completedTodo({ id }));
    // setToos((prev) =>
    //   prev.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, completed: !item.completed };
    //     }
    //     return item;
    //   }),
    // );
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo({ id }));
    // setToos((prev) => prev.filter((it) => it.id !== id));
  };

  useEffect(() => {
    console.log(error);
    dispatch(fetchTodos() as any);
  }, [dispatch]);

  return (
    <div>
      <label>
        <input
          className="border-2 border-r-0 border-gray-300  rounded-bl-md rounded-tl-md h-8"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className="bg-blue-600 rounded-br-md rounded-tr-md px-3 py-1 text-white hover:bg-blue-700"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </label>

      {status === 'loading' && <h2>Loading</h2>}
      {error && <h2>An error soccer: {error}</h2>}

      <ul className="">
        {todos.map(({ id, completed, title }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleCompletedTodo(id)}
            />
            <span
              className={cn('px-2', {
                'line-through': completed
              })}
            >
              {title}
            </span>
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => dispatch(deleteTodo(id) as any)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
