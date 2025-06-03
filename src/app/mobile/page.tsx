"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileHome() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl">💌</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#9A0600" }}
          >
            home
          </button>
          <button
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#9A0600" }}
          >
            how it works
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#9A0600" }}
          >
            contact
          </button>
        </div>
      </nav>

      {/* First Page - Hero */}
      <div id="home" className="min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center px-6 pt-16">
          <div className="text-center max-w-sm">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#9A0600" }}
            >
              calen.date <span style={{ color: "#9A0600" }}>💌</span>
            </h1>
            <p
              className="text-xl mb-8 font-medium"
              style={{ color: "#9A0600" }}
            >
              Find your right person, right time
            </p>
            <p
              className="text-lg mb-8 font-medium"
              style={{ color: "#9A0600" }}
            >
              the dating app that plans your next date
            </p>

            <button
              onClick={() => router.push("/join-waitlist")}
              className="w-full px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity border-2 flex items-center justify-between"
              style={{
                backgroundColor: "white",
                color: "#9A0600",
                borderColor: "#9A0600",
              }}
            >
              <span>Join the waitlist now</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="h-64 relative">
          <Image
            src="/images/landing-1.png"
            alt="Photobooth strip showing couples"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Second Page - How It Works */}
      <div id="how-it-works" className="bg-white">
        {/* Image */}
        <div className="h-64 relative">
          <Image
            src="/images/landing-2.png"
            alt="People holding large red heart"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Sections */}
        <div className="px-6 py-8">
          {/* Top Section */}
          <div className="text-center mb-8">
            <h2
              className="text-xl font-medium mb-4"
              style={{ color: "#9A0600" }}
            >
              no swiping, no doxxing
            </h2>
            <div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#9A0600" }}
              >
                tell us about yourself,
              </h3>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#9A0600" }}
              >
                3 quick questions
              </h3>
              <h3 className="text-2xl font-bold" style={{ color: "#9A0600" }}>
                & accept your calendar invite
              </h3>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className="p-6 rounded-lg text-center"
            style={{ backgroundColor: "#9A0600" }}
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              one match, one date
            </h4>
            <p className="text-lg text-white mb-4">
              each match is an actual date on your calendar
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("tell-us")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center space-x-2 mx-auto hover:opacity-80 transition-opacity"
            >
              <span className="text-lg font-medium text-white">
                how does it work?
              </span>
              <Image
                src="/images/arrow-2.svg"
                alt="Arrow pointing"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Third Page - Tell Us About Yourself */}
      <div id="tell-us" className="bg-white">
        <div className="px-6 py-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#9A0600" }}>
            tell us about yourself
          </h2>
          <p className="text-lg font-medium mb-6" style={{ color: "#9A0600" }}>
            quick, casual, easy — tell us about your perfect date
          </p>
        </div>
        <div className="px-6 pb-8">
          <Image
            src="/images/survey.png"
            alt="App interface showing survey questions"
            width={400}
            height={300}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Fourth Page - Review Availability */}
      <div className="bg-white">
        <div className="px-6 py-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#9A0600" }}>
            tell us when you&apos;re free
          </h2>
          <p className="text-lg font-medium mb-6" style={{ color: "#9A0600" }}>
            because finding time is easier than making time
          </p>
        </div>
        <div className="px-6 pb-8 flex justify-center">
          <Image
            src="/images/review-availability.png"
            alt="App interface showing availability"
            width={250}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Fifth Page - Algorithm */}
      <div className="bg-white">
        <div className="px-6 py-8">
          <Image
            src="/images/reveal-collection.png"
            alt="App interface showing algorithm"
            width={400}
            height={250}
            className="w-full object-contain mb-6"
            priority
          />
        </div>
        <div className="px-6 pb-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#9A0600" }}>
            see the actual algorithm
          </h2>
          <p className="text-lg font-medium" style={{ color: "#9A0600" }}>
            no AI, no &quot;vibes&quot; - read about why they&apos;re the right
            person for you
          </p>
        </div>
      </div>

      {/* Sixth Page - Match */}
      <div className="bg-white">
        <div className="px-6 py-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#9A0600" }}>
            Right person, right time
          </h2>
          <p className="text-lg font-medium mb-6" style={{ color: "#9A0600" }}>
            receive your date & match, curated just for you every week
          </p>
        </div>
        <div className="px-6 pb-8">
          <Image
            src="/images/match.png"
            alt="App interface showing match"
            width={400}
            height={350}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Seventh Page - Calendar Invite */}
      <div className="bg-white px-6 py-12 text-center">
        <Image
          src="/images/calendar-appointment.png"
          alt="Calendar invite"
          width={350}
          height={300}
          className="w-full object-contain mb-6"
          priority
        />
        <div className="mb-6">
          <p className="text-2xl font-bold mb-2" style={{ color: "#9A0600" }}>
            Accept your calendar invite, date
          </p>
          <p className="text-lg font-medium" style={{ color: "#9A0600" }}>
            Dating should be as easy as accepting an invite
          </p>
        </div>
        <button
          onClick={() => router.push("/join-waitlist")}
          className="w-full px-8 py-4 rounded-full text-xl font-bold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#9A0600" }}
        >
          Sign up for a blind date
        </button>
      </div>

      {/* About Us */}
      <div id="about" className="bg-[#9A0600] px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">About us</h2>
        <Image
          src="/images/about-us.png"
          alt="About us"
          width={400}
          height={300}
          className="w-full object-contain"
          priority
        />
      </div>

      {/* Contact */}
      <div id="contact" className="bg-white px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#9A0600" }}>
            calen.date <span style={{ color: "#9A0600" }}>💌</span>
          </h1>
          <p
            className="text-xl font-bold leading-tight"
            style={{
              color: "#9A0600",
              letterSpacing: "-1%",
            }}
          >
            Find your right person, right time
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#9A0600" }}>
            Contact us
          </h2>
          <form className="space-y-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#9A0600]"
                style={{ borderColor: "#9A0600" }}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#9A0600]"
                style={{ borderColor: "#9A0600" }}
              />
            </div>

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-500 resize-none focus:outline-none focus:border-[#9A0600]"
              style={{ borderColor: "#9A0600" }}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#9A0600" }}
            >
              Submit
            </button>
          </form>
        </div>

        <button
          onClick={() => router.push("/join-waitlist")}
          className="w-full px-8 py-4 rounded-full text-xl font-bold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#9A0600" }}
        >
          Sign up for a blind date
        </button>
      </div>
    </>
  );
}
