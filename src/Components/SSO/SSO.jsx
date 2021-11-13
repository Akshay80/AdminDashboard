import React from 'react'
import {
  // FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import firebase from 'firebase/compat/app'
import { auth } from '../../firebase'

export default function SSO() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem('username', user.displayName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('url', user.photoURL);
      localStorage.setItem('uid', user.uid);
      setTimeout(() => {
        localStorage.setItem('Token', 123)
        window.location.href="/"
      }, 2000);
      
    })
    .catch((error) => {
      console.log(error);
  })
}

// function signInWithFacebook() {
//   const provider = new firebase.auth.FacebookAuthProvider()
//   auth.signInWithPopup(provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;
//     localStorage.setItem('username', user.displayName);
//     localStorage.setItem('email', user.email);
//     localStorage.setItem('url', user.photoURL);
//     localStorage.setItem('uid', user.uid);
//     setTimeout(() => {
//       localStorage.setItem('Token', 123)
//       window.location.href="/dashboard"
//     }, 2000);
//   })
//   .catch((error) => {
//     console.log(error);
// })
// }

    return (
        <div>
            {/* <FacebookLoginButton onClick={signInWithFacebook}><span>Continue with Facebook</span></FacebookLoginButton> */}
        <GoogleLoginButton onClick={signInWithGoogle} style={{marginTop:15}}><span>Continue with Google</span></GoogleLoginButton>
        </div>
    )
}
