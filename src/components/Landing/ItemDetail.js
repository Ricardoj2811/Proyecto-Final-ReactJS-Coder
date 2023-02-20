import React from 'react'
import swal from 'sweetalert'
import ItemCount from './ItemCount'

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
    }
}

const ItemDetail = ({ title, description, price, img, stock }) => {

    const showProducts = (items) => (
        swal(`La cantidad de productos agregados al carrito son: ${items}`)
    )
    
    return (
        <div style={style.container}>
            <img src={img} alt={title} style={style.img}/>
            <div style={style.containerInfo}>
                <h2 style={style.title}>{title}</h2>
                <p style={style.desc}>{description}</p>
                <span style={style.price}>${price}</span>
                <ItemCount stock={stock} onAdd={showProducts} />
            </div>
        </div>
        
    )
}

export default ItemDetail