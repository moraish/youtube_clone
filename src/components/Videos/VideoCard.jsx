import { Avatar, Card, CardContent, Paper, Typography, Box } from "@mui/material";

import { Grid2, CardMedia } from "@mui/material";


function VideoCard({ thumbnail, channel_icon, title, channel_name, views, launch_time }) {
    return (

        <Card elevation={0} sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        }}>
            <CardMedia
                component="img"
                image={thumbnail}
                height="140"
                alt="video thumbnail"
                sx={{
                    // width: '100%',
                    // aspectRatio: '16/9',
                    borderRadius: 2
                }}

            />

            {/* Content Section */}
            <CardContent sx={{
                p: 0,
                display: 'flex',
                gap: 1.5,
                flex: 1
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

    )
}

export default VideoCard;