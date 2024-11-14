import React, { ReactNode } from "react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const LayoutAdmin: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div id="admin-layout" className="w-full bg-secondary-light min-h-screen justify-between flex">
      <AdminSidebar
        menu={[
          {
            title: "Home",
            link: "/admin",
            icon: "home",
          },
          {
            title: "Products",
            link: "/admin/products",
            icon: "file",
          },
          {
            title: "Sales",
            link: "/admin/sales",
            icon: "chart",
          },
          {
            title: "Settings",
            link: "/admin/settings",
            icon: "gear",
          },
        ]}
      />
      <div className="inline-flex w-[calc(100%-300px)] flex-col">
        <AdminHeader />
        <section className="p-[24px] inline-flex">{children}</section>
      </div>
    </div>
  );
};

export default LayoutAdmin;
