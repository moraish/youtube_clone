
import VideoCard from './components/VideoCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import { useState } from 'react';
import './App.css';
import AppDrawer from './components/AppDrawer';


import DownloadIcon from '@mui/icons-material/Download';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';


function App() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      thumbnail: 'src/assets/1.jpg',
      title: 'Arsenal Vs Tottenham - Highlights',
      channel: 'NBC Sports',
      views: '100K',
    },
    {
      id: 2,
      thumbnail: 'src/assets/2.jpg',
      title: 'Moving to California',
      channel: 'Taleb Markenov',
      views: '200K',
    },
    {
      id: 3,
      thumbnail: 'src/assets/3.jpg',
      title: 'Sneak Archers',
      channel: 'T90 Official',
      views: '300K',
    },
    {
      id: 4,
      thumbnail: 'src/assets/4.jpg',
      title: '1000x your productivity',
      channel: 'Better Everyday',
      views: '400K',
    },
    {
      id: 5,
      thumbnail: 'src/assets/5.jpg',
      title: 'Game of Thrones - Epic plothole',
      channel: 'Epic Battles',
      views: '500K',
    },
    {
      id: 6,
      thumbnail: 'src/assets/6.jpg',
      title: 'Barca cruises to victory',
      channel: 'NBC Sports',
      views: '600K',
    },
    {
      id: 7,
      thumbnail: 'src/assets/7.jpg',
      title: 'InnerGize - Hit or Flop?',
      channel: 'Sharktank India',
      views: '700K',
    }
  ]);

  const [sideBarOpen, setSideBarOpen] = useState(true);

  const obj = {
    "Downloads": <DownloadIcon />,
    "Cancel": <DownloadIcon />
  }

  return (
    <>


      <Container sx={{ marginLeft: '240px', marginRight: '0px', width: 'calc(100% - 240px)', overflowX: 'hidden' }} >
        <AppDrawer />
        <Grid container spacing={3} sx={{ scale: 'auto' }}>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              channel_name={video.channel}
              views={video.views}
            />
          ))}
        </Grid>

        {Object.entries(obj).map(([key, value]) => (
          <div key={key}>
            <h1>{key}</h1>
            {value}
          </div>

        ))}


      </Container>

    </>
  );
}

export default App
