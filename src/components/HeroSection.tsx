import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [isDocked, setIsDocked] = useState(true);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleContinue = () => {
    document.getElementById("feature")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (placeholderRef.current) {
        const placeholderTop =
          placeholderRef.current.getBoundingClientRect().top;
        const ctaHeight = ctaRef.current?.offsetHeight || 0;

        if (placeholderTop < window.innerHeight - ctaHeight) {
          setIsDocked(false);
        } else {
          setIsDocked(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CtaButtons = (
    <>
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
    </>
  );

  return (
    <div className="relative w-screen text-[#FEFDF8] overflow-hidden">
      <img
        src="/images/hero.PNG"
        className="w-full h-auto"
        alt="Hero background"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[50px]">
        {/* Placeholder occupies space in the layout */}
        <div
          ref={placeholderRef}
          className={`w-3/4 flex flex-col items-center ${
            isDocked ? "opacity-0" : "opacity-100"
          }`}
        >
          {CtaButtons}
        </div>
      </div>

      {/* CTA container that is either fixed or part of the layout */}
      <div
        ref={ctaRef}
        className={`w-full flex justify-center transition-all duration-300 ${
          isDocked ? "fixed bottom-0 z-10 p-4" : "absolute bottom-[50px]"
        }`}
        style={!isDocked ? { top: placeholderRef.current?.offsetTop } : {}}
      >
        <div
          className={`w-3/4 flex flex-col items-center ${
            isDocked ? "" : "opacity-0"
          }`}
        >
          {CtaButtons}
        </div>
      </div>
    </div>
  );
};
