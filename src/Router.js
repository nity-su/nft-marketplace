import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tradeplace from "./pages/Tradeplace";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/tradeplace" element={<Tradeplace></Tradeplace>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
