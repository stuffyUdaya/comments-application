import "./comment-card.component.css";

function CommentCard({ comment }) {
  const { name, message, created } = comment;

  return (
    <div className="comment">
      <div data-testid='comment-message'
 className="comment-content">{message}</div>

      <div  data-testid="comment-footer" className="comment-footer">
        <span>
          {name} on {created}
        </span>
      </div>
    </div>
  );
}

export default CommentCard;
