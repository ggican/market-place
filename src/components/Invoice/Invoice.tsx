import { FC } from "react";

import Image from "next/image";
import Icon from "@components/Icon";

const Invoice: FC<any> = ({ total, image, productTitle }) => {
  return (
    <div className="relative flex justify-between rounded-[6px] bg-white h-[95px] items-center">
      <div className="inline-flex pl-[16px] py-[16px] pr-[6px]">
        <Image alt="invoice image" src={image} width={67} height={73}></Image>
      </div>
      <div className="inline-flex flex-col w-[calc(100%-190px)] py-[16px] items-start">
        <div className="block w-full mb-[16px] font-roboto text-sm font-medium leading-[18.36px] tracking-[0.075em] text-left">
          {productTitle}
        </div>
        <span className="block w-full mb-[4px] font-roboto text-[9.97px] font-normal leading-[11.68px] tracking-[0.075em] text-left underline-from-font decoration-skip-ink">
          Total Order
        </span>
        <span className="block w-full font-roboto text-[14.85px] font-bold leading-[17.4px] tracking-[0.075em] text-left underline-from-font decoration-skip-ink text-primary-dark">
          {total}
        </span>
      </div>
      <div className="w-[90px] bg-invoice-gradient rounded-r-[6px] h-full flex-col inline-flex justify-center items-center">
        <Icon icon="invoice" size="xl" color="white" />
        <span className="mt-[12px] font-roboto text-[10.45px] text-white font-medium leading-[12.24px] tracking-[0.075em] text-center block decoration-none">
          INVOICE
        </span>
      </div>
    </div>
  );
};

export default Invoice;
