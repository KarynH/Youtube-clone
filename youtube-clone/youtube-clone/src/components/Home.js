import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);

  function resetSearch() {
    setSearch("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&q=${search}`;
    // const url = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}`;

    let result = JSON.parse(window.localStorage.getItem(search));

    if (result) {
      setVideos(result);
      console.log(result, "this is the result");
    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res);

          window.localStorage.setItem(search, JSON.stringify(res.items));

          setVideos(res.items);
        });
    }

    resetSearch();
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Search"></label>
        <input
          value={search}
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button>Search</button>

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
      </form>
    </div>
  );
}
