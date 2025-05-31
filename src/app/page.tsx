"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* First Page */}
      <div className="min-h-screen flex">
        {/* Left Side - White Background */}
        <div className="flex-1 bg-white flex flex-col relative">
          {/* Navigation */}
          <nav className="flex items-center space-x-8 p-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💌</span>
            </div>
            <a
              href="#"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#9A0600" }}
            >
              date ❤
            </a>
            <a
              href="#"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#9A0600" }}
            >
              how it works
            </a>
            <a
              href="#"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#9A0600" }}
            >
              about
            </a>
            <a
              href="#"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#9A0600" }}
            >
              contact
            </a>
          </nav>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-xl">
              <h1
                className="text-5xl font-bold mb-4"
                style={{ color: "#9A0600" }}
              >
                calen.date <span style={{ color: "#9A0600" }}>💌</span>
              </h1>
              <p
                className="text-2xl mb-8 font-medium"
                style={{ color: "#9A0600" }}
              >
                the dating app that plans your next date
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="sign up for a blind date"
                  className="bg-white px-6 py-4 pr-16 rounded-2xl text-lg font-medium border-4 w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{ borderColor: "#9A0600", color: "#9A0600" }}
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                  style={{ color: "#9A0600" }}
                >
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* What is this section - Bottom Left Corner */}
          <div className="absolute bottom-6 left-6">
            <button
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span
                className="font-medium text-2xl"
                style={{ color: "#9A0600" }}
              >
                what is this?
              </span>
              <Image
                src="/images/arrow-1.svg"
                alt="Arrow pointing right"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>

        {/* Right Side - Full Height Image */}
        <div className="flex-1">
          <Image
            src="/images/landing-1.png"
            alt="Photobooth strip showing couples"
            width={800}
            height={1200}
            className="w-full h-screen object-cover"
            priority
          />
        </div>
      </div>

      {/* Second Page - How It Works */}
      <div id="how-it-works" className="h-screen flex relative">
        {/* Left Side - Landing 2 Image - Half Screen */}
        <div className="w-1/2">
          <Image
            src="/images/landing-2.png"
            alt="People holding large red heart with how it works text"
            width={800}
            height={1200}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right Side - Two Stacked Boxes */}
        <div className="w-1/2 flex flex-col">
          {/* Top Box - Half Screen Height */}
          <div className="h-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl text-center">
              {/* No swiping, no doxxing */}
              <h2
                className="text-2xl font-medium mb-6"
                style={{ color: "#9A0600" }}
              >
                no swiping, no doxxing
              </h2>

              {/* Tell us about yourself */}
              <div>
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#9A0600" }}
                >
                  tell us about yourself,
                </h3>
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#9A0600" }}
                >
                  3 quick questions
                </h3>
                <h3 className="text-3xl font-bold" style={{ color: "#9A0600" }}>
                  & accept your calendar invite
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Box - Half Screen Height */}
          <div
            className="h-1/2 flex items-center justify-center px-12"
            style={{ backgroundColor: "#9A0600" }}
          >
            <div className="max-w-xl text-center">
              <h4 className="text-3xl font-bold text-white mb-4">
                one match, one date
              </h4>
              <p className="text-xl text-white">
                each match is an actual date on your calendar
              </p>
            </div>
          </div>
        </div>

        {/* How does it work - Bottom Right Corner */}
        <div className="absolute bottom-6 right-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/arrow-2.svg"
              alt="Arrow pointing"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-medium text-white">
              how does it work?
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
