import {
  POST_COMMENT,
  POST_LIKE,
  TAG_LOADING,
  TAG_SUCCESS,
} from '../actions/getFeed';

const getDefaultState = () => ({
  isLoading: false,
  result: null,
  error: null,
  isError: false,
});

function getLikeAction(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case TAG_LOADING:
      return {
        result: null,
        isLoading: true,
        error: null,
        isError: false,
      };
    case TAG_SUCCESS:
      return {
        isLoading: false,
        error: null,
        result: action.result,
        isError: false,
      };

    case POST_LIKE:
      let index = action.payload.index;
      let payload = [...state.result];
      let isLikeSelected = payload[index].isLikeSelected;
      payload[index].likes = isLikeSelected
        ? payload[index].likes - 1
        : payload[index].likes + 1;
      payload[index].isLikeSelected = !isLikeSelected;
      return {
        ...state,
        result: payload,
        isLoading: false,
      };

    case POST_COMMENT:
      let itemIndex = action.payload.index;
      let payloadInfo = [...state.result];
      payloadInfo[itemIndex].comment_posted.push(action.payload.comment);
      return {
        ...state,
        result: payloadInfo,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default getLikeAction;
