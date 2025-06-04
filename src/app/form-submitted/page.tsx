"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FormSubmitted() {
  const router = useRouter();

  return (
    <>
      {/* DESKTOP VERSION - Hidden on mobile */}
      <div className="hidden md:flex min-h-screen">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <Image
            src="/images/survey-done.png"
            alt="Two people holding a large red heart"
            width={800}
            height={1200}
            className="w-full h-screen object-cover"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 bg-white flex items-center justify-center px-12">
          <div className="max-w-xl w-full">
            <h1
              className="text-5xl font-bold mb-8"
              style={{ color: "#000", fontFamily: "var(--font-fira-sans)" }}
            >
              You&apos;re done! Sit tight & we&apos;ll let you know when
              we&apos;re ready.
            </h1>

            <p className="mb-8 text-black font-sans text-2xl font-medium leading-normal">
              In the meantime, follow us on on Instagram @calen.date to stay
              updated.
            </p>

            <p className="mb-8 text-black font-sans text-2xl font-medium leading-normal">
              You may close this tab.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION - Hidden on desktop */}
      <div className="block md:hidden min-h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/survey-done.png"
            alt="Two people holding a large red heart"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 ">
          {/* Heart-shaped container */}
          <div className="relative">
            {/* Heart shape background */}
            <div className="text-center px-8 py-6">
              <h1
                className="text-2xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-fira-sans)" }}
              >
                You&apos;re done! Sit tight & we&apos;ll let you know when
                we&apos;re ready
              </h1>

              <p className="text-md text-white mb-8 font-[500] leading-relaxed">
                In the meantime, follow us on Instagram @calen.date to stay
                updated.
              </p>

              <button
                onClick={() =>
                  window.open("https://instagram.com/calen.date", "_blank")
                }
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Check out our Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
