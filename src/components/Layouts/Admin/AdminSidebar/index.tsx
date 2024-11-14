import dynamic from "next/dynamic";

const AdminSidebar = dynamic(() => import("./AdminSidebar"), {
  ssr: true,
});

export default AdminSidebar;
