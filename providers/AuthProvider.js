import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import app from "../RealmApp";

//Create new context:
const AuthContext = React.createContext(null);

//Async SignIn code:
const signIn = async (email, password) => {
  const creds = Realm.Credentials.emailPassword(email, password);
  const newUser = await app.logIn(creds);
  setUser(newUser);
};

//Async SignUp code:
const signUp = async (email, password) => {
  await app.emailPasswordAuth.registerUser({ email, password });
};

//SignOut:
const signOut = () => {
  //If user is isn't logged in...
  if (user == null) {
    console.warn("Not logged in, can't log out!");
    return;
  }
  //If user is logged in, call logOut
  user.logOut();
  setUser(null);
};