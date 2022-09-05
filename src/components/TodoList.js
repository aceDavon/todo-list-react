import React from 'react';
import Todo from './Todo';
import { Return } from '../Icons';

const TodoList = (items) => {
  const { list } = items;
  return (
    <ul className="flex flex-col gap-2 px-4 py-4 mx-auto my-4 w-8/12 shadow-lg shadow-gray-500 rounded">
      <div className="w-full relative">
        <input type="text" className="px-2 py-4 w-full mx-auto border border-gray-400 outline-none rounded-3xl" placeholder="Enter text here" />
        <Return />
      </div>
      {list.map((todo) => (
        <div key={todo.id} className="flex gap-2 items-center">
          <input type="checkbox" checked={todo.completed} />
          <Todo key={todo.id} todo={todo} />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
