import { Button } from '@mui/material'
import React from 'react'
// import auth from "../firebase"
// import firebase from 'firebase/compat/app'
import firebase from 'firebase/compat/app';
        import 'firebase/compat/firestore';
        import 'firebase/compat/auth';
        import auth from '../App.js'

        require('firebase/auth');

export const Login = () => {
  const signInWithGoogle = () => {
    
    const provider = new firebase.auth.GoogleAuthProvider();
   

 firebase.auth().signInWithPopup(provider).then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  this.setState(
   {user:user}
  )
  this.props.history.push("/add");
  // ...
 }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(error)
 });
}
  

  return (
    <div>
    <Button onClick={signInWithGoogle}>SignUp with google</Button> 
    
    </div>
  )
}
