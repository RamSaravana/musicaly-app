import React, { useRef } from "react";
import "./Player.css";
import Song from "./Song/Song";

const Player = (props) => {
  const audioRef = useRef();
  const [songUrl, setSongUrl] = React.useState(
    props.currentAlbum.songs[0].songUrl
  );
  function selectedSong(src) {
    setSongUrl(src);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }
  return (
    <div className="player">
      <div className="playerWrapper">
        <h3 className="playerTitle">Welcome!</h3>
        <hr className="horizontalLine" />
        <div className="playerDescription">
          Choose your favourite Songs and Play
        </div>
        <div className="playerAlbumDetails">
          <div>
            <img
              className="playerImage"
              src={props.currentAlbum.albumImage}
              alt="Album_Picture"
              height="200"
              width="200"
            />
          </div>
          <div className="playerAlbumNames">
            <h4>{props.currentAlbum.albumName}</h4>
            <h5>{props.currentAlbum.creator}</h5>
          </div>
        </div>
        <ul className="playerSongsList">
          <Song songs={props.currentAlbum.songs} selectedSong={selectedSong} />
        </ul>
        <hr className="horizontalLine" />
        <div className="playerControls">
          <audio controls ref={audioRef}>
            <source src={songUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Player;
