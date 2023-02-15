import React, { useState, useEffect } from 'react'

export const StateComponent = () => {
    const [count, setCount] = useState(0);

    // Ciclos de vida

    console.log('constructor')

    useEffect(() => {
        console.log('montaje y actualizacion')
    })

    const handlerAdd = () => {
        setCount(count + 1)
    }

    const handlerSubtract = () => {
        setCount(count - 1)
    }

    const handlerReset = () => {
        setCount(0)
    }

    return (
        <>
            {console.log('render')}
            <h1>{count}</h1>
            <button onClick={handlerAdd}>Sumar</button>
            <button onClick={handlerSubtract}>Restar</button>
            <button onClick={handlerReset}>Reset</button>
        </>
        
    )
}

export default StateComponent
