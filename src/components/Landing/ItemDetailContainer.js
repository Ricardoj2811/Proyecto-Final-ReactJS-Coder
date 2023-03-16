import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'


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
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, id)

        getDoc(refDoc)
        .then((data) => {
            const product ={
                ...data.data(),
                id: data.id
            }
            setProducts(product)
        })
        .catch(()=>{setError(true)})
    }, [id])

    return (
        <div style={style.container}>
            <ItemDetail product={products}/>
        </div>
    )
}
