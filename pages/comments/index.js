import { useState } from "react";

const commentsApi = "/api/comments";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const getAllComments = async () => {
    const response = await fetch(commentsApi);
    const data = await response.json();
    console.log(data);
    setComments(data);
  };
  const postComment = async () => {
    const response = await fetch(commentsApi, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };
  const deleteComment = async (commentId) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    getAllComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={postComment}>Submit</button>
      <h4>Click on the button below to display list of comments</h4>
      <button onClick={getAllComments}>Get Comments</button>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <h3>
              {comment.id} {comment.text}
            </h3>
            <button onClick={() => deleteComment(comment.id)}>
              Delete Comment
            </button>
          </div>
        );
      })}
    </>
  );
};
export default CommentsPage;
