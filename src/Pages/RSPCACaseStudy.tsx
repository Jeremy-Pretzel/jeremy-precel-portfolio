import { useEffect, useState } from "react";

type PortfolioImage = {
  src: string;
  alt: string;
  caption: string;
};

const allImages: PortfolioImage[] = [
  {
    src: "/assets/RSPCA/rspca-target-audience.png",
    alt: "RSPCA Victoria target audience analysis",
    caption: "Target audience analysis",
  },
  {
    src: "/assets/RSPCA/rspca-segmentation.png",
    alt: "RSPCA Victoria audience segmentation",
    caption: "Market segmentation",
  },
  {
    src: "/assets/RSPCA/rspca-personas.png",
    alt: "RSPCA Victoria target audience personas",
    caption: "Target audience personas",
  },
  {
    src: "/assets/RSPCA/rspca-positioning.png",
    alt: "RSPCA Victoria campaign positioning",
    caption: "Campaign positioning",
  },
  {
    src: "/assets/RSPCA/rspca-communication-objectives.png",
    alt: "RSPCA Victoria communication objectives",
    caption: "Communication objectives",
  },
  {
    src: "/assets/RSPCA/rspca-strategy-video-series.png",
    alt: "RSPCA Victoria Strategy A video series",
    caption: "Strategy A — Video series",
  },
  {
    src: "/assets/RSPCA/rspca-strategy-b.png",
    alt: "RSPCA Victoria Strategy B Ask a Vet",
    caption: "Strategy B — Ask a Vet",
  },
  {
    src: "/assets/RSPCA/rspca-strategy-c.png",
    alt: "RSPCA Victoria Strategy C EDM campaign",
    caption: "Strategy C — EDM campaign",
  },
  {
    src: "/assets/RSPCA/rspca-strategy-campaign.png",
    alt: "RSPCA Victoria Strategy D endorser strategy",
    caption: "Strategy D — Endorser strategy",
  },
  {
    src: "/assets/RSPCA/rspca-media-budget.png",
    alt: "RSPCA Victoria media execution and budget",
    caption: "Media execution and budget",
  },
];

function ImageCard({
  image,
  onOpen,
}: {
  image: PortfolioImage;
  onOpen: () => void;
}) {
  return (
    <div className="group">

      <p className="text-white text-lg md:text-xl font-medium mb-4">
        {image.caption}
      </p>

      <button
        type="button"
        onClick={onOpen}
        className="block w-full"
        aria-label={`Enlarge ${image.caption}`}
      >
   <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="
              w-full
              h-full
              object-cover
              object-top
              block
              opacity-60
              transition-all
              duration-200
              ease-out
              hover:opacity-100
              hover:scale-[1.01]
            "
          />
        </div>
      </button>

    </div>
  );
}

