import "./App.css";
import { useEffect, useState, useCallback } from "react";
import CommentForm from "./components/comment-form.component";
import Comments from "./components/comment-card.component";
import {getAllComments} from "./services/comment";
import formatComments from "./utils/comment.util";

function App() {
  const [comments, setComments] = useState([]);
  const fetchData =useCallback(async() => {
    const commentsResponse = await getAllComments();
    const formattedComments = formatComments(commentsResponse, false);
    setComments([...formattedComments]);
  }, [])
  useEffect(() => {
   
    fetchData();
  }, [fetchData]);
  const handleAddComment = (newComment) => {
    const formattedComments = formatComments([newComment, ...comments]);

    setComments([...formattedComments]); // Update the comments list in the state
  };
  return (
    <div className="wrapper">
      <div className="box">
        <CommentForm onAddComment={handleAddComment} />
        <div className="comments">
        {comments &&
          comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
          </div>
      </div>
    </div>
  );
}

export default App;
