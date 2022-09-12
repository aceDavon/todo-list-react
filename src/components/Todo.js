import * as React from 'react';

const Todo = (items) => {
  const [edit, setEdit] = React.useState(false);
  const { list } = items;
  const { todo, handleUpdate } = list;
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
      { edit ? (<input type="text" value={label} className="w-full px-2 py-2 rounded-md" onBlur={() => handleClick()} onChange={(e) => handleUpdate(e, id)} />)
        : (label)}
    </a>
  );
};

export default Todo;
