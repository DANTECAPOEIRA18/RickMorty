/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import './Login.css';
import { environment } from '../../utils/config';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function Login({ onSuccess, onFailure }) {

  const { clientId } = environment;
  console.log('CLIENT_ID: ', clientId);
  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn-keyboard">
          <div className="button-container">
            <div className="logo-button">
              <FcGoogle className="size-icon" />
            </div>
            <div className="text-button">
              INICIAR SESIÓN
            </div>
          </div>
        </Button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      isSignedIn
    />
  );

}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
