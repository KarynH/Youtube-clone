import logo from './logo.svg';
import './App.css';

function App() {

  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  ).then(response => response.json()).
  then((data) => {
    console.log(data)
  })
  return ;
}

export default App;
