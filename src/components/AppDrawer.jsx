import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppHeader from './AppHeader';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import DrawerMenu from './AppDrawer/DrawerMenu';


const drawerWidth = 240;

export default function AppDrawer() {


    const [drawerOpen, setDrawerOpen] = useState(true);

    function toggleDrawer() {
        console.log("Clicked!")
        setDrawerOpen(!drawerOpen);
    }

    function handleDrawerClose() {
        setDrawerOpen(false);
    }
    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppHeader />


            <ClickAwayListener onClickAway={handleDrawerClose}>
                <Drawer
                    open={drawerOpen}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            bgcolor: 'black',
                            color: 'white',
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: '#000000',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#888888',
                                borderRadius: '4px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: '#666666',
                            },
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#888888 #000000',
                        },
                    }}
                >
                    <Toolbar />
                    <DrawerMenu />

                </Drawer>
            </ClickAwayListener>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />

            </Box>

            <Button onClick={toggleDrawer}>Click!</Button>
        </Box>
    );
}
