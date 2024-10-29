import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import People from "../pages/People";
import PersonDetails from "../pages/PersonDetails";
import PrivateRoutes from "./PrivateRoutes";
import Paths from "../pages/Paths";
import Fullstack from "../pages/Fullstack";
import ReactJS from "../pages/ReactJS";
import Next from "../pages/Next";
import AWS from "../pages/AWS";

const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      {/* People section will just be shown, if there is a user, for that reason it is using PrivateRoutes and user as props */}
      <Route element={<PrivateRoutes user={user} />}>
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/paths" element={<Paths />}>
        <Route index element={<Fullstack />} />
        <Route path="fullstack" element={<Fullstack />}>
          <Route index element={<ReactJS />} />
          <Route path="next" element={<Next />} />
        </Route>
        <Route path="aws" element={<AWS />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;


