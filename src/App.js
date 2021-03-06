import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Home from './components/Home';
import ContextFun from './context/ContextProvider'; 

function App() {
  return (
    <ContextFun>
      <Navbar/>
      <Home/>
    </ContextFun>
  );
}

export default App;
