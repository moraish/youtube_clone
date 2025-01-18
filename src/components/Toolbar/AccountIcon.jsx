import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";

function AccountIcon() {
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
            <AccountCircleIcon />
        </IconButton>

    )
}

export default AccountIcon;