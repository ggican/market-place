import dynamic from "next/dynamic";

const Balance = dynamic(() => import("./Balance"), {
  ssr: true,
});

export default Balance;
