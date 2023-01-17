/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  // message,
  Spin,
} from 'antd';

function withAuth(Component) {

  // eslint-disable-next-line func-names
  return function (props) {

    const history = useHistory();
    const userInfo = useSelector(({ userReducer }) => userReducer.logged);

    useEffect(() => {

      if (!userInfo.state) {

        history.push('/');

      }

    }, []);

    if (userInfo.state) {

      return <Component {...props} />;

    }

    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Spin tip="Cargando........." />
      </>

    );

  };

}

export default withAuth;
