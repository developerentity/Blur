import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IBlur } from "../App";
import { useAppDispatch } from "../app/hooks";
import { addProduct } from "../features/order/orderSlice";

const BlurItem = ({ item }: { item: IBlur }) => {

  const dispatch = useAppDispatch()

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
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
            onClick={() => dispatch(addProduct({ ...item, quantity: 1 }))}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default BlurItem;
