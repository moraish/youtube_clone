
import VideoCard from './components/Videos/VideoCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import { useState } from 'react';
import './App.css';
import AppDrawer from './components/AppDrawer';
import { Box } from '@mui/material';
import VideoLayout from './components/Videos/VideoLayout';



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

  const [drawerOpen, setDrawerOpen] = useState(true);


  return (
    <Container
      maxWidth={false}
      sx={{
        marginLeft: drawerOpen ? '240px' : '0px',
        marginRight: '0px',
        width: drawerOpen ? 'calc(100% - 240px)' : '100%',
        overflowX: 'hidden',
        // bgcolor: 'red',
        minHeight: '100vh',
      }} >

      <AppDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />


      <VideoLayout />

    </Container>
  );
}

export default App
