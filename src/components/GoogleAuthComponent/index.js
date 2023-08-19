import React from 'react';
import { useNavigate } from 'react-router-dom';

import GoogleLogin from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';

import NotiStackComponent from '../NotiStackComponent';

const GoogleAuthComponent = (props) => {
  const { buttonText, prompt } = props;

  const navigate = useNavigate();
  const notiComponent = NotiStackComponent();

  const clientId = "244753173236-04629oab5bl4t2gaao6gbe2ks2epi1ia.apps.googleusercontent.com";

    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId: clientId });
    });

  const onSuccess = (res) => {
    const googleIdToken = res.tokenId;
    localStorage.setItem('userName', res.profileObj.name);
    localStorage.setItem('token', googleIdToken);
    navigate("/");
    notiComponent.showSnackbar(
      `${res.profileObj.name} Login successfully!`,
      'success'
    );
  };

  const onFailure = (res) => {
    console.log(res);
    notiComponent.showSnackbar(`${res?.error}!`,'error');
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={buttonText}
      onSuccess={onSuccess}
      onFailure={onFailure}
      prompt={prompt}
    />
  );
};

export default GoogleAuthComponent;