import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomSearch from "./CustomSearch";
import { useState } from "react";

const Header = ({
  handleNavOpen,
  handleCart,
  orderLength
}: {
  handleNavOpen: () => void,
  handleCart: () => void,
  orderLength?: number
}) => {

  const [value, setValue] = useState('')

  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleNavOpen}>
          <MenuIcon />
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
            badgeContent={orderLength}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
