import {Routes, Route, Navigate} from "react-router-dom";
import SingIn from "./SingIn/SingIn";
import SingUp from "./SingUp/SingUp";
import React, { useState, useEffect } from "react";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
  );
}

export default MainRoutes;