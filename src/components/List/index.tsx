import dynamic from "next/dynamic";

const List = dynamic(() => import("./List"), {
  ssr: true,
});

export default List;
