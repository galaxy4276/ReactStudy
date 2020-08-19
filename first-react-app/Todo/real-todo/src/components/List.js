import React from 'react';
import '../styles/List.scss';
import Item from './Item';


const List = ({ todos }) => {
  return (
    <div className="List">
      {
        todos.map(todo => (<Item key={ todo.id } todo={ todo }/>))
      }
    </div>
  );
};

export default List;