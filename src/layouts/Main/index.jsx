import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { Outlet } from "react-router";

function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
