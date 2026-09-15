export function Hero() {
  return (
    <main
      id="hero-section"
      className="relative z-10 h-screen w-full overflow-hidden"
    >
      {/* Left-side portfolio content */}
      <div
        id="hero-content"
        className="
          absolute
          left-5 sm:left-8 md:left-10 lg:left-[6vw]
          top-1/2 -translate-y-1/2
          z-20
          w-[90%] sm:w-[70%] md:w-[48%] lg:w-[42%]
          max-w-[680px]
        "
      >
        {/* Small eyebrow */}
        <p
          className="mb-4 uppercase tracking-[0.22em] font-medium"
          style={{
            color: '#4F8CFF',
            fontSize: 'clamp(11px, 1vw, 14px)',
          }}
        >
          Marketing & Analytics
        </p>

        {/* Main headline */}
        <h1
          className="text-white uppercase font-bold"
          style={{
            fontSize: 'clamp(44px, 5.2vw, 82px)',
            lineHeight: 0.92,
            letterSpacing: '-0.045em',
          }}
        >
          Data-Driven
          <br />
          <span style={{ color: '#4F8CFF' }}>Marketing.</span>
          <br />
          Real Business
          <br />
          Impact.
        </h1>

        {/* Supporting copy */}
        <p
          className="mt-7 text-white/70 max-w-[520px]"
          style={{
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            lineHeight: 1.6,
          }}
        >
          Marketing strategy, analytics and digital performance turning
          data and customer insights into smarter marketing decisions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="#work"
            className="
              inline-flex items-center justify-center
              bg-white text-black
              rounded-full
              px-6 py-3
              text-sm font-medium
              transition-all duration-300
              hover:bg-[#4F8CFF] hover:text-white
            "
          >
            View My Work
          </a>

          <a
            href="#about"
            className="
              inline-flex items-center justify-center
              bg-transparent text-white
              border border-white/40
              rounded-full
              px-6 py-3
              text-sm font-medium
              transition-all duration-300
              hover:bg-white hover:text-black
            "
          >
            About Me
          </a>
        </div>
      </div>
    </main>
  );
}