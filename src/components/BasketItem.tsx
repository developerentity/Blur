import { IconButton, ListItem, ListItemText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { IBlur } from "../App";


const BasketItem = ({ item }: { item: IBlur }) => {

    return (
        <ListItem>
            <ListItemText>{item.name}</ListItemText>
            <IconButton>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default BasketItem;