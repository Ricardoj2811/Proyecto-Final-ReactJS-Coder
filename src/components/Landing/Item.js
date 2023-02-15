import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const style = {
    container: {
        width: '25%',
        margin: 10,
        padding: 20,
    },
    img: {
        height:"100%"
    },
    title: {
        fontSize: '50px',
    },
    price: {
        fontSize: '40px',
    },
    containerInfo: {
        textAlign: 'bottom',
    }
}

const Item = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }} style={style.container}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                    style={style.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={style.price}>
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Item