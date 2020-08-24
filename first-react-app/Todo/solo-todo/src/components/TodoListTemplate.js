import React from 'react';
import '../styles/TodoListTemplate.scss';
import { AiFillInstagram } from 'react-icons/ai';


const TodoListTemplate = ({ children }) => {
  return (
    <div className="TodoListTemplate">
      <div className="app-title">Awesome Work Sheet</div>
      <div className="content">{ children }</div>
    </div>
  );
};


export default TodoListTemplate;