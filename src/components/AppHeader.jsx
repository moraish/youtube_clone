import { AppBar, Box, Toolbar } from "@mui/material";
import CreateButton from "./Toolbar/CreateButton";
import { useState } from "react";
import BurgerMenu from "./Toolbar/BurgerMenu";
import YoutubeIcon from "./Toolbar/YoutubeIcon";
import SearchBar from "./Toolbar/SearchBar";
import MicrophoneIcon from "./Toolbar/MicrophoneIcon";
import NotificationIcon from "./Toolbar/NotificationIcon";
import AccountIcon from "./Toolbar/AccountIcon";





function AppHeader() {


    return (
        <>

            <AppBar position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    bgcolor: '#000000'
                }}>
                <Toolbar>
                    {/* Buger Menu Icon */}
                    <Box display={'flex'}>
                        <BurgerMenu />
                        <YoutubeIcon />
                        <SearchBar />
                        <MicrophoneIcon />


                        <CreateButton />

                        <NotificationIcon />

                        <AccountIcon />


                    </Box>
                </Toolbar>



            </AppBar>

        </>
    )
}


export default AppHeader;

