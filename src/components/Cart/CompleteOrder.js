import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { db } from '../../Firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 80
    },
    form: {
        width: 600,
        margin: '30px 0'
    },
    input: {
        height: 50,
    },
    inputText: {
        fontSize: 25,
    },
    button: {
        fontSize: 25,
        marginTop: 50,
    }
}

const CompleteOrder = () => {

    const { cart, total, onlyClearCart } = useContext(CartContext)
    const [buyer, setBuyer] = useState({})
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    let id;

    const handleOrder = () => {
        const sellCollection = collection(db, 'sells')
        addDoc(sellCollection, {
            buyer,
            items: cart,
            total,
            time: serverTimestamp()
        })
            .then(result => {
                id = result.id
                Swal.fire({
                    title: `Excellent your order have been received, here is your ID ${id} Please save it`,
                    confirmButtonText: 'Continue Shopping'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/");
                        onlyClearCart()
                    }
                })
            })
            .catch(() => { setError(true) })

        handlerStock();
    }

    const handlerStock = () => {
        cart.forEach((product) => {
            const docReference = doc(db, 'products', product.id)
            updateDoc(docReference, { stock: product.stock - product.quantity })
        })
    }

    const handleOnChange = (e) => {
        let key = e.target.id
        if (key === "firstName") {
            setBuyer({
                ...buyer,
                firstName: e.target.value
            })
        } else if (key === "lastName") {
            setBuyer({
                ...buyer,
                lastName: e.target.value
            })
        } else if (key === "phone") {
            setBuyer({
                ...buyer,
                phone: e.target.value
            })
        }
        else {
            setBuyer({
                ...buyer,
                email: e.target.value
            })
        }
    }

    return (
        <>
            {!error ? (
                <div style={style.container}>
                    <FormControl style={style.form}>
                        <InputLabel htmlFor="firstName" style={style.inputText}>Firts Name</InputLabel>
                        <Input id="firstName" type="text" style={style.input} onChange={handleOnChange}></Input>
                    </FormControl>
                    <FormControl style={style.form}>
                        <InputLabel htmlFor="lastName" style={style.inputText}>Last Name</InputLabel>
                        <Input id="lastName" type="text" style={style.input} onChange={handleOnChange}></Input>
                    </FormControl>
                    <FormControl style={style.form}>
                        <InputLabel htmlFor="phone" style={style.inputText}>Last Name</InputLabel>
                        <Input id="phone" type="number" style={style.input} onChange={handleOnChange}></Input>
                    </FormControl>
                    <FormControl style={style.form}>
                        <InputLabel htmlFor="email" style={style.inputText}>Phone Number</InputLabel>
                        <Input id="email" type="email" style={style.input} onChange={handleOnChange}></Input>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleOrder} style={style.button}>
                        Submit
                    </Button>
                </div>
            ) : (<h1>Ups! something went wrong</h1>)
            }
        </>
    )
}
export default CompleteOrder