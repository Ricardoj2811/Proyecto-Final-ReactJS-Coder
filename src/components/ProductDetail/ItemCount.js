import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

const style = {
    counter: {
        width: 200,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 40
    },
    button: {
        marginRight: 10,
        marginLeft: 10,
        width: 40,
        height: 40,
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonAdd: {
        marginRight: 10,
        marginLeft: 10,
        width: 200,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin:'20px 0'
    }
}

export const ItemCount = ({ stock , onAdd} ) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            Swal.fire("Oh No!", "Sorry, we don't have enough stock", "warning")
        }
    };

    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            Swal.fire("Ups!", "This Number cannot be less than 0", "warning")
        }
    };

    const handleAddToCart = () => (
        onAdd(count)
    );

    return (
        <div style={style.container}>
            <div style={style.counter}>
                <Button variant="outlined" onClick={handleSubtract} style={style.button}>-</Button>
                <h3 style={style.number}>{count}</h3>
                <Button variant="outlined" onClick={handleAdd} style={style.button}>+</Button>
            </div>
            <Button variant="contained" onClick={handleAddToCart} style={style.buttonAdd} disabled={count===0? true:false}>Add to Cart</Button>
        </div>
    )
}

export default ItemCount
