import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { ExitToApp } from "@material-ui/icons";
import { auth } from "../firebase";

export default function Sidebar({user,page}) {
  const signOut=()=>{
    auth.signOut();
  }
  return <div className="sidebar" style={{minHeight:page.isMobile?page.height:"auto"}}>
    <div className="sidebar__header">
    <div className="sidebar__header--left">
      <Avatar src={user?.photoURl}></Avatar>
      <h4>{user?.displayName}</h4>
    </div>
    <div className="sidebar__header--right">
      <IconButton onClick={signOut}>
        <ExitToApp></ExitToApp>
      </IconButton>
    </div>
    </div>
  </div>;
}
