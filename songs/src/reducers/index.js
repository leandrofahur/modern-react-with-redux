import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", diration: "4:05" },
    { title: "Macarena", diration: "2:30" },
    { title: "All Stars", diration: "3:15" },
    { title: "I Wanted it That Way", diration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
