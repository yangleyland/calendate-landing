import Image from "next/image";

export default function FormSubmitted() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="w-1/2">
        <Image
          src="/images/survey-done.png"
          alt="Two people holding a large red heart"
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
            You&apos;re done! Sit tight & we&apos;ll let you know when
            we&apos;re ready.
          </h1>

          <p className="mb-8 text-black font-sans text-2xl font-medium leading-normal">
            In the meantime, follow us on on Instagram @calen.date to stay
            updated.
          </p>

          <p className="mb-8 text-black font-sans text-2xl font-medium leading-normal">
            You may close this tab.
          </p>
        </div>
      </div>
    </div>
  );
}
