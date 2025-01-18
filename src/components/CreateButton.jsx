import { Button } from "@mui/material";

function CreateButton() {
    return (
        <>
            <Button sx={{
                color: "white",
                bgcolor: 'rgb(46,46,46)',
                borderRadius: '9999px',
                paddingX: 1,
                '&:hover': {
                    bgcolor: 'rgb(66,66,66)'
                }

            }}>+ Create</Button>
        </>
    )
}

export default CreateButton;