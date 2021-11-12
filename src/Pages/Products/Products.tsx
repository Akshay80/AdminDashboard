import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './products.css';
import Progress from '../../Components/Progress/Progress';

interface Product
{
    title: string
    category: string
    image: string
}
 

export default function Products() {

 const [products, setProducts] = useState<Product[]>([]);
 const [loading, setLoading] = useState(false);

 function getProducts(): void
 {
    setLoading(true);
    setTimeout(() => {
        fetch(`https://fakestoreapi.com/products?limit=9`)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
        });
      setLoading(false);
    }, 1000);
 }

 useEffect(() => {
     getProducts()
 },[])
 
    return (
      
      <div className="Products">
          <Typography variant="h5" textAlign="center" style={{paddingBottom:'20px', textAlign: "center"}}>Products</Typography>
          {loading? <Progress />: null}
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
         
         
          {products.map(elements => 
        <Grid item xs={2} sm={4} md={4}>
        
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                className="cardimg"
                component="img"
                height="140"
                image={elements.image}
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{textTransform: "capitalize"}}>
                  {elements?.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{textOverflow: "ellipsis", overflow: "hidden"}}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi alias fugit minus voluptate, enim, quasi quibusdam laudantium architecto veniam molestiae quo libero laboriosam nemo!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
         )}
      </Grid>
    </Box>
    </div>
  );
}
