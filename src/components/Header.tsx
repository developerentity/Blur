import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomSearch from "./CustomSearch";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useAppSelector } from "../app/hooks";

const Header = ({
  handleNavOpen,
  handleCart,
}: {
  handleNavOpen: () => void,
  handleCart: () => void,
}) => {


  const orderListLength = useAppSelector((state) => state.order.orderList.length)
  const [value, setValue] = useState('')

  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleNavOpen}>
          <Icon icon='line-md:menu' />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, ml: 2, display: { xs: "none", sm: "block" } }}
        >
          BLUR
        </Typography>
        <CustomSearch value={value} setValue={setValue} />
        <IconButton onClick={handleCart} sx={{ ml: 2 }}>
          <Badge
            color='warning'
            badgeContent={orderListLength}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
