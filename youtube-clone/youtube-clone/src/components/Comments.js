// import React from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

export default function Comments() {
  // let { id } = useParams();

  // const [name, setName] = useState("");
  // const [comment, setComment] = useState("");
  // const [preComments, setPreComments] = useState({});
  // // const [newComment, setNewComment] = useState()

  // /**use the url from api for comments (should be in snippets)
  //  * set the result to local storage  ? */

  // // const url =   `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY]`
  // const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_${id}&key=${process.env.REACT_APP_API_KEY}`;
  // let result = JSON.parse(window.localStorage.getItem(id));

  // if(result) {
  //   setPreComments(result)
  // }else {
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res , 'should be response or error')
  //     // window.localStorage.setItem(comments, JSON.stringify(res.))
  //   })

  // }
  // function addComments(e) {
  //   e.preventDefault();
  //   setName("");
  //   setComment("");
  // }

  // return (
  //   <section className="CommentSection">
  //     <form onSubmit={addComments}>
  //       <label htmlFor="Name">Name</label>
  //       <input value={name} type="text" id="name"></input>

  //       <label htmlFor="Comment">Comment</label>
  //       <input value={comment} type="text" id="comment"></input>
  //       <button>Comment</button>
  //     </form>
  //   </section>
  // );
}
