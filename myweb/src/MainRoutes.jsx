import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

export default function Mainroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}
