import React, { useEffect, useState } from 'react'

export const NavbarItems = () => {

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
            fontWeight: 'bold'
        },

    }
    const [products, setProducts] = useState([]);
    const categories = [];
    const [cat, setCat] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                //const res = await fetch('https://fakestoreapi.com/products');
                const res = await fetch('./dataBase.json');
                const data = await res.json();
                setProducts(data);
                products.map((item) => (
                    (categories.findIndex(e => e.category === item.category)))===-1 && categories.push(item)
                )
                setCat(categories)
            } catch {
                setError(true);
            }
        }
        getProducts();
    }, [cat])

    return (
        <div>
            <ul style={style.ul}>
                {cat.map((item) => {
                    return (
                        <li style={style.li} key={item.id}><a style={style.a} href={item.link}>{item.category}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}
