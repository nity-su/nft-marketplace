import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link to="/">home</Link>
      <Outlet />
    </>
  );
}
