import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/UserSlice";
import { auth, provider } from "../../firebase";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqkDB9vXtRDfNAvKwJyHHzo6wv3iYN45yXg&usqp=CAU"
          alt="img"
        />
        <Button variant="contained" color="primary" onClick={(e) => signIn(e)}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
