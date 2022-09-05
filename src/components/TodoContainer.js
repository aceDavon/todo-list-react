import * as React from 'react';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [list] = React.useState([
    {
      id: 1,
      label: 'Fix the codebase to reflect functional components',
      completed: false,
    },
    {
      id: 2,
      label: 'Refactor to ES6 syntax',
      completed: true,
    },
    {
      id: 3,
      label: 'Extract all combined componets to their seperate components',
      completed: false,
    },
  ]);
  return (
    <div>
      <TodoList list={list} />
    </div>
  );
};

export default TodoContainer;
