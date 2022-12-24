import Footer from "@components/organisms/home/Footer";
import Introduce from "@components/organisms/home/Introduce";
import TopAlbum from "@components/organisms/home/TopAlbumTab";
import Question from "@components/organisms/home/Question";
import NaviBox from "@components/organisms/home/NaviBox";

export default function Home() {
  return (
    <>
      {/* <NaviBox /> */}
      <Introduce />
      <TopAlbum />
      <Question />
      <Footer />
    </>
  );
}
