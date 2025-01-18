import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from "@mui/material/IconButton";

function NotificationIcon() {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="microphone"
            sx={{
                // bgcolor: 'rgb(46,46,46)',
                borderRadius: '100%',
                '&:hover': {
                    bgcolor: 'rgb(66,66,66)'
                }
            }}
        >
            <NotificationsNoneIcon />
        </IconButton>
    )
}

export default NotificationIcon;