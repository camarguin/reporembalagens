import { Grid, Input, Box } from '@chakra-ui/react';
import { useState } from 'react';
import ProductCard from './ProductCard';

const CategoryProducts = ({ products }) => {
  const [query, setQuery] = useState("")
  return (
    <>
      <Box padding="0px 55px 30px">
        <Input
          placeholder='Buscar produto'
          onChange={event => setQuery(event.target.value)}
        />
      </Box>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={5}>
        {products.filter(product => {
          if (query === '') {
            return product;
          } else if (product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase())) {
            return product;
          }
        }).map((product) => (
          <ProductCard key={product.cod} product={product} />
        ))}
        {/* {products.map(product => (
        <ProductCard key={product.cod} product={product} />
      ))} */}
      </Grid>
    </>
  );
};

export default CategoryProducts;