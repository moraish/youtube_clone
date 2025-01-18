import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import IconButton from "@mui/material/IconButton";

function MicrophoneIcon() {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="microphone"
            sx={{
                bgcolor: 'rgb(46,46,46)',
                borderRadius: '100%',
                '&:hover': {
                    bgcolor: 'rgb(66,66,66)'
                }
            }}
        >
            <MicOutlinedIcon />
        </IconButton>
    )
}

export default MicrophoneIcon;