import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../../pages/Posts";
import { About } from "../../pages/About";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
