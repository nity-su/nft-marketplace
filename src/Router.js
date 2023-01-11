import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tradeplace from "./components/organisms/tradeplace/Tradeplace";
import AllCollection from "./pages/AllCollection";
import NFTList from "./pages/NFTList";
import NaviBox from "@components/organisms/home/NaviBox";
import Register from "@components/organisms/RegisterCollection/Register";
import SerachCollection from "@pages/SerachCollection/SerachCollection";
import MyCollection from "./pages/MyCollection/MyCollection";
import DisplayAllCollection from "./pages/MyCollection/DisplayAllCollection";
import DisplayCollection from "@pages/SerachCollection/DisplayCollection";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NaviBox />}>
          <Route index element={<Home />}></Route>
          <Route path="/tradeplace" element={<Tradeplace />}></Route>
          <Route path="/allcollection" element={<AllCollection />}></Route>
          <Route path="/nftlist" element={<NFTList />}></Route>
          <Route path="/register-collection" element={<Register />}></Route>
          <Route path="/SerachCollection" element={<SerachCollection />} />
          <Route path="/MyCollection" element={<MyCollection />}></Route>
          <Route
            path="/DisplayAllCollection"
            element={<DisplayAllCollection />}
          />
          <Route path="/DisplayCollection" element={<DisplayCollection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
