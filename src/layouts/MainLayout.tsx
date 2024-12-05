import { Outlet } from "react-router-dom";
import { RightSidebar, Sidebar } from "../components";

const MainLayout = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
      <div className="right-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
