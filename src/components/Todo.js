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
      className="text-base capitalize w-full font-medium"
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
            />
          </label>
          <button type='button' className='p-2 bg-blue-600 text-white rounded-md border border-white mx-2 my-2' onClick={() => handleClick()}>Update</button>
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
