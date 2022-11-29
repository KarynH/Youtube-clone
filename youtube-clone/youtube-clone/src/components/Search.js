import React from "react";
import { useState } from "react";
import Videos from "./Videos";

export default function Search() {
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
    <>
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
        </form>
      </div>
      <Videos videos={videos} />
    </>
  );
}
