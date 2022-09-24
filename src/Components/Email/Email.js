import {
  ArrowBack,
  ArrowDropDown,
  CheckCircleOutline,
  ChevronLeftSharp,
  ChevronRightSharp,
  DeleteOutline,
  DriveFileMoveOutlined,
  EmailOutlined,
  ErrorOutline,
  KeyboardSharp,
  LabelOutlined,
  MoreVertOutlined,
  MoveToInboxOutlined,
  OpenInNew,
  Print,
  Reply,
  StarOutline,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMails } from "../../features/EmailSlice";
import "./Email.css";
const Email = () => {
  const emailData = useSelector(selectMails);
  const history = useNavigate();
  console.log(emailData, "kkkk");
  return (
    <div className="email">
      <div className="email__toolbar">
        <div className="email__toolbarLeft">
          <IconButton onClick={() => history("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined />
          </IconButton>
          <IconButton>
            <ErrorOutline />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
          <IconButton>
            <EmailOutlined />
          </IconButton>
          <IconButton>
            <WatchLaterOutlined />
          </IconButton>
          <IconButton>
            <CheckCircleOutline />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlined />
          </IconButton>
          <IconButton>
            <LabelOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
        <div className="email__toolbarRight">
          <IconButton>
            <ChevronLeftSharp />
          </IconButton>
          <IconButton>
            <ChevronRightSharp />
          </IconButton>
          <IconButton>
            <KeyboardSharp />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div className="email__body">
        <div className="email__title">
          <h2 className="email__titleLeft">{emailData?.subject}</h2>
          <div className="email__titleRight">
            <IconButton>
              <Print />
            </IconButton>
            <IconButton>
              <OpenInNew />
            </IconButton>
          </div>
        </div>
        <div className="email__bodyHeader">
          <div className="email__headerLeft">
            <Avatar />
            <div className="name">
              <h4>{emailData?.title}</h4>
              <p>
                to me
                <IconButton>
                  <ArrowDropDown />
                </IconButton>
              </p>
            </div>
          </div>
          <div className="email__headerRight">
            <div className="email__time">
              <p>{emailData?.time}</p>
            </div>
            <IconButton>
              <StarOutline />
            </IconButton>
            <IconButton>
              <Reply />
            </IconButton>
            <IconButton>
              <MoreVertOutlined />
            </IconButton>
          </div>
        </div>
        <div className="email__message">
          <p>{emailData?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Email;
