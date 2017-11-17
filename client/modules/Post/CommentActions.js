import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_COMMENT = 'ADD_COMMENT';

// Export Actions
export function addComment(postId, name, comment, date) {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
    name,
    date,
  };
}
