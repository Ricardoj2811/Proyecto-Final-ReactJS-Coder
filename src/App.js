import React from 'react';
import { ItemListContainer } from './components/Landing/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";

const App = () =>{
  const welcomeMessage = 'Bienvenidos a mi E-commerce'
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={welcomeMessage}/>
    </>
  )
}

export default App;