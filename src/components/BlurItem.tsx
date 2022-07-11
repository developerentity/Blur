import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const BlurItem = ({
  id, img, text
}: {
  id: string | number;
  img: string | undefined,
  text: string | undefined,
}) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          height={140}
          image={img}
          alt={'image'}
        />
        <CardContent>
          <Typography >
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='medium' variant='outlined' onClick={() => console.log(id)}>Go</Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default BlurItem;
