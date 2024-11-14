import dynamic from "next/dynamic";

const Content = dynamic(() => import("./ExternalContent"), {
  ssr: true,
});

export default Content;
