import React, { useCallback } from 'react';
import '../styles/TodoList.scss';
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized/';


const TodoList = ({ todos, onRemove, onToggle }) => {

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
          />
      );
    },
    [onRemove, onToggle, todos]
  );


  return (
    <List
      className="TodoList"
      width={540.99}
      height={513}
      rowCount={todos.length}
      rowHeight={43.64}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
      />
  );
};


export default React.memo(TodoList);