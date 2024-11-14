import dynamic from "next/dynamic";

export const NO_OVERRIDE: string[] = [
  "australia",
  "europe",
  "usa",
  "default",
  "anz",
  "asx",
  "bendigo",
  "boa",
  "citi",
  "crypto",
  "nab",
];

export const iconsList = {
  default: dynamic(() => import("./Assets/IconCollect/IcImage")),
  invoice: dynamic(() => import("./Assets/IconCollect/IcInvoice")),
  image: dynamic(() => import("./Assets/IconCollect/IcImage")),
  chart: dynamic(() => import("./Assets/IconCollect/IcChart")),
  file: dynamic(() => import("./Assets/IconCollect/IcFile")),
  gear: dynamic(() => import("./Assets/IconCollect/IcGear")),
  home: dynamic(() => import("./Assets/IconCollect/IcHome")),
  user: dynamic(() => import("./Assets/IconCollect/IcUser")),
  "chevron-left": dynamic(() => import("./Assets/IconCollect/IcChevronLeft")),
  plus: dynamic(() => import("./Assets/IconCollect/IcPlus")),
  min: dynamic(() => import("./Assets/IconCollect/IcMin")),
};
