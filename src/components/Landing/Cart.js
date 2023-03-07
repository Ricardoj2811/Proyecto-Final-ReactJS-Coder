import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 30
    },
    img: {
        height: 50,
        width: 'auto'
    },
    table: {
        maxWidth: 1400,
    },
    rowsTitle: {
        fontWeight: 'bold',
        fontSize: 30
    },
    message: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 60
    }
}

const Cart = () => {
    const { cart, removeProduct, clearCart } = useContext(CartContext)
    return (
        <>
            {cart.length ?
                <>
                    <div style={style.container}>
                        <TableContainer style={style.table} component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={style.rowsTitle} align="center">Product</TableCell>
                                        <TableCell style={style.rowsTitle} align="center">Title</TableCell>
                                        <TableCell style={style.rowsTitle} align="center">Price</TableCell>
                                        <TableCell style={style.rowsTitle} align="center">Quantity</TableCell>
                                        <TableCell style={style.rowsTitle} align="center">Delete</TableCell>
                                        <TableCell style={style.rowsTitle} align="center">Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.map((product) => (
                                        <TableRow
                                            key={product.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center">
                                                <img style={style.img} src={product.image} alt={product.title} />
                                            </TableCell>
                                            <TableCell align="center">{product.title}</TableCell>
                                            <TableCell align="center">{product.price}</TableCell>
                                            <TableCell align="center">{product.quantity}</TableCell>
                                            <TableCell align="center"><Button variant="contained" color="error" onClick={() => removeProduct(product.id)}><ClearIcon /></Button></TableCell>
                                            <TableCell align="center">{parseInt(product.price * product.quantity)}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={5} align="center" style={style.rowsTitle}>Total</TableCell>
                                        <TableCell align="center" style={style.rowsTitle}>{cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div><div style={style.container}>
                        <Button variant="contained" color="error" onClick={clearCart}>Remove All Products</Button>
                    </div>
                </>
                : <h1 style={style.message}>You don't have any products in your Cart, to add some click <Link to={'/'}>Here</Link></h1>}
        </>
    )
}

export default Cart