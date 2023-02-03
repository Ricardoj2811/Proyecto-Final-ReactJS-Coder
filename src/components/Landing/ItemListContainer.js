import React from 'react'

const style = {
    greeting: {
        fontSize: 40,
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    }
}

export const ItemListContainer = ({greeting}) => {
    return (
        <div style={style.greeting}>{greeting}</div>
    )
}
