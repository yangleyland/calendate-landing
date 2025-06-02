"use client";

import Image from "next/image";

export default function JoinWaitlist() {
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

          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            We&apos;re here to make dating easier. We match, plan, & invite you
            to your date. Sit tight, we&apos;ll be in your town soon.
          </p>

          <form className="space-y-6">
            <div className="flex flex-wrap items-center text-xl text-gray-700">
              <span>My name is </span>
              <input
                type="text"
                placeholder="Full Name"
                className="mx-2 px-3 py-1 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent text-gray-500"
                style={{ minWidth: "120px" }}
              />
              <span> & I live in </span>
              <input
                type="text"
                placeholder="City, State"
                className="mx-2 px-3 py-1 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent text-gray-500"
                style={{ minWidth: "120px" }}
              />
              <span>. You can reach me at </span>
              <input
                type="tel"
                placeholder="(555) 555-5555"
                className="mx-2 px-3 py-1 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent text-gray-500"
                style={{ minWidth: "150px" }}
              />
              <span> .</span>
            </div>

            {/* Submit Arrow Button */}
            <div className="flex justify-end mt-12">
              <button
                type="submit"
                className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center"
              >
                <span className="text-2xl text-gray-600">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
