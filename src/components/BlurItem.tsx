import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useSnackbar, VariantType } from "notistack";
import { IBlur } from "../App";
import { useAppDispatch } from "../app/hooks";
import { addProduct } from "../app/slices/orderSlice";

const BlurItem = ({ item }: { item: IBlur }) => {

  const { enqueueSnackbar } = useSnackbar();

  const showSnack = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  const dispatch = useAppDispatch()

  const handleClick = () => {
    showSnack('Item successfully added to cart!', 'success')
    dispatch(addProduct({ ...item, quantity: 1 })) 
  }

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <CardMedia
          component='img'
          height={140}
          image={item.poster}
          alt={'image'}
        />
        <CardContent>
          <Typography >
            {item.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='medium'
            variant='outlined'
            onClick={handleClick}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default BlurItem;
