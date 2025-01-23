import { Avatar, Card, CardContent, Paper, Typography, Box } from "@mui/material";

import { Grid2, CardMedia } from "@mui/material";


function VideoCard({ thumbnail, channel_icon, title, channel_name, views, launch_time }) {
    function getRandomColor() {
        const colors = ['red', 'blue', 'green'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const avatarBgColor = getRandomColor();


    return (

        <Card elevation={0} sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            bgcolor: 'black'
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
                flex: 1,
                margin: 1
            }}>
                <Avatar sx={{
                    width: 36, height: 36, mt: 0.5, backgroundColor: avatarBgColor
                }}>{channel_name[0]}</Avatar>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2"
                        sx={{
                            fontWeight: 700,
                            fontSize: 18,
                            color: "rgb(241, 241, 241)"
                        }}>{title}</Typography>
                    <Typography variant="body2" sx={{
                        fontSize: '0.9rem', color: "rgb(170, 170, 170)"
                    }}>{channel_name}</Typography>
                    <Typography variant="body2" sx={{
                        fontSize: '0.9rem', color: "rgb(170, 170, 170)"
                    }}>{views}</Typography>
                </Box>
            </CardContent>

        </Card>

    )
}

export default VideoCard;