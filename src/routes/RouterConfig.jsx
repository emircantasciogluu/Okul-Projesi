import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import PostDetails from "../pages/PostDetails";
import Profile from "../pages/Profile";

const RouterConfig = () => {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={token ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={token ? <Navigate to="/" replace /> : <Register />}
      />
      <Route path="/postDetails" element={<PostDetails />} />
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouterConfig;
