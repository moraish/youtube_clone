import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material";

function MenuItems({ items }) {
    return (
        <List>
            {Object.entries(items).map(([text, icon]) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default MenuItems;