import React, { useState } from 'react';
import Counter from './Components/Counter';
import Info from './Components/Info';
import Average from './Components/Average';


function App() {
  return (
    <div>
      <Average />
    </div>
  );
}

export default App;



/* <button
  onClick={() => {
    setVisible(!visible);
    (() => console.log(visible))();
  }}
  >
    {visible ? '숨기기' : '보이기'}
  </button>
  <hr />
  {visible && <Info />} */