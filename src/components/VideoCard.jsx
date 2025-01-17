import { Paper } from "@mui/material";
// import Grid from '@mui/material/Grid2';
import { Grid2 } from "@mui/material";

function VideoCard({ thumbnail, channel_icon, title, channel_name, views, launch_time }) {
    return (
        <>
            <Grid2 item="true" size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
                <Paper elevation={0}>
                    <img
                        src={thumbnail}
                        alt="video thumbnail"
                    />
                    {title}
                    {channel_name}
                    {views}
                </Paper>
            </Grid2>
        </>
    )
}

export default VideoCard;