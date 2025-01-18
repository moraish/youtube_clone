import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function BurgerMenu() {
    const [navOpen, setNavOpen] = useState('false');
    function onBurgerClick() {
        setNavOpen(!navOpen);
    }
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onBurgerClick}
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