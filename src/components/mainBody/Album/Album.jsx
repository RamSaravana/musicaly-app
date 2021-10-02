import React from "react";
import "./Album.css";
import Collection from "./Collection/Collection";

const Album = (props) => {
  return (
    <div className="album">
      <div className="albumWrapper">
        <h3 className="albumTitle">Your Collections</h3>
        <hr className="horizontalLine" />
        <ul className="albumsList">
          <li>
            <Collection album={props.data} actions={props.actions} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Album;
