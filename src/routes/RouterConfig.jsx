import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import PostDetails from "../pages/PostDetails";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/postDetails" element={<PostDetails />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile></Profile>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
