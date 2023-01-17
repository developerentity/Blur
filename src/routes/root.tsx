import {
    Box,
    Drawer,
    MenuItem,
    MenuList,
} from "@mui/material"
import { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Basket from "../components/Basket";
import Header from "../components/Header";
import LoadingView from "../components/LoadingView";
import Notifier from "../components/Notifier";

const list = [
    {
        href: '/home',
        title: 'Home',
    },
    {
        href: '/projects',
        title: 'Projects',
    },
    {
        href: '/about',
        title: 'About',
    },
]
const getNavList = async () => {
    return list
}

export async function loader() {
    const navList = await getNavList();
    return { navList };
}

const Root = () => {

    const { navList }: any = useLoaderData();
    const [navOpen, setNavOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Header
                handleNavOpen={() => setNavOpen(true)}
                handleCart={() => setCartOpen(true)}
            />
            <Basket
                cartOpen={isCartOpen}
                cartClose={() => setCartOpen(false)} />
            <Outlet />
            <LoadingView />
            <Notifier />
            <Drawer
                anchor='left'
                open={navOpen}
                onClose={() => setNavOpen(false)}
            >
                <MenuList
                    sx={{ width: '200px' }}
                >
                    {navList.map((item: { title: string; href: string }) => (
                        <NavLink
                            key={item.title}
                            to={item.href}
                            style={{ margin: '0', textDecoration: "none" }}
                            className={({ isActive, isPending }) =>
                                isActive ? "active" : isPending ? "pending" : ""
                            }
                        >
                            <MenuItem
                                sx={{
                                    textDecoration: "none",
                                    marginRight: '3rem',
                                    width: '100%',
                                }}>
                                {item.title}
                            </MenuItem>
                        </NavLink>
                    ))}
                </MenuList>
            </Drawer >
        </Box>
    )
}

export default Root;