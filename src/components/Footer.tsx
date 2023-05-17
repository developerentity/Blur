import {
    Box,
    Container,
    Stack,
    Typography
} from "@mui/material";

const Footer = () => {

    return (
        <Box
            sx={{
                py: 2,
                textAlign: 'center',
                background: '#35363A',
                fontSize: 14,
                color: (theme) => theme.palette.primary.main.toString()
            }}
        >
            <Container maxWidth='md'>
                <Stack direction="row" spacing={5}>
                    <Typography sx={{ fontSize: 'inherit' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
                    <Typography sx={{ fontSize: 'inherit' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
                    {/* <Typography sx={{ fontSize: 'inherit' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography> */}
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
