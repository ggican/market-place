import dynamic from "next/dynamic";

const Invoice = dynamic(() => import("./Invoice"), {
  ssr: true,
});

export default Invoice;
