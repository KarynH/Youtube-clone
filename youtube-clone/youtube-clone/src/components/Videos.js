import React from "react";
import { Link } from "react-router-dom";

export default function Videos({ videos }) {
  return (
    <ul className="VideosList">
      {videos.length !== 0 ? (
        videos.map((video) => {
          return (
            <li key={video.id.videoId}>
              <Link to={`/videos/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.medium.url} />
                <p>{video.snippet.title}</p>{" "}
              </Link>
            </li>
          );
        })
      ) : (
        <div className="NoSearchYet">
          <p>No Search Results Yet!, Please submit a search above!</p>
        </div>
      )}
    </ul>
  );
}
