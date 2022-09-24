import {
  AccessTimeOutlined,
  AddSharp,
  DescriptionOutlined,
  EditOutlined,
  InboxOutlined,
  KeyboardArrowDownOutlined,
  SendOutlined,
  StarOutlineOutlined,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openSendMail } from "../../features/EmailSlice";
import LeftsideBarOptions from "../LeftsideBarOptions/LeftsideBarOptions";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="leftsideBar">
      <Button
        onClick={() => dispatch(openSendMail())}
        className="sidebar__compose"
        startIcon={<EditOutlined />}
      >
        Compose
      </Button>
      <LeftsideBarOptions
        Icon={InboxOutlined}
        title="Inbox"
        number={54}
        selected={true}
      />
      <LeftsideBarOptions
        Icon={StarOutlineOutlined}
        title="Starred"
        number={54}
        selected={false}
      />
      <LeftsideBarOptions
        Icon={AccessTimeOutlined}
        title="Snoozed"
        number={54}
        selected={false}
      />
      <LeftsideBarOptions
        Icon={SendOutlined}
        title="Send"
        number={54}
        selected={false}
      />
      <LeftsideBarOptions
        Icon={DescriptionOutlined}
        title="Drafts"
        number={54}
        selected={false}
      />
      <LeftsideBarOptions
        Icon={KeyboardArrowDownOutlined}
        title="More"
        number={54}
        selected={false}
      />
      <div className="sidebar__lebel">
        <h3>Labels</h3>
        <IconButton>
          <AddSharp />
        </IconButton>
      </div>
    </div>
  );
};

export default LeftSideBar;
