import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import userActions from '../../state/users/actions';
import postActions from '../../state/post/actions';
import tagsActions from '../../state/tags/actions';
import apiPosts from '../../api/apiPosts';

const useMenu = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const [newTag, setNewTag] = useState('');
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const tag = useSelector(({ tagsReducer }) => tagsReducer.listTags);
  const abortC = new AbortController();
  const { signal } = abortC;

  const postsView = async () => {

    const page = 1;
    const posts = await apiPosts.getByCharacters({ signal, page });
    dispatch(postActions.setListPosts(posts.results));
    dispatch(tagsActions.setListTags({ nameTag: 'posts/ Personajes Rick & Morty', numberPages: posts.info.pages }));
    history.push('/posts');

  };

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);
    postsView();

  }, []);

  useEffect(() => {

    setNewTag(tag);

  }, [tag]);

  const exitApp = () => {

    const userLogged = {
      state: false,
      name: '',
      imageUrl: '',
      email: '',
    };
    dispatch(userActions.setLogged(userLogged));
    history.push('/');

  };

  const selectMenu = ({ key }) => {

    if (key === '1') {

      postsView();

    }

  };

  return {
    imageUser,
    nameUser,
    selectMenu,
    postsView,
    exitApp,
    collapsed,
    setCollapsed,
    newTag,
  };

};

export default useMenu;
