import React, { useEffect, useState } from "react";
import "./MainBody.css";
import Player from "./Player/Player";
import Album from "./Album/Album";

const MainBody = (props) => {
  const [selectAlbum, setSelectAlbum] = useState(
    props.albumData ? props.albumData[0] : {}
  );
  let loadPlayer = false;
  if (props.selectedAlbum || props.albumData) {
    loadPlayer = true;
  }
  useEffect(() => {
    props.actions.getAlbums();
  }, [props.actions]);
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        {loadPlayer && (
          <Player
            currentAlbum={
              props.selectedAlbum
                ? props.selectedAlbum[0]
                : props.albumData
                ? props.albumData[0]
                : {}
            }
          />
        )}
        <Album data={props.albumData} actions={props.actions} />
      </div>
    </div>
  );
};

export default MainBody;
