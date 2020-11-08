import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID wLC7YEVc-p4ByP0EqKvQwzX_RXVdgUq36qWG8DW7T_4",
  },
});
