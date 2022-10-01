import React from 'react';
import landing from './img/bg.webp';

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
      <ul className="mt-8 mx-auto w-10/12 lg:w-5/12">
        { todos ? (
          todos.map((todo) => {
            const {
              id, label, completed, deadline,
            } = todo;
            return (
              <div
                key={id}
                className="flex gap-4 justify-between border-b-2 items-center"
              >
                <li key={id} className="w-44">
                  {label}
                </li>
                <li
                  className={
                    completed
                      ? 'px-2 py-1 border border-white rounded-xl text-sm opacity-100 my-1 bg-green-300'
                      : 'px-2 py-1 border border-white rounded-xl text-sm opacity-100 my-1 bg-red-300'
                  }
                >
                  {completed ? 'Completed' : 'Pending'}
                </li>
                <li
                  className={
                    deadline
                      ? 'rounded-xl text-sm opacity-100 my-1 w-1/3 text-center'
                      : 'px-2 py-1 w-1/3 text-center'
                  }
                >
                  {deadline
                    ? deadline.months > 0
                      ? `${deadline.months} months, ${deadline.days} days left`
                      : `${deadline.days} days left`
                    : 'No date set'}
                </li>
              </div>
            );
          })) : (<li className="text-center">No items added yet, Please add items to see them here</li>)}
      </ul>
    </div>
  );
};

export default Landing;
