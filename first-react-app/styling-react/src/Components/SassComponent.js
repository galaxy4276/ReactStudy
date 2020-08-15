import React from 'react';
import './SassComponent.scss';


const SassComponent = () => {
  const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
  return (
    <div className='SassComponent'>
      { 
        colorArr.map((colorname, idx) => (<div className={`box ` + colorname} key={ idx } />)) 
      }
    </div>
  );
};

export default SassComponent;