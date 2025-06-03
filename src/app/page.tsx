"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
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
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center space-x-8 p-6 transition-all duration-300 ${
          scrolled
            ? "bg-white/9ck5 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl">💌</span>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#9A0600" }}
        >
          date ❤
        </button>
        <button
          onClick={() =>
            document
              .getElementById("how-it-works")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#9A0600" }}
        >
          how it works
        </button>
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#9A0600" }}
        >
          about
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#9A0600" }}
        >
          contact
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden sticky top-0 left-0 right-0 z-50 flex items-center justify-between p-4"
        style={{ backgroundColor: "#801F20" }}
      >
        <span className="text-xl font-bold text-white">calen.date</span>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.41)",
          }}
          className="px-3 py-1  rounded-2xl inline-flex justify-start items-center gap-1.5"
        >
          <div className="font-bold text-white">Date</div>
        </div>
      </nav>

      {/* DESKTOP VERSION - Hidden on mobile */}
      <div className="hidden md:block">
        {/* First Page */}
        <div id="home" className="min-h-screen flex">
          {/* Left Side - White Background */}
          <div className="flex-1 bg-white flex flex-col relative">
            {/* Navigation */}

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
                  The dating app that plans your next date
                </p>

                <button
                  onClick={() => router.push("/join-waitlist")}
                  className="w-full mt-8 px-4 py-2 rounded-2xl text-xl font-medium hover:opacity-90 transition-opacity border-4 flex items-center justify-between"
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
                  No swiping, no doxxing
                </h2>

                {/* Tell us about yourself */}
                <div>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#9A0600" }}
                  >
                    Tell us about yourself,
                  </h3>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#9A0600" }}
                  >
                    3 quick questions, & accept
                  </h3>
                  <h3
                    className="text-3xl font-bold"
                    style={{ color: "#9A0600" }}
                  >
                    your calendar invite
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
                  One match, one date
                </h4>
                <p className="text-xl text-white">
                  Each match is an actual date on your calendar
                </p>
              </div>
            </div>
          </div>

          {/* How does it work - Bottom Right Corner */}
          <div className="absolute bottom-6 right-6">
            <button
              onClick={() =>
                document
                  .getElementById("tell-us")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/images/arrow-2.svg"
                alt="Arrow pointing"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-medium text-white">
                How does it work?
              </span>
            </button>
          </div>
        </div>

        {/* Third Page - Tell Us About Yourself */}
        <div id="tell-us" className="flex">
          {/* Left Side - Survey Images */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12 py-16">
            <div className="relative flex items-center justify-center">
              {/* First survey card - positioned behind and to the left */}
              <Image
                src="/images/survey.png"
                alt="App interface showing favorite time of day question"
                width={671}
                height={572}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ color: "#9A0600" }}
              >
                Tell us about yourself
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#9A0600" }}>
                Quick, casual, easy — tell us about your perfect date
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Page - Review Availability */}
        <div className="flex">
          {/* Left Side - Content */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ color: "#9A0600" }}
              >
                Tell us when you&apos;re free
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#9A0600" }}>
                Because finding time is easier than making time
              </p>
            </div>
          </div>
          {/* Right Side - Survey Images */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12 py-16">
            <div className="relative flex items-center justify-center">
              <div className="relative z-10">
                <Image
                  src="/images/review-availability.png"
                  alt="App interface showing availability"
                  width={300}
                  height={400}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Page - Algorithm */}
        <div className="flex">
          {/* Left Side - Survey Images */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12 py-16">
            <div className="relative flex items-center justify-center">
              {/* First survey card - positioned behind and to the left */}
              <Image
                src="/images/reveal-collection.png"
                alt="App interface showing algorithm"
                width={745}
                height={500}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ color: "#9A0600" }}
              >
                See the actual algorithm
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#9A0600" }}>
                No AI, no &quot;vibes&quot; - read about why they&apos;re the
                right person for you
              </p>
            </div>
          </div>
        </div>
        {/* Sixth Page - Match */}
        <div className="flex">
          {/* Left Side - Content */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ color: "#9A0600" }}
              >
                Right person, right time
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#9A0600" }}>
                Receive your date & match, curated just for you every week
              </p>
            </div>
          </div>
          {/* Right Side - Survey Images */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12 py-16">
            <div className="relative flex items-center justify-center">
              <div className="relative z-10">
                <Image
                  src="/images/match.png"
                  alt="App interface showing availability"
                  width={703}
                  height={597}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Sixth Page - Calendar Invite */}
        <div className="flex w-1/2 mx-auto flex-col items-center justify-center py-12">
          <Image
            src="/images/calendar-appointment.png"
            alt="Calendar invite"
            width={703}
            height={597}
            className=""
            priority
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold" style={{ color: "#9A0600" }}>
              Accept your calendar invite, & date!
            </p>
            <p className="text-2xl font-medium" style={{ color: "#9A0600" }}>
              Dating should be as easy as accepting an invite
            </p>
          </div>
          <button
            onClick={() => router.push("/join-waitlist")}
            className="w-full mt-8 px-12 py-4 rounded-full text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#9A0600" }}
          >
            Sign up for a blind date
          </button>
        </div>
        <div
          id="about"
          className="flex bg-[#9A0600] flex-col items-center justify-jtart px-12 py-16"
        >
          <h2 className="text-5xl font-bold text-white mb-12 text-center">
            About us
          </h2>
          <div className="flex justify-center">
            <Image
              src="/images/about-us.png"
              alt="About us"
              width={1200}
              height={800}
              className="w-[90vw] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        <div id="contact" className="flex">
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl flex flex-col items-start justify-center">
              <h1
                className="text-5xl font-bold mb-4"
                style={{ color: "#9A0600" }}
              >
                calen.date <span style={{ color: "#9A0600" }}>💌</span>
              </h1>
              <p
                className="text-3xl font-bold leading-none tracking-tighter"
                style={{
                  color: "#9A0600",
                  letterSpacing: "-2%",
                }}
              >
                Find your right person, right time
              </p>
              <button
                className="w-full mt-8 px-12 py-4 rounded-full text-2xl font-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#9A0600" }}
              >
                Sign up for a blind date
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl w-full py-12">
              <form className="gap-2 flex flex-col items-start justify-center">
                {/* Name and Email row */}
                <h2
                  className="text-3xl font-bold "
                  style={{ color: "#9A0600" }}
                >
                  Contact us
                </h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 px-4 py-2 rounded-xl border-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#9A0600]"
                    style={{ borderColor: "#9A0600" }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-2 rounded-xl border-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#9A0600]"
                    style={{ borderColor: "#9A0600" }}
                  />
                </div>

                {/* Message textarea */}
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl border-2 text-gray-700 placeholder-gray-500 resize-none focus:outline-none focus:border-[#9A0600]"
                  style={{ borderColor: "#9A0600" }}
                />

                {/* Submit button */}
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#801F20" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* END DESKTOP VERSION */}

      {/* MOBILE VERSION - Hidden on desktop */}
      <div className="block md:hidden">
        {/* First Page - Hero */}
        <div id="home-mobile" className="min-h-screen flex flex-col relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/landing-1.png"
              alt="Photobooth strip showing couples"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Content with overlay */}
          <div className="flex-1 bg-black/60 flex flex-col items-start justify-center px-6 pt-16 relative z-10">
            <div className="text-left max-w-sm">
              <h1 className="text-4xl font-bold mb-4 text-white">
                calen.date <span style={{ color: "#9A0600" }}>💌</span>
              </h1>
              <p className="text-md mb-8 font-[600] text-white">
                The dating app that plans your next date
              </p>

              <button
                onClick={() => router.push("/join-waitlist")}
                className="w-2/3 px-6 py-3 text-sm font-[700] hover:opacity-90 transition-opacity border flex items-center justify-between text-white"
                style={{
                  borderRadius: "100px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  background: "#801F20",
                  boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.24)",
                }}
              >
                <span>Join the waitlist</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Second Page - How It Works */}
        <div className="bg-white">
          {/* Content Sections */}
          <div className="px-6 py-8 h-[353px] flex flex-col justify-center">
            {/* Top Section */}
            <div className="text-left mb-8">
              <h2
                className="text-xl font-[600] mb-4"
                style={{ color: "#9A0600" }}
              >
                No swiping, no doxxing
              </h2>
              <div>
                <h3
                  className="text-2xl font-[700]"
                  style={{ color: "#9A0600" }}
                >
                  Tell us about yourself,
                </h3>
                <h3
                  className="text-2xl font-[700]"
                  style={{ color: "#9A0600" }}
                >
                  3 quick questions, & accept
                </h3>
                <h3
                  className="text-2xl font-[700]"
                  style={{ color: "#9A0600" }}
                >
                  your calendar invite
                </h3>
              </div>
            </div>

            {/* Bottom Section */}
          </div>
          <div
            className="h-1/2 p-6 text-left h-[353px] flex flex-col justify-center relative"
            style={{ backgroundColor: "#801F20" }}
          >
            <h4 className="text-2xl font-[700] text-white mb-4">
              One match, one date
            </h4>
            <p className="text-lg font-[600] text-white mb-4">
              Each match is an actual date on your calendar
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("tell-us-mobile")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="absolute bottom-0 right-4 flex items-center justify-center space-x-2 mx-auto hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/arrow-2.svg"
                alt="Arrow pointing"
                width={24}
                height={24}
                className="w-10 h-10"
              />
              <span className="text-md font-[700] text-white relative bottom-2">
                How does it work?
              </span>
            </button>
          </div>
        </div>

        {/* Third Page - Tell Us About Yourself */}
        <div id="tell-us-mobile" className="bg-white">
          <div className="px-6 py-8 text-center">
            <h2 className="text-2xl font-[700]" style={{ color: "#9A0600" }}>
              Tell us about yourself
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#9A0600" }}>
              Quick, casual, easy — tell us about your perfect date
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
            <h2 className="text-2xl font-[700]" style={{ color: "#9A0600" }}>
              Tell us when you&apos;re free
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#9A0600" }}>
              Because finding time is easier than making time
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
          <div className="px-6 pb-8 text-center">
            <h2 className="text-2xl font-[700]" style={{ color: "#9A0600" }}>
              See the actual algorithm
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#9A0600" }}>
              No AI, no &quot;vibes&quot; - read about why they&apos;re the
              right person for you
            </p>
          </div>
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
        </div>

        {/* Sixth Page - Match */}
        <div className="bg-white">
          <div className="px-6 py-8 text-center">
            <h2 className="text-2xl font-[700]" style={{ color: "#9A0600" }}>
              Right person, right time
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#9A0600" }}>
              Receive your date & match, curated just for you every week
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
            <p
              className="text-2xl font-bold mb-2 w-[250px] mx-auto"
              style={{ color: "#9A0600" }}
            >
              Accept your calendar invite, & date!
            </p>
            <p
              className="text-lg font-[600] w-[250px] mx-auto"
              style={{ color: "#9A0600" }}
            >
              Dating should be as easy as accepting an invite
            </p>
          </div>
          <button
            onClick={() => router.push("/join-waitlist")}
            className="w-[200px] px-8 py-4 rounded-full text-xl font-[600] text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#801F20" }}
          >
            Sign up
          </button>
        </div>

        {/* Mobile About */}
        <div className="bg-[#9A0600] px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">about us</h2>
          <Image
            src="/images/about-us.png"
            alt="About us"
            width={400}
            height={300}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Mobile Contact */}
        <div className="bg-white px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold" style={{ color: "#801F20" }}>
              calen.date
            </h1>
            <p
              className="text-lg font-bold leading-tight"
              style={{
                color: "#801F20",
                letterSpacing: "-1%",
              }}
            >
              Find your right person, right time
            </p>
          </div>

          <button
            // onClick={}
            className="w-full px-8 py-4 rounded-full text-xl font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#801F20" }}
          >
            Contact us
          </button>
        </div>
      </div>
      {/* END MOBILE VERSION */}
    </>
  );
}
