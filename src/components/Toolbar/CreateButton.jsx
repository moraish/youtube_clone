import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function CreateButton() {
    return (
        <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="create_content"
            sx={{
                bgcolor: 'rgb(46,46,46)',
                borderRadius: '9999px',
                '&:hover': {
                    bgcolor: 'rgb(66,66,66)'
                }
            }}
        >
            <Typography variant="button" sx={{ fontSize: '0.875rem' }}>
                + Create
            </Typography>
        </IconButton>
    )
}

export default CreateButton;