import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Playlist } from "./pages/playlist/playlist";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = () => {
  const getCookie = (name) => {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={getCookie("token") !== undefined}>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/playlist/:id" element={<Playlist />} />
    </Routes>
  );
};
