import { Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../data";
import BlurItem from "./ProductItem";

export async function loader() {
  const products = getProducts();
  return { products };
}

const Products = () => {

  const { products }: any = useLoaderData();

  return (
    <Grid container spacing={2}>
      {products.map((item: any) => (
        <BlurItem
          key={item.id}
          item={item}
        />
      ))}
    </Grid>
  );
};

export default Products;
