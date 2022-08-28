import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Login from "./components/Login";

export default function App() {
  const page = useWindowSize();
  return <Login></Login>
  return (
    <div className="app" style={{ ...page }}>
      App
    </div>
  );
}
