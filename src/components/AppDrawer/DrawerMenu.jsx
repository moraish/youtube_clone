import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
// shorts
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
// youtube music import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DownloadIcon from '@mui/icons-material/Download';


import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
// playables

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';


function DrawerMenu() {
    const primary_elements = ['Home', 'Shorts', 'Subscriptions', 'YouTube Music']
    const your_elements = ['History', 'Playlist', 'Your Videos', 'Watch Later', 'Liked videos', 'Downloads']
    const subscriptions = ['Jason Goodison', 'Caleb Curry', 'theNewBoston', 'take U forward', 'Matt Wolfe'] // Show more
    const explore = ['Trending', 'Shopping', 'Music', 'Movies & TV', 'Live', 'Gaming', 'News', 'Sports', 'Courses', 'Fashion & Beauty', 'Podcasts', 'Playables']
    const more_youtube = ['YouTube Studio', 'YouTube TV', 'YouTube Music', 'YouTube Kids']
    const settings = {
        'Settings': <SettingsOutlinedIcon sx={{ color: 'white' }} />,
        'Report history': <OutlinedFlagOutlinedIcon sx={{ color: 'white' }} />,
        'Help': <HelpOutlineOutlinedIcon sx={{ color: 'white' }} />,
        'Send feedback': <FeedbackOutlinedIcon sx={{ color: 'white' }} />
    }

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
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
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
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
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
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
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
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
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
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />

            {/* {Object.entries(obj).map(([key, value]) => (
          <div key={key}>
            <h1>{key}</h1>
            {value}
          </div>

        ))}
 */}
            <List>
                {Object.entries(settings).map(([text, icon]) => (
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

            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
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
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
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