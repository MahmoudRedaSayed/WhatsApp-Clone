import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import {
  Add,
  ExitToApp,
  Home,
  Message,
  PeopleAlt,
  SearchOutlined,
} from "@material-ui/icons";
import { auth,db,createTimeStamp } from "../firebase";
import SidebarList from "./SidebarList";
import { NavLink, Switch, Route } from "react-router-dom";
import useRooms from "../hooks/useRooms";
import useUsers from "../hooks/useUsers";
import { useScrollTrigger } from "@material-ui/core";
import useChats from "../hooks/useChats";




export default function Sidebar({user,page}) {
  const [menu, setMenu] = React.useState(1);
  const rooms=useRooms();
  const users=useUsers(user);
  const chats=useChats(user);

  const signOut=()=>{
    auth.signOut();
  }
  const createRoom=()=>{
      const roomName=prompt("Type the name of the room");
      db.collection("rooms").add({
        name:roomName,
        createdTime:createTimeStamp()
      })
  }

  let Nav;
  if (page.isMobile) {
    Nav = NavLink;
  } else {
    Nav = (props) => (
      <div
        className={`${props.activeClass ? "sidebar__menu--selected" : ""}`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
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
    <div className="sidebar__menu">
        <Nav
          to="/chats"
          activeClassName="sidebar__menu--selected"
          onClick={() => setMenu(1)}
          activeClass={menu === 1}
        >
          <div className="sidebar__menu--home">
            <Home />
            <div className="sidebar__menu--line" />
          </div>
        </Nav>
        <Nav
          to="/rooms"
          activeClassName="sidebar__menu--selected"
          onClick={() => setMenu(2)}
          activeClass={menu === 2}
        >
          <div className="sidebar__menu--rooms">
            <Message />
            <div className="sidebar__menu--line" />
          </div>
        </Nav>
        <Nav
          to="/users"
          activeClassName="sidebar__menu--selected"
          onClick={() => setMenu(3)}
          activeClass={menu === 3}
        >
          <div className="sidebar__menu--users">
            <PeopleAlt />
            <div className="sidebar__menu--line" />
          </div>
        </Nav>
      </div>
      
      {page.isMobile ? (
        <Switch>
          <Route path="/chats">
            <SidebarList title="Chats"  data={chats} />
          </Route>
          <Route path="/rooms">
            <SidebarList title="Rooms" data={rooms} />
          </Route>
          <Route path="/users">
            <SidebarList title="Users"  data={users} />
          </Route>
          <Route path="/search">
            <SidebarList title="Search Results"  data={[]} />
          </Route>
        </Switch>
      ) : menu === 1 ? (
        <SidebarList title="Chats"  data={chats} />
      ) : menu === 2 ? (
        <SidebarList title="Rooms" data={rooms} />
      ) : menu === 3 ? (
        <SidebarList title="Users" data={users}/>
      ) : menu === 4 ? (
        <SidebarList title="Search Results" data={[]} />
      ) : null}

      <div className="sidebar__chat--addRoom">
        <IconButton onClick={createRoom}>
          <Add></Add>
        </IconButton>
      </div>
  </div>;
}
