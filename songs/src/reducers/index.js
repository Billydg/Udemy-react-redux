import { combineReducers } from "redux";


const songsReducer = () => {
    return [
        {title: 'No diggity', duration: '4:05'},
        {title: 'Macarena', duration: '1:35'},
        {title: 'All start', duration: '3:35'},
        {title: 'i want it that way', duration: '2:15'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});