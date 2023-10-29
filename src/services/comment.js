import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const addComment = async (comment) => {
  try {
    const commentsResponse = await axios.post(
      `${BASE_URL}/createComment`,
      comment
    );
    return await getComment(commentsResponse?.data?.id);
  } catch (e) {
    console.error(e);
  }
};

const getComment = async (id) => {
  try {
    const fetchedComment = await axios.get(`${BASE_URL}/getComment/${id}`);
    return fetchedComment.data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllComments = async () => {
  try {
    const fetchedComment = await axios.get(`${BASE_URL}/getComments`);
    return fetchedComment.data;
  } catch (e) {
    console.error(e);
  }
};
