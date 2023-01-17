import constants from './constants';

const setListTags = (values) => (dispatch) => {

  dispatch({
    type: constants.LISTTAGS,
    payload: values,
  });

};

export default {
  setListTags,
};
