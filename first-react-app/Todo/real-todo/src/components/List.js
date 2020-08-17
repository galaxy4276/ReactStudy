import React from 'react';
import '../styles/List.scss';
import Item from './Item';


const List = ({ todos }) => {
  return (
    <div>
      {
        todos.map(todo => (<Item key={ todo.id } text={ todo.text }/>))
      }
    </div>
  );
};

export default List;