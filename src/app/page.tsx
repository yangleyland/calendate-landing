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
          <button
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="text-2xl"
          >
            💌
          </button>
        </div>
        <button
          onClick={() => router.push("/join-waitlist")}
          className="font-medium hover:opacity-80 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A30003] after:transition-all after:duration-300 hover:after:w-full"
          style={{ color: "#A30003" }}
        >
          date ❤
        </button>
        <button
          onClick={() =>
            document
              .getElementById("how-it-works")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A30003] after:transition-all after:duration-300 hover:after:w-full"
          style={{ color: "#A30003" }}
        >
          how it works
        </button>
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A30003] after:transition-all after:duration-300 hover:after:w-full"
          style={{ color: "#A30003" }}
        >
          about
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-medium hover:opacity-80 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A30003] after:transition-all after:duration-300 hover:after:w-full"
          style={{ color: "#A30003" }}
        >
          contact
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden sticky top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${
          scrolled ? "bg-[#A30003]/60 backdrop-blur-md shadow-sm" : ""
        }`}
        style={scrolled ? {} : { backgroundColor: "#A30003" }}
      >
        <span className="text-xl font-bold text-white">calen.date</span>
        <button
          onClick={() => router.push("/join-waitlist")}
          style={{
            background: "rgba(255, 255, 255, 0.41)",
          }}
          className="px-3 py-1  rounded-2xl inline-flex justify-start items-center gap-1.5"
        >
          <div className="font-bold text-white">Date</div>
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3.0595C0 5.60185 2.01 6.9564 3.481 8.16928C4 8.59693 4.5 9 5 9C5.5 9 6 8.59745 6.519 8.16876C7.9905 6.95692 10 5.60185 10 3.06003C10 0.518206 7.25 -1.28595 5 1.15863C2.75 -1.28595 0 0.51716 0 3.0595Z"
              fill="white"
            />
          </svg>
        </button>
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
                  style={{ color: "#A30003" }}
                >
                  calen.date <span style={{ color: "#A30003" }}>💌</span>
                </h1>
                <p
                  className="text-2xl mb-8 font-medium"
                  style={{ color: "#A30003" }}
                >
                  The dating app that plans your next date
                </p>

                <button
                  onClick={() => router.push("/join-waitlist")}
                  className="w-full mt-8 px-4 py-2 rounded-2xl text-xl font-medium bg-white text-[#A30003] border-4 border-[#A30003] hover:bg-[#A30003] hover:text-white hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm transition-all duration-200 flex items-center justify-between"
                >
                  <span>Join the waitlist now</span>
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6895 0.698579C11.9708 0.417372 12.3523 0.259399 12.75 0.259399C13.1477 0.259399 13.5292 0.417372 13.8105 0.698579L20.5605 7.44858C20.8417 7.72987 20.9997 8.11133 20.9997 8.50908C20.9997 8.90683 20.8417 9.28829 20.5605 9.56958L13.8105 16.3196C13.5276 16.5928 13.1487 16.744 12.7554 16.7406C12.3621 16.7372 11.1859 16.5794 11.7078 16.3013C11.4297 16.0232 11.2719 15.647 11.2685 15.2537C11.2651 14.8604 11.4163 14.4815 11.6895 14.1986L15.75 10.0091H1.5C1.10218 10.0091 0.720644 9.85104 0.43934 9.56974C0.158035 9.28843 0 8.9069 0 8.50908C0 8.11125 0.158035 7.72972 0.43934 7.44842C0.720644 7.16711 1.10218 7.00908 1.5 7.00908H15.75L11.6895 2.81958C11.4083 2.53829 11.2503 2.15683 11.2503 1.75908C11.2503 1.36133 11.4083 0.97987 11.6895 0.698579Z"
                      className="fill-current"
                    />
                  </svg>
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
                className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 cursor-pointer group"
              >
                <span
                  className="font-medium text-2xl relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A30003] after:transition-all after:duration-300 group-hover:after:w-full"
                  style={{ color: "#A30003" }}
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
                  style={{ color: "#A30003" }}
                >
                  No swiping, no doxxing
                </h2>

                {/* Tell us about yourself */}
                <div>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#A30003" }}
                  >
                    Tell us about yourself,
                  </h3>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#A30003" }}
                  >
                    3 quick questions, & accept
                  </h3>
                  <h3
                    className="text-3xl font-bold"
                    style={{ color: "#A30003" }}
                  >
                    your calendar invite
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Box - Half Screen Height */}
            <div
              className="h-1/2 flex items-center justify-center px-12"
              style={{ backgroundColor: "#A30003" }}
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
              className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 cursor-pointer group"
            >
              <Image
                src="/images/arrow-2.svg"
                alt="Arrow pointing"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-medium text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                How does it work?
              </span>
            </button>
          </div>
        </div>

        {/* Third Page - Tell Us About Yourself */}
        <div id="tell-us" className="flex">
          {/* Left Side - Survey Images */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12 py-16">
            <div className="relative flex items-center justify-center ">
              {/* First survey card - positioned behind and to the left */}
              <Image
                src="/images/survey.png"
                alt="App interface showing favorite time of day question"
                width={671}
                height={572}
                className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110 cursor-pointer"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ color: "#A30003" }}
              >
                Tell us about yourself
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#A30003" }}>
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
                style={{ color: "#A30003" }}
              >
                Tell us when you&apos;re free
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#A30003" }}>
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
                  className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110 cursor-pointer"
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
                className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110 cursor-pointer"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl">
              <h2
                className="text-5xl font-bold mb-6"
                style={{ color: "#A30003" }}
              >
                See the actual algorithm
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#A30003" }}>
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
                style={{ color: "#A30003" }}
              >
                Right person, right time
              </h2>
              <p className="text-2xl font-medium" style={{ color: "#A30003" }}>
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
                  className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110 cursor-pointer"
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
            <p className="text-4xl font-bold" style={{ color: "#A30003" }}>
              Accept your calendar invite, date
            </p>
            <p className="text-2xl font-medium" style={{ color: "#A30003" }}>
              Dating should be as easy as accepting an invite
            </p>
          </div>
          <button
            onClick={() => router.push("/join-waitlist")}
            className="w-full mt-8 px-12 py-4 rounded-full text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#A30003" }}
          >
            Sign up for a blind date
          </button>
        </div>
        <div
          id="about"
          className="flex bg-[#A30003] flex-col items-center justify-jtart px-12 py-16"
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
                style={{ color: "#A30003" }}
              >
                calen.date <span style={{ color: "#A30003" }}>💌</span>
              </h1>
              <p
                className="text-3xl font-bold leading-none tracking-tighter"
                style={{
                  color: "#A30003",
                  letterSpacing: "-2%",
                }}
              >
                Find your right person, right time
              </p>
              <button
                onClick={() => router.push("/join-waitlist")}
                className="w-full mt-8 px-12 py-4 rounded-full text-2xl font-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#A30003" }}
              >
                Sign up for a blind date
              </button>
              <div className="flex items-center justify-center mt-4 gap-4">
                <a
                  href="https://instagram.com/calen.date"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6 4H32.4C38.8 4 44 9.2 44 15.6V32.4C44 35.4765 42.7779 38.427 40.6024 40.6024C38.427 42.7779 35.4765 44 32.4 44H15.6C9.2 44 4 38.8 4 32.4V15.6C4 12.5235 5.22214 9.57298 7.39756 7.39756C9.57298 5.22214 12.5235 4 15.6 4ZM15.2 8C13.2904 8 11.4591 8.75857 10.1088 10.1088C8.75857 11.4591 8 13.2904 8 15.2V32.8C8 36.78 11.22 40 15.2 40H32.8C34.7096 40 36.5409 39.2414 37.8912 37.8912C39.2414 36.5409 40 34.7096 40 32.8V15.2C40 11.22 36.78 8 32.8 8H15.2ZM34.5 11C35.163 11 35.7989 11.2634 36.2678 11.7322C36.7366 12.2011 37 12.837 37 13.5C37 14.163 36.7366 14.7989 36.2678 15.2678C35.7989 15.7366 35.163 16 34.5 16C33.837 16 33.2011 15.7366 32.7322 15.2678C32.2634 14.7989 32 14.163 32 13.5C32 12.837 32.2634 12.2011 32.7322 11.7322C33.2011 11.2634 33.837 11 34.5 11ZM24 14C26.6522 14 29.1957 15.0536 31.0711 16.9289C32.9464 18.8043 34 21.3478 34 24C34 26.6522 32.9464 29.1957 31.0711 31.0711C29.1957 32.9464 26.6522 34 24 34C21.3478 34 18.8043 32.9464 16.9289 31.0711C15.0536 29.1957 14 26.6522 14 24C14 21.3478 15.0536 18.8043 16.9289 16.9289C18.8043 15.0536 21.3478 14 24 14ZM24 18C22.4087 18 20.8826 18.6321 19.7574 19.7574C18.6321 20.8826 18 22.4087 18 24C18 25.5913 18.6321 27.1174 19.7574 28.2426C20.8826 29.3679 22.4087 30 24 30C25.5913 30 27.1174 29.3679 28.2426 28.2426C29.3679 27.1174 30 25.5913 30 24C30 22.4087 29.3679 20.8826 28.2426 19.7574C27.1174 18.6321 25.5913 18 24 18Z"
                      fill="#A30003"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:date.calendate@gmail.com"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 40C6.9 40 5.95867 39.6087 5.176 38.826C4.39333 38.0433 4.00133 37.1013 4 36V12C4 10.9 4.392 9.95867 5.176 9.176C5.96 8.39333 6.90133 8.00133 8 8H40C41.1 8 42.042 8.392 42.826 9.176C43.61 9.96 44.0013 10.9013 44 12V36C44 37.1 43.6087 38.042 42.826 38.826C42.0433 39.61 41.1013 40.0013 40 40H8ZM24 26L8 16V36H40V16L24 26ZM24 22L40 12H8L24 22ZM8 16V12V36V16Z"
                      fill="#A30003"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-white flex items-center justify-center px-12">
            <div className="max-w-xl w-full py-12">
              <form className="gap-2 flex flex-col items-start justify-center">
                {/* Name and Email row */}
                <h2
                  className="text-3xl font-bold "
                  style={{ color: "#A30003" }}
                >
                  Contact us
                </h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 px-4 py-2 rounded-xl border-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#9A0600]"
                    style={{ borderColor: "#A30003" }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-2 rounded-xl border-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#9A0600]"
                    style={{ borderColor: "#A30003" }}
                  />
                </div>

                {/* Message textarea */}
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl border-2 text-gray-700 placeholder-gray-500 resize-none focus:outline-none focus:border-[#9A0600]"
                  style={{ borderColor: "#A30003" }}
                />

                {/* Submit button */}
                <button
                  className="px-8 py-4 rounded-full text-xl font-medium text-white hover:opacity-90 transition-opacity block text-center"
                  style={{ backgroundColor: "#A30003" }}
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
                calen.date <span style={{ color: "#A30003" }}>💌</span>
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
                  background: "#A30003",
                  boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.24)",
                }}
              >
                <span>Join the waitlist</span>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.57534 0.611693C6.73357 0.453514 6.94814 0.364655 7.17188 0.364655C7.39561 0.364655 7.61018 0.453514 7.76841 0.611693L11.5653 4.40857C11.7235 4.56679 11.8123 4.78137 11.8123 5.0051C11.8123 5.22883 11.7235 5.4434 11.5653 5.60163L7.76841 9.39851C7.60927 9.5522 7.39614 9.63725 7.17491 9.63532C6.95368 9.6334 6.74206 9.54467 6.58562 9.38823C6.42918 9.23179 6.34045 9.02017 6.33853 8.79894C6.3366 8.57771 6.42165 8.36458 6.57534 8.20544L8.85938 5.84885H0.84375C0.619974 5.84885 0.405362 5.75995 0.247129 5.60172C0.0888949 5.44349 0 5.22888 0 5.0051C0 4.78132 0.0888949 4.56671 0.247129 4.40848C0.405362 4.25024 0.619974 4.16135 0.84375 4.16135H8.85938L6.57534 1.80476C6.41717 1.64653 6.32831 1.43196 6.32831 1.20822C6.32831 0.984492 6.41717 0.76992 6.57534 0.611693Z"
                    fill="white"
                  />
                </svg>
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
                style={{ color: "#A30003" }}
              >
                No swiping, no doxxing
              </h2>
              <div>
                <h3
                  className="text-2xl font-[700]"
                  style={{ color: "#A30003" }}
                >
                  Tell us about yourself,
                </h3>
                <h3
                  className="text-2xl font-[700]"
                  style={{ color: "#A30003" }}
                >
                  3 quick questions, & accept
                </h3>
                <h3
                  className="text-2xl font-[700]"
                  style={{ color: "#A30003" }}
                >
                  your calendar invite
                </h3>
              </div>
            </div>

            {/* Bottom Section */}
          </div>
          <div
            className="h-1/2 p-6 text-left h-[353px] flex flex-col justify-center relative"
            style={{ backgroundColor: "#A30003" }}
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
            <h2 className="text-2xl font-[700]" style={{ color: "#A30003" }}>
              Tell us about yourself
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#A30003" }}>
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
            <h2 className="text-2xl font-[700]" style={{ color: "#A30003" }}>
              Tell us when you&apos;re free
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#A30003" }}>
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
            <h2 className="text-2xl font-[700]" style={{ color: "#A30003" }}>
              See the actual algorithm
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#A30003" }}>
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
            <h2 className="text-2xl font-[700]" style={{ color: "#A30003" }}>
              Right person, right time
            </h2>
            <p className="text-lg font-[600]" style={{ color: "#A30003" }}>
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
              style={{ color: "#A30003" }}
            >
              Accept your calendar invite, date
            </p>
            <p
              className="text-lg font-[600] w-[250px] mx-auto"
              style={{ color: "#A30003" }}
            >
              Dating should be as easy as accepting an invite
            </p>
          </div>
          <button
            onClick={() => router.push("/join-waitlist")}
            className="w-[200px] px-8 py-4 rounded-full text-xl font-[600] text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#A30003" }}
          >
            Sign up
          </button>
        </div>

        {/* Mobile About */}
        <div className="bg-[#A30003] px-6 py-12 text-center">
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
            <h1 className="text-4xl font-bold" style={{ color: "#A30003" }}>
              calen.date
            </h1>
            <p
              className="text-lg font-bold leading-tight"
              style={{
                color: "#A30003",
                letterSpacing: "-1%",
              }}
            >
              Find your right person, right time
            </p>
          </div>

          <a
            href="mailto:date.calendate@gmail.com"
            className="w-full px-8 py-4 rounded-full text-xl font-medium text-white hover:opacity-90 transition-opacity block text-center"
            style={{ backgroundColor: "#A30003" }}
          >
            Contact us
          </a>
        </div>
      </div>
      {/* END MOBILE VERSION */}
    </>
  );
}
