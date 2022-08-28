import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Login from "./components/Login";
import useAuthUser from "./hooks/useAuthUser";
import Sidebar from "./components/Sidebar";

export default function App() {
  const page = useWindowSize();
  const user=useAuthUser();
  if(!user)
  {
    return <Login></Login>
  }
  return (
    <div className="app" style={{ ...page }}>
      <div className="app__body">
      <Sidebar user={user} page={page}></Sidebar>
      </div>

    </div>
  );
}
