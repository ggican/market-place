import dynamic from "next/dynamic";

const DropdownInput = dynamic(() => import("./DropdownInput"), {
  ssr: true,
});

export default DropdownInput;
