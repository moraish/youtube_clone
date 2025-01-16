import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instance;


// https://api.themoviedb.org/3/trending/all/week/?api_key=fcf2364af90735d28cb07e34b0f4c061&language=en-US