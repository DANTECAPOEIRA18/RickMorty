/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import apiPosts from '../../api/apiPosts';

const usePosts = () => {

  const [listCharacter, setListPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const numberPages = useSelector(({ tagsReducer }) => tagsReducer.pages);
  const [pages, setPages] = useState(numberPages);
  const postsList = useSelector(({ postReducer }) => postReducer.listPosts);

  const abortC = new AbortController();
  const { signal } = abortC;

  const postsResearch = async (page) => {

    const posts = await apiPosts.getByCharacters({ signal, page });
    setListPosts(posts.results);

  };

  useEffect(() => {

    setListPosts(postsList);

  }, [postsList]);

  useEffect(() => {

    setPages(numberPages * 10);

  }, [numberPages]);

  const filterTable = (e) => {

    let filterList;
    if (e.target.value !== '') {

      const filterReference = [...postsList];
      filterList = [...filterReference].filter((values) => {

        if (values.name.includes(e.target.value) || values.type.includes(e.target.value) || values.dimension.includes(e.target.value) || values.created.includes(e.target.value)) {

          return values;

        }

      });

      setListPosts(filterList);

    } else {

      setListPosts(postsList);

    }

  };

  const handleOk = () => {

    setIsModalVisible(false);

  };

  const handleCancel = () => {

    setIsModalVisible(false);

  };

  const columns = [
    {
      width: '20%',
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      width: '20%',
      title: 'TIPO',
      dataIndex: 'type',
      key: 'type',
    },
    {
      width: '20%',
      title: 'DIMENSION',
      dataIndex: 'dimension',
      key: 'dimension',
    },
    {
      width: '20%',
      title: 'FECHA CREACIÓN',
      dataIndex: 'created',
      key: 'created',
    },
  ];

  return {
    listCharacter,
    handleOk,
    handleCancel,
    columns,
    isModalVisible,
    filterTable,
    pages,
    postsResearch,
  };

};

export default usePosts;
