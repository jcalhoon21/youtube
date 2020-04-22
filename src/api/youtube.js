import axios from "axios";

const KEY = 'AIzaSyCtmwrzNTkY4dIBDRbH86Nu7B0UHL4HUjY';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});