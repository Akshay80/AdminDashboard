import React from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function SSO() {
    const responseGoogle = (response) => {
        console.log(response);
      }

      const responseFacebook = (response) => {
        console.log(response);
      }


    return (
        <div>
            <GoogleLogin
    clientId="589215430507-1051fqrei8qr8t0av7lsh22h2ch871gp.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

<FacebookLogin
    appId="441702050632788"
    autoLoad={true}
    fields="name,email,picture"
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
    // onClick={componentClicked}
    callback={responseFacebook} />
        </div>
    )
}
