import * as React from 'react';
import TodoList from './TodoList';
import todoBg from '../img/todo.jpg';

const TodoContainer = () => {
  const local = JSON.parse(localStorage.getItem('todos'));
  const [data, setData] = React.useState(local || []);
  const [dummy, setDummy] = React.useState(false);

  const handleUpdate = (e, id) => {
    const updatedList = data.map((x) => {
      const val = e.target.value;
      if (x.id === id) {
        return {
          ...x,
          label: val,
        };
      }
      return x;
    });
    localStorage.setItem('todos', JSON.stringify(updatedList));
    setDummy(!dummy);
  };

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

  React.useEffect(() => {
    setData(local);
  }, [dummy]);

  return (
    <div className="w-full h-screen relative pt-28 bg-gradient-to-r from-gray-500 to-gray-900">
      <img
        src={todoBg}
        alt="todo-bg"
        className="w-full h-screen top-0 object-cover absolute mix-blend-overlay"
      />
      <TodoList
        list={{
          data,
          handleUpdate,
          setData,
        }}
      />
    </div>
  );
};

export default TodoContainer;
