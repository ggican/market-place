import { FC } from "react";

import Ellipse from "../../../public/ellipse-red.png";
import Image from "next/image";
import Container from "@components/Layouts/External/ExternalContainer";

const Balance: FC<any> = ({ balance, name }) => {
  return (
    <div className="relative block">
      <Image
        alt="ellipse image red"
        className="w-full max-h-[404px]"
        src="/ellipse-red.png"
        width={100}
        height={404}
      ></Image>
      <div className="absolute w-full balance-card bottom-[-30px] px-[36px]">
        <p className="font-roboto text-[21.43px] font-medium leading-[25.11px] text-left decoration-none text-white block mb-[16px]">
          Welcome, {name}
        </p>
        <div className="bg-white full block rounded-[10px]">
          <div className="relative w-full block shadow-[1.9px_3.79px_6.63px_4.74px_#EFEFEF40] rounded-[10px]">
            <div className="bg-custom-gradient  w-full flex rounded-[19] min-h-[167px]"></div>
            <div className="w-[29px] bg-danger h-[29px] top-[30px] left-[100px] z-10 rounded-full absolute"></div>
            <div className="absolute left-0 top-0 bottom-0 right-0 rounded-[10px]">
              <svg
                width="302"
                height="167"
                viewBox="0 0 302 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2_15"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="302"
                  height="167"
                >
                  <rect width="302" height="167" rx="10" fill="url(#paint0_linear_2_15)" />
                </mask>
                <g mask="url(#mask0_2_15)">
                  <rect
                    x="-16"
                    y="-25"
                    width="341"
                    height="202"
                    fill="#CCEDFF"
                    fill-opacity="0.42"
                  />
                  <circle cx="24.5" cy="22.5" r="69.5" fill="#0099EE" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2_15"
                    x1="53"
                    y1="43.5"
                    x2="283"
                    y2="167"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0099EE" />
                    <stop offset="1" stop-color="#EBEBEB" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-0 flex flex-col w-full justify-end items-end p-[16px]">
              <span className="mb-[6px]">Your Balance</span>
              <p className="text-primary-dark font-roboto text-[36.52px] font-bold leading-[42.8px] decoration-skip-ink-none">
                {balance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
