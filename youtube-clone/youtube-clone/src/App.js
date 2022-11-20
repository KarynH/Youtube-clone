import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Comments from "./components/Comments";
import Home from "./components/Home";
import ModalError from "./components/ModalError";
import Nav from "./components/Nav";
import Video from "./components/Video";
import Videos from "./components/Videos";

import "./App.css";

function App() {
  // fetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route path="/Videos/:id" element={<Video />} />
        </Routes>
        <Videos /> {/**displays all videos */}
        <Comments /> {/**comment section functionality */}
        <ModalError /> {/**error window */}
      </Router>
    </div>
  );
}

export default App;
