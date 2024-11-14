import dynamic from "next/dynamic";

const RadioInput = dynamic(() => import("./RadioInput"), {
  ssr: true,
});

export default RadioInput;
