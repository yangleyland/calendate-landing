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
          <h1
            className="text-5xl font-bold mb-8"
            style={{ color: "#000", fontFamily: "var(--font-fira-sans)" }}
          >
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
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9034 26.4823C19.3535 26.9322 19.9638 27.185 20.6002 27.185C21.2366 27.185 21.8469 26.9322 22.297 26.4823L33.097 15.6823C33.5469 15.2322 33.7997 14.6219 33.7997 13.9855C33.7997 13.3491 33.5469 12.7388 33.097 12.2887L22.297 1.48871C21.8443 1.05153 21.2381 0.809622 20.6088 0.81509C19.9796 0.820559 19.3776 1.07296 18.9326 1.51794C18.4876 1.96292 18.2352 2.56487 18.2298 3.19415C18.2243 3.82342 18.4662 4.42966 18.9034 4.88231L25.4002 11.5855L2.60019 11.5855C1.96367 11.5855 1.35323 11.8384 0.903138 12.2885C0.453051 12.7385 0.200194 13.349 0.200194 13.9855C0.200194 14.622 0.453051 15.2325 0.903138 15.6826C1.35323 16.1327 1.96367 16.3855 2.60019 16.3855L25.4002 16.3855L18.9034 23.0887C18.4535 23.5388 18.2007 24.1491 18.2007 24.7855C18.2007 25.4219 18.4535 26.0322 18.9034 26.4823Z"
                    fill="white"
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
