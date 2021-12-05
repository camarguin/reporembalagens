import { Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const CategoryProducts = ({ products }) => {
  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={1}>
      {products.map(product => (
        <ProductCard key={product.cod} productImg={product.image} productNome={product.nome} productDescricao={product.descricao} productCod={product.cod} />
      ))}
    </Grid>
  );
};

export default CategoryProducts;