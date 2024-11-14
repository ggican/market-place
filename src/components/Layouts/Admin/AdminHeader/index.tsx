import dynamic from "next/dynamic";

const AdminHeader = dynamic(() => import("./AdminHeader"), {
  ssr: true,
});

export default AdminHeader;
