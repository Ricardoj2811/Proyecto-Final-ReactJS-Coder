import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import DB from '../../dataBase.json'

const style = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}
export const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
                //const res = await fetch('https://fakestoreapi.com/products');
                //const res = await fetch('./dataBase.json');
                //const data = await res.json();
                const productFound = DB.find(product => product.id == id)
                setProducts(productFound);
            } catch {
                setError(true);
                console.log(error)
            }
        }
        getProducts();
    }, [id])

    return (
        <div style={style.container}>
            <ItemDetail title={products.title}
                description={products.description}
                img={products.image}
                price={products.price}
                stock={products.stock}
            />
        </div>
    )
}
