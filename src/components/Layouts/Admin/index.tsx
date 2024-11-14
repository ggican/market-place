import React, { ReactNode } from "react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const LayoutAdmin: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div id="admin-layout" className="w-full bg-secondary-light min-h-screen justify-between flex">
      <AdminSidebar />
      <div className="inline-flex w-[calc(100%-300px)] flex-col">
        <AdminHeader />
        <section className="p-[24px] inline-flex">{children}</section>
      </div>
    </div>
  );
};

export default LayoutAdmin;
