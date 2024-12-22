import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

const Root = () => {
  return (
    <div className="font-lato bg-backGround">
      <Navbar />
      <div className="min-h-screen" style={{ height: "calc(100vh - 300px)" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
