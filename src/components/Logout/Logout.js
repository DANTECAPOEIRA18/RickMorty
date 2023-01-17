/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogout } from 'react-google-login';
import { Button } from 'antd';
import { ImExit } from 'react-icons/im';
import './Logout.css';
import { environment } from '../../utils/config';

function LogOut({ onExit }) {

  const { clientId } = environment;
  return (
    <GoogleLogout
      clientId={clientId}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn-keyboard-logout">
          <div className="button-container-logout">
            <div className="logo-button-logout">
              <ImExit className="size-icon-logout" />
            </div>
            <div className="text-button-logout">
              Salir
            </div>
          </div>
        </Button>
      )}
      onLogoutSuccess={onExit}
    />
  );

}

LogOut.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default LogOut;
