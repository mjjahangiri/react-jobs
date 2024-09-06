import { Outlet } from "react-router-dom";
import Navbar from "../components/Smart/Navbar/Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
