import dynamic from "next/dynamic";

const TextArea = dynamic(() => import("./TextArea"), {
  ssr: true,
});

export default TextArea;
