"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function JoinWaitlist() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/form-submitted");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="w-1/2">
        <Image
          src="/images/vinyl.png"
          alt="Person with vinyl record and wine glass"
          width={800}
          height={1200}
          className="w-full h-screen object-cover"
          priority
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 bg-white flex items-center justify-center px-12">
        <div className="max-w-xl w-full">
          <h1 className="text-5xl font-bold mb-8" style={{ color: "#000" }}>
            Join the waitlist.
          </h1>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            We&apos;re here to make dating easier. We match, plan, & invite you
            to your date. Sit tight, we&apos;ll be in your town soon.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-center text-xl font-bold text-gray-700">
              <span>My name is </span>
              <input
                type="text"
                placeholder="Full Name"
                className="mx-2 px-3 py-1 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent placeholder-gray-500"
                style={{ color: "#801F20" }}
              />
              <span> & I live in </span>
              <input
                type="text"
                placeholder="City, State"
                className="py-1 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent placeholder-gray-500"
                style={{ color: "#801F20" }}
              />
              <span>. You can reach me at </span>
              <input
                type="tel"
                placeholder="(555) 555-5555"
                className="py-1 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent placeholder-gray-500"
                style={{ color: "#801F20" }}
              />
              <span> .</span>
            </div>

            {/* Submit Arrow Button */}
            <div className="flex justify-end mt-12">
              <button
                type="submit"
                className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
