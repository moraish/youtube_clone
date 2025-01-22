import { Box, Typography } from "@mui/material";

function DrawerFooter() {

    const footer = ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers']
    const footer_2 = ['Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features', 'NFL Sunday Ticket'] // 2025 Google LLC

    return (
        <>
            <Box display='flex' flexWrap="wrap" marginTop={2}>
                {footer.map((value, index) => (
                    <Typography key={index}
                        variant="body2"
                        color="textSecondary"
                        fontWeight="bold"
                        paddingLeft={2}
                        sx={{
                            color: 'rgb(100,100,100)',
                            cursor: 'pointer'
                        }}>
                        {value}
                    </Typography>
                ))}
            </Box>
            <br />
            <Box display='flex' flexWrap="wrap">
                {footer_2.map((value, index) => (
                    <Typography key={index}
                        variant="body2"
                        color="textSecondary"
                        fontWeight="bold"
                        paddingLeft={2}
                        sx={{
                            color: 'rgb(100,100,100)',
                            cursor: 'pointer',
                        }}>
                        {value}
                    </Typography>
                ))}
            </Box>
            <br />
            <Typography variant="body2" padding={2} sx={{ color: 'rgb(100,100,100)' }}>© 2025 Google LLC</Typography>
        </>
    )
}

export default DrawerFooter;