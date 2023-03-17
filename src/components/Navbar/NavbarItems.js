import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { db } from '../../Firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

const style = {
    ul: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    li: {
        listStyleType: 'none',
        marginRight: 10
    },
    a: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
}

export const NavbarItems = () => {
    const categories = [];
    const [cat, setCat] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        getDocs(productsCollection)
            .then((data) => {
                const list = data.docs.map(product => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                list.map((item) => (
                    (categories.findIndex(e => e.category === item.category))) === -1 && categories.push(item)
                )
                setCat(categories)
            })
            .catch(() => {
                setError(true)
            })
    })

    return (
        <>
            {!error ? (
                <div>
                    <ul style={style.ul}>
                        {cat.map((item) => {
                            return (
                                <li style={style.li} key={item.id}><NavLink style={style.a} to={item.link}>{item.category}</NavLink></li>
                            )
                        })}
                    </ul>
                </div>)
                : (<h1>Ups! something went wrong</h1>)
            }
        </>
    )
}

export default NavbarItems
