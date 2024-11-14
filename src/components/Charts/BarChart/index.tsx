import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("./BarChart"), {
  ssr: true,
});

export default BarChart;
