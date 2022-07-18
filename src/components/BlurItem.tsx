import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IBlur } from "../App";
import { useAppDispatch } from "../app/hooks";
import { enqueueSnackbar } from "../app/slices/notifierSlice";
import { addProduct } from "../app/slices/orderSlice";

const BlurItem = ({ item }: { item: IBlur }) => {

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(addProduct({ ...item, quantity: 1 }))
    dispatch(enqueueSnackbar({ message: 'Item successfully added to cart!', options: { variant: 'success' } }));
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
