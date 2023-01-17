import React from 'react';
// import PropTypes from 'prop-types';

// import ResumeCards from '@common/containers/ResumeCards';
// import {
//   Button, Popconfirm,
// } from 'antd';
// import {
//   faEraser,
//   faTrash,
//   faWrench,
//   faPlay,
//   faPause,
//   faStop,
// } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FormularioPerfil from './FormFunctional';
import Login from '../../components/Login/Login';
import './Login.css';
import logo from '../../assets/img/chat.png';
import useLogin from './useLogin';

function LoginView() {

  const { onFaulire, onSuccess } = useLogin();

  return (
    <>
      <div className="general-container">
        <div className="div2 site-layout-background">
          <div className="div1-container">
            <div className="container-login login-container">
              <div className="title">
                COVID ESTADISTICAS
              </div>
              <div className="logo">
                <img src={logo} alt="logo3" className="img-logo" />
              </div>
              <div className="buttom">
                <Login
                  onSuccess={onSuccess}
                  onFailure={onFaulire}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default LoginView;
