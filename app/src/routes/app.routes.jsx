import React from "react";
import { Route, Routes } from "react-router-dom";

import {Jobs} from "../pages/Jobs/index.jsx";
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Jobs />} />
    <Route path="/jobs" element={<Jobs />} />
  </Routes>
);

export default AppRoutes;
