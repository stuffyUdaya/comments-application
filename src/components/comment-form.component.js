import "./comment-form.component.css";
import {addComment} from "../services/comment";

import { useState } from "react";
function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    let formErrors = {};
    setErrors(formErrors);
    if (!name) formErrors.name = "Name is required";
    if (!comment) formErrors.comment = "Comment is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Valid - can submit form
    const addedComment = await addComment({ name, message: comment });
    onAddComment(addedComment);
    setComment("");
    setName("");
  };
  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit} className="comment-form1">
        <h2 id="label">Name</h2>
        <input
          type="text"
          data-testid="comment-form__name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors({ ...errors, name: "" });
          }}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
        <textarea
          rows={6}
          cols={60}
          value={comment}
          data-testid="comment-form__message"
          onChange={(e) => {
            setComment(e.target.value);
            setErrors({ ...errors, comment: "" });
          }}
        />
        {errors.comment && <p className="error-text">{errors.comment}</p>}
        <button           data-testid="comment-form__submit"
 className="submitButton" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
