import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { ExitToApp,Add ,SearchOutlined} from "@material-ui/icons";
import { auth } from "../firebase";
// import SearchOutlined from "@material-ui";


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
    <div className="sidebar__search">
      <form className="sidebar__search--container">
        <SearchOutlined></SearchOutlined>
        <input
        placeholder="search for user or chat"
        type="text"
        id="search"
        >
        </input>
      </form>
    </div>
      <div className="sidebar__chat--addRoom">
        <IconButton>
          <Add></Add>
        </IconButton>
      </div>
  </div>;
}
