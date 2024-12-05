// React Router
import { Outlet } from "react-router-dom";
// Components
import { LeftSidebar, RightSidebar } from "..";

const MainLayout = () => {
  return (
    <div className="app-container">
      <div className="left-sidebar">
        <LeftSidebar />
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
