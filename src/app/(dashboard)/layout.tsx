import React from "react";
import Navbar from "./_components/navbar/Navbar";
import Sidebar from "./_components/sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
