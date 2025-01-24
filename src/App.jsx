
import VideoCard from './components/Videos/VideoCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import { useState, useEffect } from 'react';
import './App.css';
import AppDrawer from './components/AppDrawer';
import { Box } from '@mui/material';
import VideoLayout from './components/Videos/VideoLayout';
import axios from 'axios';



function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(true);

  const fetchYouTubeVideos = async () => {
    const API_KEY = 'AIzaSyB66mRmWnKaKJwKSOmnkMTjgIf7p81Qu0k';
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=50`;
    // console.log(2)
    try {
      const response = await axios.get(API_URL);

      // Transform YouTube API response to match your state structure
      const formattedVideos = response.data.items.map((item, index) => ({
        id: item.id.videoId || index, // Use videoId or fallback to index
        thumbnail: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: 'N/A', // YouTube Search API doesn't provide view count
        publishedAt: item.snippet.publishedAt
      }));

      // console.log('Fetched Videos:', formattedVideos);


      // Update videos state
      setVideos(formattedVideos);
      setLoading(false);
    } catch (err) {
      // console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log(1)
    fetchYouTubeVideos();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        marginLeft: drawerOpen ? '240px' : '0px',
        marginRight: '0px',
        width: drawerOpen ? 'calc(100% - 240px)' : '100%',
        overflowX: 'hidden',
        bgcolor: 'black',
        minHeight: '100vh',
      }} >

      <AppDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />


      <VideoLayout videos={videos} setVideos={setVideos} />

    </Container>
  );
}

export default App
