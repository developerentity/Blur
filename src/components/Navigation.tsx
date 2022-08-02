import {
    Drawer,
    MenuItem,
    MenuList,
} from "@mui/material"
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";


interface IProps {
    navOpen: boolean
    navClose: () => void
    navList?: Array<{ href: string, title: string }>
}

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <MenuItem
            component={Link}
            to={to}
            sx={{
                textDecoration: "none",
                marginRight: '3rem',
                width: '100%',
                color: (theme) =>
                    match
                        ? 'undefined'
                        : `${theme.palette.primary.main} !important`,
            }}
            {...props}
        >
            {children}
        </MenuItem >
    );
}


const Navigation = ({ navOpen, navClose, navList }: IProps) => (
    <Drawer
        anchor='left'
        open={navOpen}
        onClose={navClose}
    >
        <MenuList
            sx={{ width: '200px' }}
        >
            {navList?.map((link) => (
                <CustomLink
                    key={link.title}
                    to={link.href}
                >
                    {link.title}
                </CustomLink>
            ))}
        </MenuList>
    </Drawer >
)

export default Navigation;