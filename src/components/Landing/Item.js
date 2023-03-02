import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
    container: {
        width: '25%',
        margin: 10,
        padding: 20,
    },
    img: {
        height:450
    },
    title: {
        fontSize: '25px',
        fontWeight: 'bold'
    },
    price: {
        fontSize: '40px',
    },
    containerInfo: {
        textAlign: 'bottom',
    },
    link: {
        textDecoration: 'none',
        color: 'black'      
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold'     
    }
}

const Item = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }} style={style.container}>
            <Link to={`/item/${product.id}`} style={style.link}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt="green iguana"
                        style={style.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={style.title}>
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={style.price}>
                            ${product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <Link to={`/item/${product.id}`} style={style.link}><Button variant="contained" style={style.button}>Details</Button></Link>
        </Card>
    )
}
export default Item