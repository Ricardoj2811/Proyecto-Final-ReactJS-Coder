import React from 'react';
import { ItemListContainer } from './components/Landing/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/Landing/ItemDetailContainer';
import Cart from './components/Landing/Cart';


const App = () =>{
  const welcomeMessage = 'Bienvenidos a mi E-commerce'
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={welcomeMessage}/>}/>
        <Route path="/categories/:name" element={<ItemListContainer greeting={welcomeMessage}/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;