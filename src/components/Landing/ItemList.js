import React from 'react'
import Item from './Item'

const style = {
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign:'center',
    }
}
const ItemList = ({products}) => {
    return (
        <div style={style.container}>
            {products.map((product)=>(
                <Item key={product.id} product={product}/>
            ))}
        </div>
        
    )
}

export default ItemList