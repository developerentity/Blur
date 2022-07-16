import { Backdrop, CircularProgress } from "@mui/material";
import { useAppSelector } from "../app/hooks";

const LoadingView = () => {

    const mainLoading = useAppSelector((state) => state.loading.mainLoading)

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={mainLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default LoadingView;