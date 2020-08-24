import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './context/color';


const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'coral' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  )
}


export default App;
