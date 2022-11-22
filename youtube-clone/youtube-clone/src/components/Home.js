import { useState } from "react";
// import Youtube from 'react-youtube'

export default function Home() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);

  function resetSearch() {
    setSearch("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}`;

    console.log(url, 'this is the url');

    const result = JSON.parse(window.localStorage.getItem(search));

    if (result) {
      setVideos(result);
      console.log(result, 'this is the result')
    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((res) => {
          console.log(`Fetch worked!`);
          
          window.localStorage.setItem(search, JSON.stringify(res));

          setVideos(res);
      
        });
    }
  
    resetSearch();
  }

  return (
    <div className="Search">
      <h1>This is the home</h1>
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

  );
}
