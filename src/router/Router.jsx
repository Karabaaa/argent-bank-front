import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Profile from "../pages/Profile/Profile";
import Layout from "../layout/Layout";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<Profile />} />
      </Route>
    </Routes>
  );
}
