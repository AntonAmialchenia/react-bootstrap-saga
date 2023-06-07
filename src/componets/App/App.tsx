import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../../pages/Posts";
import { About } from "../../pages/About";
import { Lyauot } from "../../lyaout/";
import { UserDetails } from "../../pages/User";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Lyauot />}>
        <Route path="" element={<Posts />} />
        <Route path="user" element={<UserDetails />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};
