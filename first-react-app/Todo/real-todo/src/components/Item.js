import React from 'react';
import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox
} from 'react-icons/md';
import '../styles/Item.scss';
import cl from 'classnames';


const Item = ({ todo }) => {
  const { id, checked, text } = todo;

  return (
    <div className="Item">
      <div className={cl("checkbox", { checked })}>
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="text">{ text }</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default Item;