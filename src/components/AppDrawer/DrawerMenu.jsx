import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
// shorts
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'; // check 

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
import { YouTube_Studio, YouTube_TV, YouTube_Music, YouTube_Kids, YouTube_Shorts } from './Icons';
import DrawerFooter from './DrawerFooter';
import MenuItems from './MenuItems';
import { useState } from 'react';

function DrawerMenu() {

    const [currentMenu, setCurrentMenu] = useState('Home');

    const handleMenuClick = (menuName) => {
        setCurrentMenu(menuName);
    };

    // const primary_elements = ['Home', 'Shorts', 'Subscriptions', 'YouTube Music']
    const primary_elements = {
        "Home": <HomeIcon sx={{ color: 'white' }} />,
        "Shorts": <YouTube_Shorts sx={{ color: 'white' }} />,
        "Subscriptions": <SubscriptionsOutlinedIcon sx={{ color: 'white' }} />,
        "YouTube Music": <PlayCircleOutlinedIcon sx={{ color: 'white' }} />

    }
    // const your_elements = ['History', 'Playlist', 'Your Videos', 'Watch Later', 'Liked videos', 'Downloads']
    const your_elements = {
        "History": <HistoryOutlinedIcon sx={{ color: 'white' }} />,
        "Playlist": <PlaylistPlayOutlinedIcon sx={{ color: 'white' }} />,
        "Your Videos": <OndemandVideoOutlinedIcon sx={{ color: 'white' }} />,
        "Watch Later": <WatchLaterOutlinedIcon sx={{ color: 'white' }} />,
        "Liked videos": <ThumbUpOutlinedIcon sx={{ color: 'white' }} />,
        "Downloads": <DownloadIcon sx={{ color: 'white' }} />
    }

    // const subscriptions = ['Jason Goodison', 'Caleb Curry', 'theNewBoston', 'take U forward', 'Matt Wolfe'] // Show more

    const subscriptions = {
        'Jason Goodison': <Avatar sx={{ bgcolor: 'red', width: 36, height: 36, mt: 0.5 }}>J</Avatar>,
        'Caleb Curry': <Avatar sx={{ bgcolor: 'blue', width: 36, height: 36, mt: 0.5 }}>C</Avatar>,
        'theNewBoston': <Avatar sx={{ bgcolor: 'green', width: 36, height: 36, mt: 0.5 }}>T</Avatar>,
        'take U forward': <Avatar sx={{ bgcolor: 'yello', width: 36, height: 36, mt: 0.5 }}>T</Avatar>,
        'Matt Wolfe': <Avatar sx={{ bgcolor: 'red', width: 36, height: 36, mt: 0.5 }}>M</Avatar>,
    }

    // const explore = ['Trending', 'Shopping', 'Music', 'Movies & TV', 'Live', 'Gaming', 'News', 'Sports', 'Courses', 'Fashion & Beauty', 'Podcasts', 'Playables']
    const explore = {
        "Trending": <WhatshotOutlinedIcon sx={{ color: 'white' }} />,
        "Shopping": <ShoppingBagOutlinedIcon sx={{ color: 'white' }} />,
        "Music": <MusicNoteOutlinedIcon sx={{ color: 'white' }} />,
        "Movies & TV": <MovieCreationOutlinedIcon sx={{ color: 'white' }} />,
        "Live": <SensorsOutlinedIcon sx={{ color: 'white' }} />,
        "Gaming": <SportsEsportsOutlinedIcon sx={{ color: 'white' }} />,
        "News": <NewspaperOutlinedIcon sx={{ color: 'white' }} />,
        "Sports": <ThumbUpOutlinedIcon sx={{ color: 'white' }} />,
        "Courses": <SchoolOutlinedIcon sx={{ color: 'white' }} />,
        "Fashion & Beauty": <DryCleaningOutlinedIcon sx={{ color: 'white' }} />,
        "Podcasts": <PodcastsOutlinedIcon sx={{ color: 'white' }} />,
        "Playables": <SportsEsportsOutlinedIcon sx={{ color: 'white' }} />,
    }


    // const more_youtube = ['YouTube Studio', 'YouTube TV', 'YouTube Music', 'YouTube Kids']
    const more_youtube = {
        "YouTube Studio": <YouTube_Studio />,
        "YouTube TV": <YouTube_TV />,
        "YouTube Music": <YouTube_Music />,
        "YouTube Kids": <YouTube_Kids />
    }

    const settings = {
        'Settings': <SettingsOutlinedIcon sx={{ color: 'white' }} />,
        'Report history': <OutlinedFlagOutlinedIcon sx={{ color: 'white' }} />,
        'Help': <HelpOutlineOutlinedIcon sx={{ color: 'white' }} />,
        'Send feedback': <FeedbackOutlinedIcon sx={{ color: 'white' }} />
    }

    // const footer = ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers']
    // const footer_2 = ['Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features', 'NFL Sunday Ticket'] // 2025 Google LLC


    return (
        <Box sx={{ overflow: 'auto' }}>
            <MenuItems items={primary_elements}
                currentMenu={currentMenu}
                onMenuClick={handleMenuClick} />
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
            <MenuItems items={your_elements}
                currentMenu={currentMenu}
                onMenuClick={handleMenuClick} />
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
            <MenuItems items={subscriptions}
                currentMenu={currentMenu}
                onMenuClick={handleMenuClick} />
            {/* <List>
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
            </List> */}
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
            <MenuItems items={explore}
                currentMenu={currentMenu}
                onMenuClick={handleMenuClick} />
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
            <MenuItems items={more_youtube}
                currentMenu={currentMenu}
                onMenuClick={handleMenuClick} />
            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />
            <MenuItems items={settings}
                currentMenu={currentMenu}
                onMenuClick={handleMenuClick} />

            <Divider sx={{ bgcolor: 'white', opacity: 0.50 }} />

            <DrawerFooter />
        </Box>
    )
}

export default DrawerMenu;