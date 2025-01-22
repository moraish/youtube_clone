import { Avatar, Card, CardContent, Paper, Typography, Box } from "@mui/material";
// import Grid from '@mui/material/Grid2';
import { Grid2, CardMedia } from "@mui/material";

function VideoCard({ thumbnail, channel_icon, title, channel_name, views, launch_time }) {
    return (
        <>
            <Grid2 item="true" size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
                {/* Thumbnail Section */}
                <Card elevation={0}>
                    <CardMedia
                        component="img"
                        image={thumbnail}
                        alt="video thumbnail"
                        sx={{
                            width: '100%',
                            aspectRatio: '16/9',
                            borderRadius: 2
                        }}

                    />

                    {/* Content Section */}
                    <CardContent sx={{
                        p: 0,
                        display: 'flex',
                        gap: 1.5
                    }}>
                        <Avatar sx={{
                            width: 36, height: 36, mt: 0.5
                        }}>{channel_name[0]}</Avatar>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle2"
                                sx={{
                                    fontWeight: 500
                                }}>{title}</Typography>
                            <Typography variant="body2" sx={{
                                fontSize: '0.9rem'
                            }}>{channel_name}</Typography>
                            <Typography variant="body2" sx={{
                                fontSize: '0.9rem'
                            }}>{views}</Typography>
                        </Box>
                    </CardContent>

                </Card>
            </Grid2>
        </>
    )
}

export default VideoCard;