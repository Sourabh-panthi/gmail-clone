import { Close, Minimize, OpenInFull } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import "./SendEmail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMail } from "../../features/EmailSlice";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

const SendEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMail());
  };
  return (
    <div className="sendEmail">
      <div className="sendEmail__header">
        <h4>New Message</h4>
        <div className="buttons">
          <IconButton>
            <Minimize style={{ fontSize: "small" }} />
          </IconButton>
          <IconButton>
            <OpenInFull style={{ fontSize: "small" }} />
          </IconButton>
          <IconButton onClick={() => dispatch(closeSendMail())}>
            <Close style={{ fontSize: "small" }} />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">* To is required!</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">* Subject is required!</p>
        )}
        <input
          name="message"
          placeholder="Message.."
          className="sendEmail__message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">* Message is required!</p>
        )}
        <div className="send__button">
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendEmail;
