import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material";

function MenuItems({ items, currentMenu, onMenuClick }) {
    return (
        <List sx={{
            marginLeft: 2,
            marginRight: 1
        }}>
            {Object.entries(items).map(([text, icon]) => (
                <ListItem key={text} disablePadding sx={{
                    borderRadius: 4,
                    // padding: '8px',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }
                }
                } >
                    <ListItemButton
                        selected={currentMenu === text}
                        onClick={() => onMenuClick(text)}
                        sx={{
                            borderRadius: 4,
                            padding: '8px',
                            '&.Mui-selected': {
                                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                },
                            },
                        }}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))
            }
        </List >
    )
}

export default MenuItems;