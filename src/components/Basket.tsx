import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasketItem from "./BasketItem";
import { useAppSelector } from "../app/hooks";


interface IProps {
    cartOpen: boolean
    cartClose: () => void
}

const Basket = ({ cartOpen, cartClose }: IProps) => {

    const orderList = useAppSelector((state) => state.order.orderList)

    return (
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={cartClose}
        >
            <List sx={{ width: '400px' }}>
                <ListItem divider>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Basket" />
                </ListItem>
                {!orderList?.length
                    ? (<ListItem>Cart is empty</ListItem>)
                    : (<>
                        {orderList.map((item) => (<BasketItem key={item.id} item={item} />))}
                        <Divider />
                        <ListItem>
                            <Typography
                                sx={{ fontWeight: 800 }}
                            >
                                Total cost {orderList.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)} $
                            </Typography>
                        </ListItem>
                    </>)}
            </List>
        </Drawer >
    )
}

export default Basket