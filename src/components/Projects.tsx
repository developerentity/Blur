import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { getDataByUrl } from "../requests";

export async function loader() {
    const photos = await getDataByUrl('https://api.unsplash.com/photos', { per_page: 12 })
    return { photos };
}

const Projects = () => {

    const { photos }: any = useLoaderData();

    return (
        <Grid container spacing={2}>
            {photos.map((item: any) => (
                <Grid key={item.id} item xs={6} md={4}>
                    <CardActionArea>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <CardMedia
                                component='img'
                                height={140}
                                image={item.urls.regular}
                                alt={'image'}
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
