import constants from './constants';

const setListPosts = (values) => (dispatch) => {

  dispatch({
    type: constants.LISTPOSTS,
    payload: values,
  });

};

export default {
  setListPosts,
};
