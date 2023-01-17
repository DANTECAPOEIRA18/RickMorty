import constants from './constants';

const initState = {
  listPosts: [],
};

function postReducer(state = initState, { type, payload }) {

  switch (type) {

    case constants.LISTPOSTS:
      return {
        ...state,
        listPosts: payload,
      };
    default:
      return state;

  }

}

export default postReducer;
