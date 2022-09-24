import {
  ArrowDropDown,
  ChevronLeftSharp,
  ChevronRightSharp,
  Inbox,
  KeyboardSharp,
  LocalOffer,
  MoreVert,
  People,
  RefreshSharp,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import EmailRow from "../EmailRow/EmailRow";
import Section from "../SectionButton/SectionButton";
import "./EmailList.css";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RefreshSharp />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
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
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
        <Section Icon={People} title="Social" color="#1a73eb" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
