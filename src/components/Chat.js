import React from "react";
import { useParams } from "react-router-dom";
import useRoom from "../hooks/useRoom";
import "./Chat.css";

export default function Chat({user,page}) {
  const {roomId}=useParams();
  const rooms=useRoom(roomId,user.uid)
  return <div className="chat">Chat</div>;
}
