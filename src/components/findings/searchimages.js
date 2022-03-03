import {Card, CardContent, Grid, Typography,  Button, Divider, Box, CardHeader, TextField } from '@mui/material';
import { ImageCard } from "../findings/image-card";
import { products } from "../../__mocks__/products";


export const SearchImages = (props) => (
    <Card>
      <CardHeader
          title="Select one of the following images to see similar images found."
      />
      
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Box sx={{ 
          pt: 3, 
          overflow: "auto"
          }}>
              <Grid container spacing={3} 
              sx={{ 

                display: "flex",
                flexWrap: "nowrap",
                overflow: "auto"
                }}>
              >
                {products.map((product) => (
                  <Grid item key={product.id} >
                    <ImageCard product={product} />
                  </Grid>
                ))} 
              </Grid>
          </Box>

        </Grid>
      </CardContent>
    </Card>
);
