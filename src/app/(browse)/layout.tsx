import React from "react";
import Navbar from "./_components/navbar/Navbar";
import Sidebar from "./_components/sidebar/Sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default BrowseLayout;
