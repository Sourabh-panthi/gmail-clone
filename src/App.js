import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import LeftSideBar from "./Components/LeftsideBar/LeftSideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./Components/Email/Email";
import EmailList from "./Components/EmailList/EmailList";
import SendEmail from "./Components/SendEmail/SendEmail";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenSendBox } from "./features/EmailSlice";
import { login, selectUser } from "./features/UserSlice";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";

function App() {
  const OpenSendEmail = useSelector(selectOpenSendBox);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <LeftSideBar />
            <Routes>
              <Route path="/mail" element={<Email />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {OpenSendEmail && <SendEmail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
