import React, { useState } from 'react'
import swal from 'sweetalert';

const style = {
    counter: {
        width: 200,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
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
        height: 100,
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
}

export const ItemCount = ({ stock , onAdd} ) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            swal("Oh No!", "Lo sentimos, No contamos con Stock Suficiente", "warning")
        }
    };

    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            swal("Ups!", "Este Numero no puede ser menor a 0", "warning")
        }
    };

    const handleAddToCart = () => (
        onAdd(count)
    );

    return (
        <div style={style.container}>
            <div style={style.counter}>
                <button onClick={handleSubtract} style={style.button}>-</button>
                <h1 style={style.number}>{count}</h1>
                <button onClick={handleAdd} style={style.button}>+</button>
            </div>
            <button onClick={handleAddToCart} style={style.buttonAdd} disabled={count===0? true:false}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
