import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { db } from '../../Firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { CircularProgress } from '@mui/material'

const style = {
    greeting: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center',
        marginBottom: 30
    },
    container: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center"
    }
}

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const collectionFiltered = categoryId ? query(productsCollection, where('category', '==', categoryId)) : productsCollection;

        getDocs(collectionFiltered)
            .then((data) => {
                const list= data.docs.map(product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setProducts(list)
            })
            .catch(()=>{setError(true)})
    }, [categoryId])

    return (
        <>
            <div style={style.greeting}>{greeting}</div>
            <div style={style.container}>
                {products.length ? <ItemList products={products} /> : <CircularProgress />}
            </div>
        </>

    )
}
