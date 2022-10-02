import { Box, alpha, InputBase, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const CustomSearch = ({
    setValue,
    value,
    title,
    reset,
    timeout = 700,
    placeholder = 'Search'
}: {
    setValue: (str: string) => void,
    value: string,
    title?: string,
    reset?: boolean,
    timeout?: number,
    placeholder?: string,
}) => {
    const [query, setQuery] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setValue(query);
        }, timeout);
        return () => clearTimeout(timeoutId);
    }, [setValue, timeout, query]);

    const [data, setData] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data.filter((el: any) => el.toLowerCase().includes(query.toLowerCase())))
    }, [query])

    // const onReset = () => {
    //     setValue('');
    //     setQuery('');
    // };

    return (
        <>
            {title ? <Typography variant="h5">{title}</Typography> : null}
            <Search>
                <SearchIconWrapper>
                    <Box
                        component={Icon}
                        icon="line-md:search"
                        sx={{ color: 'text.disabled', width: 25, height: 25 }}
                    />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder={`${placeholder}…`}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    );
};

export default CustomSearch;