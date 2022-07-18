import { Button, ButtonGroup, ListItem, ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/system";
import { IBlurOrder } from "../interface/interface";
import { useAppDispatch } from "../app/hooks";
import { addProduct, decreaseItemQuantity, removeProduct } from "../app/slices/orderSlice";
import { enqueueSnackbar } from "../app/slices/notifierSlice";


const BasketItem = ({ item }: { item: IBlurOrder }) => {

    const dispatch = useAppDispatch()

    const onDelete = () => {
        dispatch(removeProduct(item.id))
        dispatch(enqueueSnackbar({ message: 'Item has been removed from cart!', options: { variant: 'warning' } }))
    }

    return (
        <ListItem>
            <ListItemText sx={{ mx: 2 }}>{`${item.quantity}x`}</ListItemText>
            <ListItemText sx={{ mx: 2 }}>{item.name}</ListItemText>

            <Box sx={{ display: 'block' }}>
                <ButtonGroup size="small" variant="outlined">
                    <Button
                        disabled={item.quantity >= 10}
                        onClick={() => dispatch(addProduct(item))}
                    >
                        <AddIcon />
                    </Button>
                    {item.quantity > 1
                        ? <Button onClick={() => dispatch(decreaseItemQuantity(item.id))}>
                            <RemoveIcon />
                        </Button>
                        : <Button onClick={onDelete}>
                            <DeleteIcon />
                        </Button>}
                </ButtonGroup>
            </Box>
        </ListItem>
    )
}

export default BasketItem;