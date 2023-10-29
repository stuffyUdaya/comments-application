import moment from "moment";
import "moment-timezone";

export default function formatComments(comments, newComment = true) {
  if (!newComment) {
    return sortCommentsWithStructuredDate(comments);
  } else {
    const newComment = comments[0];
    newComment.created = formatCommentCreatedDate(newComment.created);
    comments[0] = newComment;
    return comments;
  }
}

const sortCommentsWithStructuredDate = (comments) => {
  const sortedComments = comments.sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );
  sortedComments.map((comment) => {
    comment.created = formatCommentCreatedDate(comment.created);
    return comment;
  });
  return sortedComments;
};

const isSameWeek = (date1, date2) => {
  return moment(date1).isSame(date2, "week");
};

export const formatCommentCreatedDate = (date) => {
  // Convert UTC date and time to a specific timezone
  const targetTimeZone = "America/New_York";
  const commentCreatedDate = moment
    .utc(date)
    .tz(targetTimeZone)
    .format("YYYY-MM-DD HH:mm:ss z");
  if (isSameWeek(commentCreatedDate, moment())) {
    return moment(commentCreatedDate).format("dddd [at] h a");
  } else {
    return moment(commentCreatedDate).format("MMM Do [at] h a");
  }
};
