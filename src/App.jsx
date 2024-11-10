import { createContext, useState } from 'react'
import Examp1 from './usecontext/index1'
import Examp3 from './usecontext/index3';
import Examp2 from './usecontext/index2';

export var context = createContext();

var g = 10;

function App() {
  

  return (
    <>
      <context.Provider value={g}>
        <Examp1/>
        <Examp3/>
        <Examp2/>
      </context.Provider>
    </>
  )
}

export default App
