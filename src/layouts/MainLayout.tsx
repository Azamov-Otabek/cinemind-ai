import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout-wrapper">
      <div className="main-layout">
        <Sidebar />

        <div className="main-layout__content">
          <Header />

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
