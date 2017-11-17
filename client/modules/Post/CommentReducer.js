import { ADD_COMMENT } from './CommentActions';

// Initial State
const initialState = { data: [] };

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT :
      return {
        data: [ {'postId': action.postId, 'date': action.date, 'name': action.name, 'comment': action.comment}, ...state.data]
      };
    default:
      return state;
  }
};

/* Selectors */

export const getComments = state => state.comments.data;


// Export Reducer
export default CommentReducer;
