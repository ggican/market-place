import dynamic from "next/dynamic";

const Container = dynamic(() => import("./ExternalContainer"), {
  ssr: true,
});

export default Container;
