import { Button } from '@mui/material'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import ItemCount from './ItemCount'
import { CartContext } from '../../context/CartContext'

const style = {
    container: {
        height:'100vh',
        maxWidth: 1400,
        display: 'flex',
        margin: '40px 0px'
    },
    img: {
        height:800
    },
    title: {
        fontSize: '50px',
    },
    price: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    desc: {
        fontSize: '40px',
    },
    containerInfo: {
        margin: 20,
        textAlign: 'center',
    },
    buttonAdd: {
        marginRight: 10,
        marginLeft: 10,
        width: 'auto',
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        display: 'block',
        margin: '20px auto'
    },
    link:{
        color: 'white',
        textDecoration: 'none'
    }
}

const ItemDetail = ({ product }) => {

    const [buttonCartStatus, setButtonCartStatus] = useState(true);
    const { addProduct } = useContext(CartContext);
    
    const onAdd = (items) => {
        Swal.fire("Excellent",`You just added ${items} products to cart`, "success");
        setButtonCartStatus(false);
        addProduct(product, items);
    };
    
    return (
        <div style={style.container}>
            <img src={product.image} alt={product.title} style={style.img}/>
            <div style={style.containerInfo}>
                <h2 style={style.title}>{product.title}</h2>
                <p style={style.desc}>{product.description}</p>
                <span style={style.price}>${product.price}</span>
                {buttonCartStatus? <ItemCount stock={product.stock} onAdd={onAdd} />: <Button variant="contained" style={style.buttonAdd}><Link style={style.link} to={'/cart'}>Go To Cart</Link></Button>}
            </div>
        </div>
        
    )
}

export default ItemDetail