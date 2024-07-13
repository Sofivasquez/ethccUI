import { FunctionComponent } from "react";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-brand-600 flex flex-col items-start justify-start pt-3.5 pb-7 pr-6 pl-7 gap-[34px] text-center text-mid text-base-white font-single-line-body-base ${className}`}
    >
      <img className="w-[172px] h-8 relative hidden" alt="" src="/notch.svg" />
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
        <div className="w-[54px] rounded-3xl flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
          <a className="[text-decoration:none] flex-1 relative tracking-[-0.41px] leading-[22px] font-semibold text-[inherit]">
            9:41
          </a>
        </div>
        <div className="w-[77.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[7.5px]">
            <img
              className="h-3 w-[18px] relative"
              alt=""
              src="/icon--mobile-signal1.svg"
            />
            <img
              className="h-[11.8px] w-[17px] relative"
              alt=""
              src="/wifi1.svg"
            />
            <img
              className="self-stretch w-[27.4px] relative max-h-full min-h-[13px]"
              alt=""
              src="/-statusbarbattery1.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[18px] flex flex-row items-start justify-start py-0 px-[5px] box-border text-xs font-abeezee">
        <div className="flex-1 flex flex-row items-start justify-start">
          <a className="[text-decoration:none] flex-1 relative leading-[14px] text-[inherit] whitespace-nowrap">
            chevron-left
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header1;
