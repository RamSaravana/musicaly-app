import React from "react";
import "./Collection.css";

const Collection = (props) => {
  function selectAlbum(e) {
    props.actions.setAlbum(e.currentTarget.getAttribute("data-id"));
  }
  let albums =
    props.album &&
    props.album.map((album) => {
      return (
        <div
          className="collection"
          data-id={album._id}
          key={album._id}
          onClick={selectAlbum}>
          <div className="collectionWrapper">
            <div>
              <img
                className="collectionImage"
                src={album.albumImage}
                alt="Album_Picture"
                height="85"
                width="85"
              />
            </div>
            <div className="collectionName">{album.albumName}</div>
            <div className="collectionCount">
              No.of Songs: {album.songs.length}
            </div>
            <div className="collectionCount">Launched: {album.year}</div>
          </div>
        </div>
      );
    });
  return <React.Fragment>{albums}</React.Fragment>;
};

export default Collection;
