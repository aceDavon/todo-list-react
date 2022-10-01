import * as React from 'react';

const Todo = (items) => {
  const [edit, setEdit] = React.useState(false);
  const { list } = items;
  const { todo, handleUpdate, handleDate } = list;
  const { id, label } = todo;
  const handleClick = () => {
    setEdit(!edit);
  };
  return (
    <a
      href="#!"
      className="text-base w-full font-medium transition-all ease-in delay-100 hover:text-sm"
      onDoubleClick={() => handleClick()}
    >
      {edit ? (
        <>
          <input
            type="text"
            value={label}
            className="w-full px-2 py-2 rounded-md"
            onChange={(e) => handleUpdate(e, id)}
          />
          <label htmlFor="deadline">
            Deadline
            {' '}
            <input
              type="date"
              id="deadline"
              className="w-1/3 rounded-md my-2 px-2"
              onChange={(e) => handleDate(id, e)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            />
          </label>
        </>
      ) : (
        label
      )}
    </a>
  );
};

export default Todo;
