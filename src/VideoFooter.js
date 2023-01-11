import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./VideoFooter.css";
function VideoFooter({ channel, desc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{desc}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <p className="song">Song goes here</p>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://www.svgrepo.com/show/434790/disc.svg"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
