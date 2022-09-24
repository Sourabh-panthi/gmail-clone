import {
  Apps,
  HelpOutline,
  Menu,
  Search,
  SettingsOutlined,
  Tune,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/UserSlice";
import { auth } from "../../firebase";
import "./Header.css";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqkDB9vXtRDfNAvKwJyHHzo6wv3iYN45yXg&usqp=CAU"
          alt="img"
        />
      </div>
      <div className="header__middle">
        <div className="header__meddleInside">
          <Search />
          <input placeholder="Search in mail" />
          <IconButton>
            <Tune />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Avatar src={user.photoUrl} onClick={handleLogout} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
