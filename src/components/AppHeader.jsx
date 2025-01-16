import { AppBar, Box, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeIcon from '../assets/youtube_icon.svg';


function AppHeader() {
    return (
        <div >

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="youtube_icon"
                            sx={{ mr: 2 }}
                        >
                            <img src="../assets/youtube_icon.svg" />

                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ marginLeft: '3%' }}>
                            YouTube
                        </Typography>
                    </Toolbar>

                </AppBar>
            </Box>
        </div>
    )
}


export default AppHeader;