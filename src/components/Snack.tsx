import { Alert, Snackbar } from "@mui/material"


interface ISnackProps {
    message: string,
    isOpen: boolean,
    onClose: () => void,
    autoHideDuration?: number,
    color?: 'info' | 'success' | 'warning' | 'error',
}

const Snack = ({
    message,
    isOpen,
    onClose,
    autoHideDuration,
    color,
}: ISnackProps) => (
    <Snackbar
        open={isOpen}
        onClose={onClose}
        autoHideDuration={autoHideDuration || 4000}
    >
        <Alert
            onClose={onClose}
            severity={color || 'info'} sx={{ width: '100%' }}
        >
            {message}
        </Alert>
    </Snackbar>
)

export default Snack;