import React from 'react';
import { ItemListContainer } from './components/Landing/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/Landing/ItemDetailContainer';
import Cart from './components/Landing/Cart';
import { CartProvider } from './context/CartContext';


const App = () => {
  const welcomeMessage = 'Bienvenidos a mi E-commerce'

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={welcomeMessage} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={welcomeMessage} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;