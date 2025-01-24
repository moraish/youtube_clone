import { Grid2 } from "@mui/material";
import { useState } from "react";
import VideoCard from "./VideoCard";

function VideoLayout({ videos, setVideos }) {

    // const [videos, setVideos] = useState([
    //     {
    //         id: 1,
    //         thumbnail: 'youtube_clone/src/assets/1.jpg',
    //         title: 'Arsenal Vs Tottenham - Highlights',
    //         channel: 'NBC Sports',
    //         views: '100K',
    //     },
    //     {
    //         id: 2,
    //         thumbnail: 'youtube_clone/src/assets/2.jpg',
    //         title: 'Moving to California',
    //         channel: 'Taleb Markenov',
    //         views: '200K',
    //     },
    //     {
    //         id: 3,
    //         thumbnail: 'youtube_clone/src/assets/3.jpg',
    //         title: 'Sneak Archers',
    //         channel: 'T90 Official',
    //         views: '300K',
    //     },
    //     {
    //         id: 4,
    //         thumbnail: 'youtube_clone/src/assets/4.jpg',
    //         title: '1000x your productivity',
    //         channel: 'Better Everyday',
    //         views: '400K',
    //     },
    //     {
    //         id: 5,
    //         thumbnail: 'youtube_clone/src/assets/5.jpg',
    //         title: 'Game of Thrones - Epic plothole',
    //         channel: 'Epic Battles',
    //         views: '500K',
    //     },
    //     {
    //         id: 6,
    //         thumbnail: 'youtube_clone/src/assets/6.jpg',
    //         title: 'Barca cruises to victory',
    //         channel: 'NBC Sports',
    //         views: '600K',
    //     },
    //     {
    //         id: 7,
    //         thumbnail: 'youtube_clone/src/assets/7.jpg',
    //         title: 'InnerGize - Hit or Flop?',
    //         channel: 'Sharktank India',
    //         views: '700K',
    //     }
    // ]);

    return (
        <Grid2 container spacing={2} >
            {videos.map((video) => (
                <Grid2 item="true"
                    key={video.id}
                    size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 2 }}
                >
                    <VideoCard
                        thumbnail={video.thumbnail}
                        title={video.title}
                        channel_name={video.channel}
                        views={video.views}
                    />
                </Grid2>
            ))}
        </Grid2>

    )
}

export default VideoLayout;
