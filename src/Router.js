import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tradeplace from "./components/organisms/tradeplace/Tradeplace";
import AllCollection from "./pages/AllCollection";
import NFTList from "./pages/NFTList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/tradeplace" element={<Tradeplace></Tradeplace>}></Route>
          <Route
            path="/allcollection"
            element={<AllCollection></AllCollection>}
          ></Route>
          <Route path="/nftlist" element={<NFTList></NFTList>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
