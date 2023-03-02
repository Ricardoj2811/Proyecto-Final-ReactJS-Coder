import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import DB from '../../dataBase.json'

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
        fontSize:25
    },
}

export const NavbarItems = () => {
    const categories = [];
    const [cat, setCat] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                //const res = await fetch('https://fakestoreapi.com/products');
                //const res = await fetch('./dataBase.json');
                //const data = await res.json();
                DB.map((item) => (
                    (categories.findIndex(e => e.category === item.category)))===-1 && categories.push(item)
                )
                setCat(categories)
            } catch {
                setError(true);
                console.log(error)
            }
        }
        getProducts();
    },[])

    return (
        <div>
            <ul style={style.ul}>
                {cat.map((item) => {
                    return (
                        <li style={style.li} key={item.id}><NavLink style={style.a} to={item.link}>{item.category}</NavLink></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavbarItems
