export const NAME = 'GET_FEED_ACTION';

export const TAG_LOADING = `${NAME}/LOADING`;

export const TAG_SUCCESS = `${NAME}/RESULT_SUCCESS`;
export const TAG_FAIL = `${NAME}/TAG_FAIL`;

export const POST_LIKE = `${NAME}/POST_LIKE`;

export const POST_COMMENT = `${NAME}/POST_COMMENT`;

export const getNewsFeedAction = payload => {
  return {
    type: TAG_LOADING,
    payload,
  };
};

export const getNewsFeedSuccess = result => {
  return {
    type: TAG_SUCCESS,
    result,
  };
};

export const postLikeAction = payload => {
  return {
    type: POST_LIKE,
    payload,
  };
};

export const postCommentAction = payload => {
  return {
    type: POST_COMMENT,
    payload,
  };
};
