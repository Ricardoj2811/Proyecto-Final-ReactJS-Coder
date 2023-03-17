import React from 'react';
import { ItemListContainer } from './components/Landing/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/Landing/ItemDetailContainer';
import Cart from './components/Landing/Cart';
import { CartProvider } from './context/CartContext';
import CompleteOrder from './components/Cart/CompleteOrder';


const App = () => {
  const welcomeMessage = 'Welcome to my E-commerce'

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={welcomeMessage} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={welcomeMessage} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/completeOrder" element={<CompleteOrder />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;