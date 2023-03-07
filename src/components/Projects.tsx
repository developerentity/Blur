import React, { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
import { useLoaderData } from "react-router-dom";
import { getDataByUrl } from "../requests";
import shuffle from 'lodash.shuffle'
import useMedia from '../hooks/useMedia';
import styles from './styles.module.css'

export async function loader() {
    const res = await getDataByUrl('https://api.unsplash.com/photos', { per_page: 15 })
    return { res };
}

const Projects = () => {

    const { res }: any = useLoaderData()
    const newData = res.map((item: any) => {
        return { css: item.urls.regular, height: 300 }
    })

    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
    const [ref, { width }] = useMeasure()
    const [items, set] = useState(newData)
    useEffect(() => {
        const t = setInterval(() => set(shuffle), 3000)
        return () => clearInterval(t)
    }, [])

    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0) 
        let gridItems = items.map((child: { height: number; }) => {
            const column = heights.indexOf(Math.min(...heights)) 
            const x = (width / columns) * column 
            const y = (heights[column] += child.height / 2) - child.height / 2 
            return { ...child, x, y, width: width / columns, height: child.height / 2 }
        })
        return [heights, gridItems]
    }, [columns, items, width])

    const transitions = useTransition(gridItems, {
        key: (item: { css: string; height: number }) => item.css,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    })



    return (
        // <Grid container spacing={2}>
        //     {items.map((item: any) => (
        //         <Grid key={item.id} item xs={6} md={4}>
        //             <CardActionArea>
        //                 <Card sx={{
        //                     height: '100%',
        //                     display: 'flex',
        //                     flexDirection: 'column',
        //                     justifyContent: 'space-between'
        //                 }}>
        //                     <CardMedia
        //                         component='img'
        //                         height={140}
        //                         image={item.urls.regular}
        //                         alt={'image'}
        //                     />
        //                 </Card>
        //             </CardActionArea>
        //         </Grid>
        //     ))} 

        // </Grid>


        <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
            {transitions((style, item) => (
                <a.div style={style}>
                    <div style={{ backgroundImage: `url(${item.css})` }} />
                </a.div>
            ))}
        </div>
    );
};

export default Projects;
