import dynamic from "next/dynamic";

const TextInput = dynamic(() => import("./TextInput"), {
  ssr: true,
});

export default TextInput;
