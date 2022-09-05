import React from 'react';

const Todo = (props) => {
  const todo = { ...props };
  const { label } = todo.todo;
  return (
    <span className="text-base font-medium">
      { label }
    </span>
  );
};

export default Todo;
