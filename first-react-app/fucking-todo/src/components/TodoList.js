import React from 'react';
import '../styles/TodoList.scss';
import Item from './TodoItem';


const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {
        todos.map((todo) => (<Item todo={ todo } key={ todo.id } 
          onRemove={ onRemove } onToggle={ onToggle }
        />))
      }
    </div>
  );
};

export default TodoList;