import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from "../features/session/sessionSlice";

export default function Profile() {
  const currentUser = useSelector(selectCurrentUser);
  const loggedIn = useSelector(selectIsLoggedIn);

  // use loggedIn to return a Navigate

  return !loggedIn ? (
    <Navigate to="/sign-up" />
  ) : (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      {/* Tell React Router where to render child routes` */}
      <Outlet />
    </main>
  );
}
