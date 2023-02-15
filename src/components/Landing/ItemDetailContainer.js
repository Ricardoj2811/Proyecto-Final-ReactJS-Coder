import React from 'react'
import ItemDetail from './ItemDetail'

const style = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}
export const ItemDetailContainer = ({ product }) => {
    return (
        <div style={style.container}>
            <ItemDetail title={product.title}
                description={product.description}
                img={product.image}
                price={product.price}
                stock={product.stock}
            />
        </div>
    )
}
