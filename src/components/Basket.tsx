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
import { IBlurOrder } from "../interface/interface";


interface IProps {
    cartOpen: boolean
    cartClose: () => void
    order?: Array<IBlurOrder>
}

const Basket = ({ cartOpen, cartClose, order }: IProps) => {

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
                {!order?.length
                    ? (<ListItem>Cart is empty</ListItem>)
                    : (<>
                        {order.map((item) => (<BasketItem key={item.id} item={item} />))}
                        <Divider />
                        <ListItem>
                            <Typography
                                sx={{ fontWeight: 800 }}
                            >
                                Total cost {order.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)} $
                            </Typography>
                        </ListItem>
                    </>)}
            </List>
        </Drawer >
    )
}

export default Basket