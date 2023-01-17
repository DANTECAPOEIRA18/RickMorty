import constants from './constants';

const initState = {
  listTags: '',
  pages: 0,
};

function tagsReducer(state = initState, { type, payload }) {

  switch (type) {

    case constants.LISTTAGS:
      return {
        ...state,
        listTags: payload.nameTag,
        pages: payload.numberPages,
      };
    default:
      return state;

  }

}

export default tagsReducer;
