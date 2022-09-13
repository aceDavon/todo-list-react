import React from 'react';
import landing from './img/landing.jpeg';

const Landing = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos'));

    if (data) {
      setTodos(data);
    }
  }, []);

  return (
    <div className="w-full h-screen relative pt-20 bg-gradient-to-r from-gray-500 to-gray-900 text-white">
      <img
        src={landing}
        alt="bg-img"
        className="w-full h-screen top-0 object-cover absolute mix-blend-overlay"
      />
      <h1 className="text-4xl text-center mt-16">Hello there!</h1>
      <p className="text-center">See a list of your tasks below: </p>
      <ul className="mt-8 mx-auto w-5/12">
        { todos ? (
          todos.map((todo) => (
            <div key={todo.id} className="flex gap-4 justify-between border-b-2 items-center">
              <li key={todo.id} className="w-44">{todo.label}</li>
              <li className="px-2 py-1 border rounded-xl text-sm opacity-100 my-1 bg-green-300">{todo.completed ? 'Completed' : 'Pending'}</li>
            </div>
          ))
        ) : (<li className="text-center">No items added yet, Please add items to see them here</li>)}
      </ul>
    </div>
  );
};

export default Landing;
