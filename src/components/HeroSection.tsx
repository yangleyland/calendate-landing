import React from "react";
import { useRouter } from "next/navigation";

export const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    document.getElementById("feature")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col relative h-screen w-full items-stretch text-[#FEFDF8] pb-9">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ff24cdbd9301079996b50d3891c4c6ad1bbf76?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="relative text-[141px] font-[900] leading-none tracking-[-9.85px]  mt-[145px]">
        calen
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bdbd3914da0cb75a73bfd757b0f279052971a3d?placeholderIfAbsent=true"
        className="aspect-[1.43] object-contain w-full max-w-[304px]"
        alt="Calendar interface"
      />
      <div className="relative flex w-full flex-col items-center justify-between h-full">
        <div className="text-[157px] font-extrabold leading-none tracking-[-10.99px] self-end pr-[33px]">
          date
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={() => router.push("/join-waitlist")}
            className="bg-[#A30003] gap-3 text-base text-white font-bold leading-[1.4] px-6 py-5 rounded-[100px] border-solid border-[rgba(255,255,255,0.12)] hover:bg-[#8B0002] active:bg-[#B30003] active:scale-95 transition-all"
          >
            Join the waitlist
          </button>
          <div
            className="flex w-[53px] flex-col items-stretch text-xs font-medium whitespace-nowrap mt-[29px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleContinue}
          >
            <div>Continue</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8186703c0151e8b879d1c0ba9f827ec57a3d9bd?placeholderIfAbsent=true"
              className="aspect-[0.81] object-contain w-3 fill-white self-center mt-2"
              alt="Continue arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
