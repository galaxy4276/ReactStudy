import React from 'react';
import '../styles/List.scss';
import Item from './Item';


const ListOne = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="List">
      {
        todos.map(todo => (<Item key={ todo.id } 
          todo={ todo } onRemove={ onRemove } onToggle={ onToggle }
          />))
      }
    </div>
  );
};

export default ListOne;