import axios from "axios";

const KEY = "AIzaSyCwzF_t2GT2MCiJ2Yz - ixgDKEsl1n0SBuk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
