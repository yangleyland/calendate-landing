import React from "react";
import { useRouter } from "next/navigation";

export const SignupSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 bg-white">
      <h2
        className="text-3xl font-bold text-center mb-4"
        style={{ color: "#A30003" }}
      >
        Ready to find your perfect match?
      </h2>
      <p className="text-lg text-center mb-8" style={{ color: "#A30003" }}>
        Join our waitlist and be the first to know when we launch.
      </p>
      <button
        onClick={() => router.push("/join-waitlist")}
        className="text-white self-center w-[223px] max-w-full gap-4 overflow-hidden text-base font-semibold bg-[#A30003] mt-6 px-6 py-5 rounded-[100px] hover:bg-[#8B0002] active:bg-[#B30003] active:scale-95 transition-all"
      >
        Get early access
      </button>
    </section>
  );
};
