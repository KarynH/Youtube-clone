import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);

  function resetSearch() {
    setSearch("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}`;

    console.log(url);

    const result = JSON.parse(window.localStorage.getItem(search));

    if (result) {
      setVideos(result);
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
