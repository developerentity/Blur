import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { IBlur } from "../App"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasketItem from "./BasketItem";


interface IProps {
    cartOpen: boolean
    cartClose: () => void
    order?: Array<IBlur>
    removeFromOrder?: (any: any) => void
}

const Basket = ({ cartOpen, cartClose, order, removeFromOrder }: IProps) => {

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
                        {order.map((item) => (<BasketItem item={item} />))}
                        <Divider />
                        <ListItem>
                            <Typography
                                sx={{ fontWeight: 800 }}
                            >
                                Total cost {order.reduce((acc: any, item: any) => acc + item.price, 0)} $
                            </Typography>
                        </ListItem>
                    </>)}
            </List>

        </Drawer >
    )
}

export default Basket