export function RSPCACaseStudy() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const openImage = (src: string) => {
    const index = allImages.findIndex((image) => image.src === src);
    setActiveImage(index);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  const previousImage = () => {
    setActiveImage((current) => {
      if (current === null) return null;
      return current === 0 ? allImages.length - 1 : current - 1;
    });
  };

  const nextImage = () => {
    setActiveImage((current) => {
      if (current === null) return null;
      return current === allImages.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  const targetAudience = allImages.slice(0, 3);
  const positioning = allImages.slice(3, 5);
  const strategies = allImages.slice(5, 9);
  const mediaBudget = allImages[9];

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">

      {/* HERO */}
      <section className="px-6 md:px-[7vw] pt-36 pb-24">
        <p className="text-sm uppercase tracking-[0.22em] text-[#72C78B] mb-5">
          Integrated Marketing Campaign
        </p>

        <h1 className="max-w-6xl text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.055em] leading-[0.95]">
          RSPCA Victoria
          <span className="block text-white/35">
            Veterinary Clinics
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/55 leading-relaxed">
          An integrated marketing campaign developed to increase awareness
          and veterinary consultations through audience targeting,
          positioning, creative strategy and multi-channel media planning.
        </p>

        <div className="flex flex-wrap gap-3 mt-10">
          {[
            "Audience Research",
            "Campaign Strategy",
            "Paid Media",
            "Creative Planning",
            "Media Planning",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/15 rounded-full px-4 py-2 text-sm text-white/55"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 md:px-[7vw] py-4">
        <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-10 lg:gap-20">
          <div>
            <p className="text-[#72C78B] text-xs uppercase tracking-[0.22em]">
              01 / Overview
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">
              The Campaign
            </h2>

            <p className="mt-6 max-w-3xl text-lg text-white/55 leading-8">
              The campaign was developed for RSPCA Victoria Veterinary
              Clinics with the objective of increasing public consultations
              from 120 to 140 per week during the second half of 2024.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <div className="border border-white/10 p-6">
                <p className="text-sm text-white/35">Current consultations</p>
                <p className="mt-3 text-4xl font-semibold">120</p>
                <p className="mt-1 text-sm text-white/35">per week</p>
              </div>

              <div className="border border-white/10 p-6">
                <p className="text-sm text-white/35">Campaign target</p>
                <p className="mt-3 text-4xl font-semibold text-[#72C78B]">
                  140
                </p>
                <p className="mt-1 text-sm text-white/35">per week</p>
              </div>

              <div className="border border-white/10 p-6">
                <p className="text-sm text-white/35">Campaign period</p>
                <p className="mt-3 text-4xl font-semibold">6</p>
                <p className="mt-1 text-sm text-white/35">months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="px-6 md:px-[7vw] py-24">
        <p className="text-[#72C78B] text-xs uppercase tracking-[0.22em]">
          02 / Market Insights
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.045em]">
          Target Audience
        </h2>

        <p className="mt-5 max-w-3xl text-lg text-white/55 leading-8">
          Audience research and segmentation identified the Compassionate
          Dog Mum as the primary audience for the campaign.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
          {targetAudience.map((image) => (
            <ImageCard
              key={image.src}
              image={image}
              onOpen={() => openImage(image.src)}
            />
          ))}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="px-6 md:px-[7vw] py-4">
        <p className="text-[#72C78B] text-xs uppercase tracking-[0.22em]">
          03 / Positioning
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.045em] max-w-5xl">
          Positioning & Communication Objectives
        </h2>

        <p className="mt-5 max-w-3xl text-lg text-white/55 leading-8">
          The campaign positioned RSPCA Victoria Veterinary Clinics around
          compassionate care, supported by measurable communication
          objectives.
        </p>

        <div className="mt-10 border-l-2 border-[#72C78B] pl-6 max-w-4xl">
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            “To the Compassionate Dog Mum, the RSPCA Victoria Veterinary
            Clinic is the caring veterinary service that fulfills her
            emotional desire for every pet to be loved the way hers is.”
          </p>
        </div>

        <p className="mt-8 text-3xl md:text-4xl font-semibold text-[#72C78B]">
          Your vet, caring for ALL pets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl items-start">
  {positioning.map((image) => (
    <ImageCard
      key={image.src}
      image={image}
      onOpen={() => openImage(image.src)}
    />
  ))}
</div>
      </section>

      {/* INTEGRATED CAMPAIGN */}
      <section className="px-6 md:px-[7vw] py-24">
        <p className="text-[#72C78B] text-xs uppercase tracking-[0.22em]">
          04 / Integrated Campaign
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.045em]">
          Four connected campaign strategies.
        </h2>

        <p className="mt-5 max-w-3xl text-lg text-white/55 leading-8">
          The integrated campaign combined video, veterinary-led content,
          direct email marketing and an endorser strategy across paid,
          owned and earned media.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-start">
          {strategies.map((image) => (
            <ImageCard
              key={image.src}
              image={image}
              onOpen={() => openImage(image.src)}
            />
          ))}
        </div>
      </section>

{/* MEDIA EXECUTION */}
<section className="px-6 md:px-[7vw] py-4">
  <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-start">

    <div>
      <p className="text-[#72C78B] text-xs uppercase tracking-[0.22em]">
        05 / Media Execution
      </p>

      <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.045em]">
        Media Execution & Budget
      </h2>

      <p className="mt-5 max-w-2xl text-lg text-white/55 leading-8">
        A pulsing media schedule combined always-on activity with
        concentrated bursts across paid, owned and earned channels.
      </p>

      <div className="flex gap-10 mt-10">
        <div>
          <p className="text-sm text-white/35">Campaign budget</p>
          <p className="mt-2 text-4xl font-semibold">$70K</p>
        </div>

        <div>
          <p className="text-sm text-white/35">Paid advertising</p>
          <p className="mt-2 text-4xl font-semibold text-[#72C78B]">
            $43K
          </p>
        </div>
      </div>
    </div>

    <div className="w-full max-w-[600px] mx-auto">
      <ImageCard
        image={mediaBudget}
        onOpen={() => openImage(mediaBudget.src)}
      />
    </div>

  </div>
</section>

      {/* SUMMARY */}
      <section className="border-t border-white/10 px-6 md:px-[7vw] py-28">
        <p className="text-[#72C78B] text-xs uppercase tracking-[0.22em]">
          Campaign Summary
        </p>

        <h2 className="mt-5 max-w-5xl text-4xl md:text-6xl font-semibold tracking-[-0.045em]">
          Audience-led strategy.
          <span className="text-white/30">
            {" "}Integrated creative and media planning.
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-white/50 leading-8">
          The campaign brought together audience research, positioning,
          creative development, paid and owned media planning and campaign
          measurement within one integrated marketing strategy.
        </p>

        <a
          href="/"
          className="inline-flex items-center mt-12 border border-white/20 rounded-full px-7 py-4 text-sm transition-all hover:bg-white hover:text-black"
        >
          ← Back to Selected Work
        </a>
      </section>

      {/* LIGHTBOX */}
      {activeImage !== null && (
<div
  className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md overflow-y-auto px-4 md:px-20 py-10"
  onClick={closeImage}
>
          {/* CLOSE */}
<button
  type="button"
  onClick={closeImage}
  className="fixed top-6 right-6 md:top-8 md:right-10 z-[10002] text-4xl font-light text-white hover:text-[#72C78B] transition-colors duration-200"
  aria-label="Close image"
>
  ×
</button>

          {/* PREVIOUS */}
<button
  type="button"
  onClick={(event) => {
    event.stopPropagation();
    previousImage();
  }}
  className="fixed left-5 md:left-8 top-1/2 -translate-y-1/2 z-[10002] text-white hover:text-[#72C78B] transition-colors duration-200"
  aria-label="Previous image"
>
  <span className="block w-5 h-5 border-l-[4px] border-b-[4px] border-current rotate-45" />
</button>

          {/* IMAGE */}
 <div
  className="min-h-full w-full flex flex-col items-center justify-start"
  onClick={(event) => event.stopPropagation()}
>
<img
  src={allImages[activeImage].src}
  alt={allImages[activeImage].alt}
  className="w-auto max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] h-auto object-contain shadow-2xl"
/>

            <div className="mt-5 flex w-full items-center justify-between text-sm">
              <p className="text-white/65">
                {allImages[activeImage].caption}
              </p>

              <p className="text-white/35">
                {activeImage + 1} / {allImages.length}
              </p>
            </div>
          </div>

          {/* NEXT */}
 <button
  type="button"
  onClick={(event) => {
    event.stopPropagation();
    nextImage();
  }}
  className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-[10002] text-white hover:text-[#72C78B] transition-colors duration-200"
  aria-label="Next image"
>
  <span className="block w-5 h-5 border-r-[4px] border-t-[4px] border-current rotate-45" />
</button>
        </div>
      )}

    </main>
  );
}