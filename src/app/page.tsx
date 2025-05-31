import Image from "next/image";

export default function Home() {
  return (
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

            <button
              className="bg-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2 group border-2"
              style={{ borderColor: "#9A0600", color: "#9A0600" }}
            >
              <span>sign up for a blind date</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

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
  );
}
