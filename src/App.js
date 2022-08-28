import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Login from "./components/Login";
import useAuthUser from "./hooks/useAuthUser";
import Sidebar from "./components/Sidebar";
import { Route,Redirect } from "react-router-dom";
import Chat from "./components/Chat";
export default function App() {
  const page = useWindowSize();
  const user=useAuthUser();
  if(!user)
  {
    return <Login></Login>
  }
  return (

    <div className="app" style={{ ...page }}>
      <Redirect to={page.isMobile?"/chats":"/"}></Redirect>
      <div className="app__body">
      <Sidebar user={user} page={page}></Sidebar>
      <Route path="/rooms/:roomId">
        <Chat user={user} page={page}></Chat>
      </Route>
      </div>

    </div>
  );
}
