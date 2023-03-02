import React, { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(0)

    useEffect(() => {
        setQty(cart.reduce((acc, item) => acc + item.quantity,0))
    }, [cart])

    const addProduct = (product, quantity) => {
        if (isInCart(product.id)) {
            const inCart = cart.find((item) => item.id === product.id)
            setCart(cart.map((item)=>{
                if(item.id === product.id){
                    return {...inCart, quantity: quantity};
                } else return item;
            }))
        } else {
            setCart([...cart, {...product, quantity }]);
        }
    };

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    const clearCart = () => {
        Swal.fire({
            title: 'Do you want to delete all the products on your cart?',
            showCancelButton: true,
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('All your products are been remove of your shopping card!', '', 'success')
                setCart([])
            }
        })
    };

    return (
        <CartContext.Provider value={{ cart, qty, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}