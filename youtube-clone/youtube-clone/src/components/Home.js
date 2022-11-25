import { useState } from "react";
import { Link, link } from "react-router-dom";
// import Youtube from 'react-youtube'

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
      <h6>**This is the home/**</h6>
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
            videos.map((video, i) => { 
              return (
                
                <li key={i}> {/** had trouble setting video.id.videoId*/}
                  <Link to="/Videos/:id">
                    <p>{video.snippet.title}</p>{" "}
                    <img src={video.snippet.thumbnails.default.url} />
                    {/* {console.log(video.id.videoId , 'videoIdhere')} */}
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
