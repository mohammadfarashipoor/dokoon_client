import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { Outlet } from "react-router";

function Main() {
  return (
    <div className="index-page sidebar-collapse">
      <div className="top-section fullscreen-container">
        <img src={"/src/assets/img/banner_img/bg_top.jpg"} className="h-100" />
      </div>
      <div className="wrapper default">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
