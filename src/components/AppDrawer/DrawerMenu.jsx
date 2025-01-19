import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';


function DrawerMenu() {
    const primary_elements = ['Home', 'Shorts', 'Subscriptions', 'YouTube Music']
    const your_elements = ['History', 'Playlist', 'Your Videos', 'Watch Later', 'Liked videos', 'Downloads']
    const subscriptions = ['Jason Goodison', 'Caleb Curry', 'theNewBoston', 'take U forward', 'Matt Wolfe'] // Show more
    const explore = ['Trending', 'Shopping', 'Music', 'Movies & TV', 'Live', 'Gaming', 'News', 'Sports', 'Courses', 'Fashion & Beauty', 'Podcasts', 'Playables']
    const more_youtube = ['YouTube Studio', 'YouTube TV', 'YouTube Music', 'YouTube Kids']
    const settings = ['Settings', 'Report history', 'Help', 'Send feedback']
    const footer = ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers']
    const footer_2 = ['Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features', 'NFL Sunday Ticket'] // 2025 Google LLC


    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {primary_elements.map((text, index) => (
                    <ListItem key={text} disablePadding>

                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{ color: 'white' }} /> : <MailIcon sx={{ color: 'white' }} />}
                            </ListItemIcon >
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {your_elements.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {subscriptions.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {explore.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {more_youtube.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {settings.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {footer.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {footer_2.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default DrawerMenu;