import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* First Page */}
      <div className="min-h-screen flex">
        {/* Left Side - White Background */}
        <div className="flex-1 bg-white flex flex-col">
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
                className="text-6xl font-bold mb-4"
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

              {/* What is this section */}
              <div className="mt-16">
                <div className="flex items-center space-x-2">
                  <span className="font-medium" style={{ color: "#9A0600" }}>
                    what is this?
                  </span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#9A0600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
      <div className="h-screen flex">
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
          {/* Top Box - Quarter Screen Height */}
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

          {/* Bottom Box - Quarter Screen Height */}
          <div
            className="h-1/2 flex items-center justify-center px-12"
            style={{ backgroundColor: "#9A0600" }}
          >
            <div className="max-w-xl text-center">
              <h4 className="text-3xl font-bold text-white mb-4">
                one match, one date
              </h4>
              <p className="text-xl text-white mb-6">
                each match is an actual date on your calendar
              </p>

              {/* How does it work */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg font-medium text-white">
                  how does it work?
                </span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12v0"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Remaining Space - Fill */}
          <div className="flex-1 bg-white"></div>
        </div>
      </div>
    </>
  );
}
