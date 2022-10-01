import React from 'react';
import Todo from './Todo';
import { Add, Delete } from '../Icons';

const TodoList = (items) => {
  const { list } = items;
  const {
    data, handleUpdate, setData, handleDelete, handleDate,
  } = list;
  const inputRef = React.useRef();
  const id = data.length + 1;

  const handleClick = () => {
    const data = {
      id,
      label: inputRef.current.value,
      completed: false,
      deadline: null,
    };
    setData((prev) => [...prev, data]);
    inputRef.current.value = '';
  };

  const handleResolve = (id) => {
    const newData = data.map((x) => {
      if (x.id === id) return ({ ...x, completed: !x.completed });
      return x;
    });
    setData(newData);
  };

  return (
    <ul className="flex flex-col gap-2 px-4 py-4 mx-auto my-8 w-10/12 lg:w-7/12 shadow-lg shadow-gray-500 rounded-md bg-white opacity-90">
      <div className="w-full relative z-0">
        <input
          ref={inputRef}
          type="text"
          className="px-2 py-4 w-full mx-auto border border-gray-400 z-0 outline-none rounded-3xl"
          placeholder="Enter text here"
        />
        <button type="button" onClick={() => handleClick()}>
          <Add />
        </button>
      </div>
      {data.length > 0 ? (
        data.map((todo) => (
          <div
            key={todo.id}
            className="flex gap-2 items-center relative transition-all delay-150 ease-in-out hover:scale-95"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleResolve(todo.id)}
            />
            <Todo key={todo.id} list={{ todo, handleUpdate, handleDate }} />
            <button type="button" onClick={() => handleDelete(todo.id)}>
              <Delete />
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-blue-500">
          Please add items to the list
        </p>
      )}
    </ul>
  );
};

export default TodoList;
