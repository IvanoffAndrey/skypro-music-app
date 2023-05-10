import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Playlist } from "./pages/playlist/playlist";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = ({ user }) => {

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(user)} />
        }
      >
        <Route path="/" element={<Main />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
