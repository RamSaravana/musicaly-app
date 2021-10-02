import React from "react";
import "./Song.css";

const Song = (props) => {
  function selectSong(e) {
    let songUrl = e.currentTarget.getAttribute("data-url");
    props.selectedSong(songUrl);
  }
  const songs =
    props.songs &&
    props.songs.map((song) => {
      return (
        <div className="song" data-url={song.songUrl} onClick={selectSong}>
          <div className="songWrapper">
            <div className="songName">{song.songName}</div>
            <div className="songDuration">Length : {song.songLength} mins</div>
          </div>
        </div>
      );
    });
  return <React.Fragment>{songs}</React.Fragment>;
};

export default Song;
