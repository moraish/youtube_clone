import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function BurgerMenu({ drawerOpen, setDrawerOpen }) {
    function toggleDrawer(event) {
        setDrawerOpen(!drawerOpen);
        event.stopPropagation();
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
                '&:hover': {
                    bgcolor: 'rgb(66,66,66)'
                }
            }}
        >
            <MenuIcon />
        </IconButton>
    )
}

export default BurgerMenu;