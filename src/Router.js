import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tradeplace from "./components/organisms/tradeplace/Tradeplace";
import AllCollection from "./pages/AllCollection";
import NFTList from "./pages/NFTList";
import NaviBox from "@components/organisms/home/NaviBox";
import Main from "@components/Main/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NaviBox />}>
          <Route index element={<Home />}></Route>
          <Route path="/tradeplace" element={<Tradeplace />}></Route>
          <Route path="/allcollection" element={<AllCollection />}></Route>
          <Route path="/nftlist" element={<NFTList />}></Route>
          <Route path="/main" element={<Main />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
