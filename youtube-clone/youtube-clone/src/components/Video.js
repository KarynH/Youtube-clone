import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function Video() {
  let { id } = useParams();
  // const [singleVideo, setSingleVideo] = useState(
  //   window.localStorage.getItem(id) || [] );
  // let j = window.localStorage.setItem(id, 'test')
  // const opts = {
  //   height: '500',
  //   widht: '350',
  //   playerVars: {
  //   autoplay: 1,
  //   },
  // }

  return (
    <div className="SingleVideo">
      <YouTube videoId={id} />

      {/* <iframe
        width="500"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        // src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`
        // src={`https://www.youtube.com/embed/watch?v=${id}`}}
        frameBorder="0"
        allowFullScreen
        title="Youtube video player"></iframe> */}
    </div>
  );
}
