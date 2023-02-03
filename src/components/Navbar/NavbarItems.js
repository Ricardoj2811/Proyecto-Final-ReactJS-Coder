import React from 'react'

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

    const MenuItems = [
        { id: 1, name: 'Hombre', link: 'http://localhost:3000/' },
        { id: 2, name: 'Mujer', link: 'http://localhost:3000/' },
        { id: 3, name: 'Niños', link: 'http://localhost:3000/' },
        { id: 4, name: 'Todo', link: 'http://localhost:3000/' }
    ]

    return (
        <div>
            <ul style={style.ul}>
                {MenuItems.map((item) => {
                    return (
                        <li style={style.li} key={item.id}><a style={style.a} href={item.link}>{item.name}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}
