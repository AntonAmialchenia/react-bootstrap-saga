import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../../pages/Posts";
import { About } from "../../pages/About";
import { Layout } from "../../layout";
import { UserDetails } from "../../pages/User";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Posts />} />
        <Route path="" element={<Posts />} />
        <Route path="user/:id" element={<UserDetails />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};
