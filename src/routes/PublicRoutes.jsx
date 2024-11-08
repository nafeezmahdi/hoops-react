import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicRoutes() {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}
