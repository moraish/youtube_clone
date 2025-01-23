import { AppBar, Box, Toolbar } from "@mui/material";
import CreateButton from "./Toolbar/CreateButton";
import { useState } from "react";
import BurgerMenu from "./Toolbar/BurgerMenu";
import YoutubeIcon from "./Toolbar/YoutubeIcon";
import SearchBar from "./Toolbar/SearchBar";
import MicrophoneIcon from "./Toolbar/MicrophoneIcon";
import NotificationIcon from "./Toolbar/NotificationIcon";
import AccountIcon from "./Toolbar/AccountIcon";





function AppHeader({ drawerOpen, setDrawerOpen }) {

    return (
        <>

            <AppBar position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    bgcolor: '#000000'
                }}>
                {/* <Toolbar> */}

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 16px',
                        height: '64px',
                        // bgcolor: 'background.paper'
                    }}>

                    {/* Left Section: Burger Menu and Icon */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        // bgcolor: 'red'
                    }}
                    >
                        <BurgerMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                        <YoutubeIcon />
                    </Box>

                    {/* Center Section: Search and Microphone */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexGrow: 1,
                        maxWidth: '600px',
                        mx: 2,
                        gap: 1,
                        // bgcolor: 'blue'
                    }}>
                        <SearchBar />
                        <MicrophoneIcon />
                    </Box>

                    {/* Right Section: Create, Notification, and Account */}

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                        gap: 2,
                        // bgcolor: 'green',
                        // flexGrow: 1
                    }}>
                        <CreateButton />
                        <NotificationIcon />
                        <AccountIcon />
                    </Box>


                </Box>
                {/* </Toolbar> */}



            </AppBar >

        </>
    )
}


export default AppHeader;

