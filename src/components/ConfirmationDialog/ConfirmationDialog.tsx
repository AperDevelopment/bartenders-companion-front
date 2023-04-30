import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

type Props = {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    description: string;
};

const ConfirmationDialog = ({ open, onConfirm, onCancel, title, description }: Props) => {
    return (
        <Dialog open={open} onClose={onCancel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: 'var(--background-primary)', fontFamily: 'inherit' }}>
                {title}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: 'var(--background-primary)' }}>
                <DialogContentText id="alert-dialog-description" sx={{ color: 'var(--foreground-secondary)', fontFamily: 'inherit' }}>
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: 'var(--background-primary)' }}>
                <Button onClick={onCancel} sx={{ color: 'var(--foreground-primary)', fontFamily: 'inherit', '&:hover': { color: 'var(--foreground-accent)' } }}>
                    Cancel
                </Button>
                <Button onClick={onConfirm} sx={{ color: 'var(--foreground-primary)', fontFamily: 'inherit', '&:hover': { color: 'var(--foreground-accent)' } }}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
