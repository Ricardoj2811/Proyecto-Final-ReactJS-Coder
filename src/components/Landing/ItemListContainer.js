import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import ItemCount from './ItemCount'
import { ItemDetailContainer } from './ItemDetailContainer'
import ItemList from './ItemList'

const style = {
    greeting: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center',
        marginBottom: 30        
    },
    container:{
        marginTop:50
    }
}

export const ItemListContainer = ({ greeting }) => {

    const stockDB = 10
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
                //const res = await fetch('https://fakestoreapi.com/products');
                const res = await fetch('./dataBase.json');
                const data = await res.json();
                setProducts(data);
            } catch {
                setError(true);
            }
        }
        getProducts();
    }, [])
    

    // const showProducts = (items) => (
    //     swal(`La cantidad de productos agregados al carrito son: ${items}`)
    // )

    return (
        <>
            <div style={style.greeting}>{greeting}</div>
            {/* <ItemCount stock={stockDB} onAdd={showProducts} /> */}
            <div style={style.container}>
                {products.length?<ItemList products={products}/>:<h1>Cargando..</h1>}
            </div>
            {/* <ItemDetailContainer product={products[0]}/> */}
        </>

    )
}
