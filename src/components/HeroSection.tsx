import React from "react";
import { useRouter } from "next/navigation";

export const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    document.getElementById("feature")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col relative w-screen h-[960px] text-[#FEFDF8] p-0 m-0 overflow-hidden">
      <img
        src="/images/hero.png"
        className="absolute w-screen h-full object-contain inset-0"
        alt="Hero background"
      />

      <div className="h-full relative flex w-full flex-col items-center justify-end h-full pb-[50px]">
        <div className="flex flex-col items-center w-3/4">
          <button
            onClick={() => router.push("/join-waitlist")}
            className="bg-[#A30003] gap-3 text-base text-white font-bold w-full leading-[1.4] px-6 py-5 rounded-[100px] border-solid border-[rgba(255,255,255,0.12)] hover:bg-[#8B0002] active:bg-[#B30003] active:scale-95 transition-all"
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
