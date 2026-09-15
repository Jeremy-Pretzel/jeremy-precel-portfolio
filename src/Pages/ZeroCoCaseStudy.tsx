import { useState } from "react";
export function ZeroCoCaseStudy() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [flippedSegment, setFlippedSegment] = useState<string | null>(null);
  const [oohIndex, setOohIndex] = useState(0);
  const challengePages = [
  {
    src: "/assets/zeroco/zeroco-challenge-03.png",
    title: "Executive Summary",
    description:
      "Research identified strong demand for sustainable cleaning products, but lower awareness of ZeroCo. Tide Turners emerged as the strongest growth opportunity.",
  },
  {
    src: "/assets/zeroco-challenge-04.png",
    title: "Brand Overview",
    description:
      "ZeroCo's closed-loop refill model creates a differentiated sustainability proposition, combining reusable dispensers with returned and recycled refill pouches.",
  },
  {
    src: "/assets/zeroco-challenge-05.png",
    title: "Market Environment",
    description:
      "ZeroCo operates in a mature, highly competitive cleaning category where sustainability is increasingly important, but consumers still consider price, performance and convenience.",
  },
  {
    src: "/assets/zeroco-challenge-06.png",
    title: "Current Positioning",
    description:
      "ZeroCo has strong sustainability credentials and product differentiation, but lower brand awareness and familiarity limit its ability to compete with established cleaning brands.",
  },
];

const researchPages = [
  {
    src: "/assets/zeroco-research-07.png",
    title: "PESTLE Analysis",
    description:
      "Growing demand for sustainable products created a strong market opportunity, while cost-of-living pressures and price sensitivity remained important barriers to purchase.",
  },
  {
    src: "/assets/zeroco-research-08.png",
    title: "SWOT Analysis",
    description:
      "ZeroCo's sustainability mission, innovative business model and positive media coverage were key strengths, while low brand awareness and dependence on online channels limited growth.",
  },
  {
    src: "/assets/zeroco-research-09 (1).png",
    title: "Research Strategy",
    description:
      "27 interviews, including 26 non-ZeroCo users and 1 ZeroCo user, informed the development of a quantitative survey that received 141 responses.",
  },
  {
    src: "/assets/zeroco-research-10.png",
    title: "Research Findings",
    description:
      "Consumers showed strong interest in sustainability, but price, effectiveness and convenience remained major purchase drivers. Research also identified low awareness of ZeroCo and its closed-loop model.",
  },
];

const audiencePages = [
  {
    src: "/assets/zeroco-audience-11.png",
    title: "Audience Segments",
    description:
      "Research identified five distinct consumer segments based on sustainability attitudes, purchase behaviour and engagement with environmentally responsible products.",
  },
  {
    src: "/assets/zeroco-audience-12.png",
    title: "Segment Profiles",
    description:
      "Tide Turners represented the largest segment at 59.4%, followed by Impact Investors at 20.3%, with smaller groups of Savvy Shoppers, Set in Stoners and Eco Champions.",
  },
  {
    src: "/assets/zeroco-audience-13.png",
    title: "Segment Comparison",
    description:
      "Comparing the five segments revealed differences in environmental motivation, purchasing priorities and willingness to engage with sustainable brands.",
  },
  {
    src: "/assets/zeroco-audience-14-portrait.png",
    title: "Target Audience",
    description:
      "Tide Turners were selected as the primary growth audience because they combined environmental concern with significant potential to shift everyday purchasing behaviour.",
  },
  {
    src: "/assets/zeroco-audience-15.png",
    title: "Tide Turners",
    description:
      "Tide Turners care about reducing environmental harm but still prioritise practical factors such as price, product performance and convenience when making purchasing decisions.",
  },
];

const oohPages = [
  "/assets/zeroco/ooh-billboard.png",
  "/assets/zeroco/ooh-posters-credit.png",
  "/assets/zeroco/ooh-posters.png",
  "/assets/zeroco/ooh-posters-ocean.png",
];

const socialPages = [
  "/assets/zeroco/1-kid.png",
  "/assets/zeroco/4-food.png",
  "/assets/zeroco/5-adult.png",
  "/assets/zeroco/2-bin.png",
  "/assets/zeroco/3-chadstone.png",
];

const communityPages = [
  "/assets/zeroco/squid-activation-bin.png",
  "/assets/zeroco/gang-bin activation.png",
  "/assets/zeroco/earth-activation.png",
];

const googleAdsPages = [
  "/assets/zeroco/zeroco-webjet-ad.png",
];

const plasticFreeJulyPages = [
  "/assets/zeroco/website-landing-page.png",
  "/assets/zeroco/1app-phone.png"
];

const referralPages = [
  "/assets/zeroco/1referral.png",
  "/assets/zeroco/2referral.png",
];

const impactPages = [
  {
  src: "/assets/zeroco/impact-som.png",
  title: "Business & Revenue Assumptions",
  description:
    "The model used an assumed base of 70,000 ZeroCo households and $12M annual revenue, producing an estimated annual customer value of $171.40 ($12M ÷ 70,000). A 30% growth scenario increased the modelled customer base to approximately 91,000 households and revenue to $15.6M."
},
  {
  src: "/assets/zeroco/impact-cost-romi.png",
  title: "Campaign Investment",
  description:
    "Channel-level costs across OOH, retail activation, social, referral/eDM and digital advertising were combined to produce a total modelled campaign investment of approximately $875K."
},
{
  src: "/assets/zeroco/impact-revenue.png",
  title: "Revenue Projection & ROMI",
  description:
    "Projected incremental revenue of $4.7M was compared against the $875K campaign investment. Using the modelled return formula, this produced a projected ROMI of 437%."
},
{
  src: "/assets/zeroco/impact-appendix-f.png",
  title: "Detailed Campaign Costs",
  description:
  "Individual channel costs were modelled using assumptions including media placement costs, CPC, conversion rates, referral incentives and activation costs. These calculations were then combined to estimate the total campaign investment."
},

{
  src: "/assets/zeroco/ZeroCo-Appendix-G-Page.png",
  title: "Detailed Revenue Calculations",
  description:
    "Revenue projections were modelled using estimated annual customer value, projected customer acquisition from paid media and Google Ads, referral participation, and in-store promotional sales."
},

];

const activePages = impactPages.some((page) => page.src === (selectedPage ?? ""))
  ? impactPages.map((page) => page.src)

  : plasticFreeJulyPages.includes(selectedPage ?? "")
  ? plasticFreeJulyPages

  : referralPages.includes(selectedPage ?? "")
  ? referralPages

  : googleAdsPages.includes(selectedPage ?? "")
  ? googleAdsPages

  : selectedPage === "/assets/zeroco/edm.png"
  ? ["/assets/zeroco/edm.png"]

  : communityPages.includes(selectedPage ?? "")
  ? communityPages

  : socialPages.includes(selectedPage ?? "")
  ? socialPages

  : selectedPage?.includes("/assets/zeroco/ooh-")
  ? oohPages

  : selectedPage?.includes("zeroco-research")
  ? researchPages.map((page) => page.src)

  : selectedPage?.includes("zeroco-audience")
  ? audiencePages.map((page) => page.src)

  : challengePages.map((page) => page.src);

const selectedIndex = selectedPage
  ? activePages.indexOf(selectedPage)
  : -1;

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
          {/* BACK TO HOMEPAGE */}
      

      {/* =========================
          HERO
      ========================== */}
      <section className="min-h-screen px-6 md:px-[7vw] pt-28 pb-16 flex items-center">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center w-full">

          <div>
            <p className="text-[#4F8CFF] uppercase tracking-[0.22em] text-xs mb-5">
              01 / Featured Case Study
            </p>

            <p className="text-white/40 uppercase tracking-[0.18em] text-[11px] mb-8">
              Academic Project · RMIT University
            </p>

            <h1
              className="font-bold uppercase tracking-[-0.05em]"
              style={{
                fontSize: "clamp(58px, 8vw, 120px)",
                lineHeight: 0.82,
              }}
            >
              ZERO
              <span className="text-[#4F8CFF]">CO.</span>
            </h1>

            <h2 className="text-2xl md:text-3xl mt-8 max-w-lg leading-tight">
              Growth & Market Expansion Strategy
            </h2>

            <p className="text-white/60 mt-6 max-w-xl leading-7">
              Consumer research and segmentation used to identify a growth
              audience and develop an integrated marketing campaign focused on
              awareness and customer acquisition.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Consumer Research",
                "Segmentation",
                "Campaign Strategy",
                "Digital Marketing",
                "ROMI",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/20 rounded-full px-4 py-2 uppercase tracking-[0.12em] text-[10px] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        {/* ZEROCO HERO IMAGE */}
<div className="bg-white/5 border border-white/10 overflow-hidden">
  <img
    src="/assets/zeroco/turn-tide-image.png"
    alt="ZeroCo Turn the Tide Together campaign"
    className="w-full h-auto block transition-transform duration-300 ease-out hover:scale-[1.03]"
  />
</div>

</div>
</section>


      {/* =========================
          PROJECT OVERVIEW
      ========================== */}
      <section className="px-6 md:px-[7vw] py-28 border-t border-white/10">

        <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
          The Project
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-8">

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
            Turning customer research into a focused growth strategy.
          </h2>

          <p className="text-white/60 leading-7 max-w-xl lg:self-end">
            The project investigated consumer attitudes, motivations and
            behaviours to identify an attractive audience opportunity and
            determine how ZeroCo could strengthen brand awareness and customer
            acquisition.
          </p>

        </div>

        {/* KEY NUMBERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

  {/* INTERVIEWS */}
  <div>
    <div className="text-7xl md:text-8xl font-medium text-white">
      27
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-sm mt-5">
      Interviews
    </p>

    <p className="text-white/55 leading-7 mt-6 max-w-sm">
      26 non-ZeroCo users and 1 ZeroCo user were interviewed to explore
      brand awareness, purchase behaviour, sustainability attitudes and
      barriers to switching.
    </p>
  </div>

  {/* SURVEY */}
  <div>
    <div className="text-7xl md:text-8xl font-medium text-[#4F8CFF]">
      141
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-sm mt-5">
      Survey Responses
    </p>

    <p className="text-white/55 leading-7 mt-6 max-w-sm">
      Insights from the interviews informed a quantitative survey used
      to measure broader consumer attitudes and behaviours across the
      target market.
    </p>
  </div>

  {/* SEGMENTS */}
  <div>
    <div className="text-7xl md:text-8xl font-medium text-white">
      5
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-sm mt-5">
      Consumer Segments
    </p>

    <p className="text-white/55 leading-7 mt-6 max-w-sm">
      The combined research was used to develop five consumer segments,
      with Tide Turners identified as the primary growth audience for
      the campaign strategy.
    </p>
  </div>

</div>

</section>

{/* =========================
    THE CHALLENGE
========================== */}
<section className="py-28 border-t border-white/10">

  {/* CHALLENGE COPY */}
  <div className="px-6 md:px-[7vw]">

    <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
      01 · The Challenge
    </p>

    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 mt-8">

      <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
        Standing out in a saturated market.
      </h2>

      <p className="text-white/60 leading-7 max-w-xl lg:self-end">
        ZeroCo had established a distinctive sustainability proposition,
        but operated within a mature and highly competitive cleaning market.
        The challenge was to strengthen brand awareness and communicate the
        value of its model to consumers who continued to weigh sustainability
        against price, performance and convenience.
      </p>

    </div>
  </div>

  {/* PDF PAGE GRID */}
  <div className="px-6 md:px-[7vw] mt-12">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

      {challengePages.map((page) => (
        <div key={page.src} className="group">

          <p className="text-white text-lg md:text-xl font-medium mb-2">
          {page.title}
          </p>

          <button
            type="button"
            onClick={() => setSelectedPage(page.src)}
            className="block w-full"
            aria-label={`Enlarge ${page.title}`}
          >
            <img
              src={page.src}
              alt={page.title}
              className="
                w-full
                h-auto
                object-contain
                block
                opacity-60
                transition-all
                duration-200
                ease-out
                hover:opacity-100
                hover:scale-[1.01]
              "
            />
          </button>

        <p className="text-white/50 text-sm leading-6 mt-5">
          {page.description}
        </p>

      </div>
    ))}

    </div>
  </div>

</section>

<section className="py-24 border-t border-white/10">
  <div className="px-6 md:px-[7vw] max-w-4xl">
    <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs mb-6">
      02 · Research & Insights
    </p>

    <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight">
      From market context to customer evidence.
    </h2>

    <p className="text-white/55 leading-8 mt-8 max-w-3xl">
      The project combined strategic analysis with primary customer research.
      PESTLE and SWOT analysis helped identify the market pressures and brand
      challenges, before 26 in-depth interviews and 141 survey responses were
      used to understand awareness, sustainability attitudes and purchasing
      behaviour.
    </p>
  </div>

  {/* RESEARCH PDF GRID */}
<div className="px-6 md:px-[7vw] mt-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

    {researchPages.map((page) => (
      <div key={page.src} className="group">

        <p className="text-white text-lg md:text-xl font-medium mb-2">
          {page.title}
        </p>

        <button
          type="button"
          onClick={() => setSelectedPage(page.src)}
          className="block w-full"
          aria-label={`Enlarge ${page.title}`}
        >
          <img
            src={page.src}
            alt={`ZeroCo ${page.title}`}
            className="
              w-full
              h-auto
              object-contain
              block
              opacity-60
              transition-all
              duration-200
              ease-out
              hover:opacity-100
              hover:scale-[1.01]
            "
          />
        </button>

        <p className="text-white/50 text-sm leading-6 mt-5">
          {page.description}
        </p>

      </div>
    ))}

  </div>
</div>
</section>

{/* =========================
    SEGMENTATION
========================== */}
<section className="py-28 border-t border-white/10">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
      03 · Audience Segmentation
    </p>

    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 mt-8">

      <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
        Identifying the audience most ready to move.
      </h2>

      <p className="text-white/60 leading-7 max-w-xl lg:self-end">
        Five audience segments were developed from the research findings.
        Tide Turners emerged as the primary target, representing the largest
        segment and showing strong openness to sustainable alternatives,
        despite relatively low awareness of ZeroCo.
      </p>

    </div>

  </div>

  {/* AUDIENCE PDF PAGE GRID */}
<div className="px-6 md:px-[7vw] mt-12">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">

    {audiencePages.map((page) => (
      <div key={page.src} className="group">

        <p className="text-white text-lg md:text-xl font-medium mb-4 min-h-[60px]">
  {page.title}
</p>

        <button
          type="button"
          onClick={() => setSelectedPage(page.src)}
          className="block w-full"
          aria-label={`Enlarge ${page.title}`}
        >
          <img
            src={page.src}
            alt={`ZeroCo ${page.title}`}
            className="
              w-full
              h-auto
              object-contain
              block
              opacity-60
              transition-all
              duration-200
              ease-out
              hover:opacity-100
              hover:scale-[1.01]
            "
          />
        </button>

<p className="text-white/50 text-sm leading-6 mt-5">
  {page.description}
</p>

</div>
))}

  </div>
</div>

</section>



        <div className="px-6 md:px-[7vw]">
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] mt-6">
          Five segments.
          <br />

          <span className="text-[#4F8CFF]">
            One priority audience.
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-16">

  {[
    {
      name: "Eco Champions",
      percentage: "2.3%",
      detail: "Highly values sustainability and actively seeks eco-friendly brands.",
    },
    {
      name: "Impact Investors",
      percentage: "20.3%",
      detail: "Willing to pay more for brands that create positive environmental impact.",
    },
    {
      name: "Savvy Shoppers",
      percentage: "10.9%",
      detail: "Value-driven and opportunity-focused, looking for quality and affordability.",
    },
    {
      name: "Set in Stoners",
      percentage: "7.0%",
      detail: "Habit-driven and less motivated by sustainability when making purchase decisions.",
    },
    {
      name: "Tide Turners",
      percentage: "59.4%",
      detail: "Open to change and increasingly considering sustainable alternatives.",
      primary: true,
    },
  ].map((segment) => {

    const isFlipped = flippedSegment === segment.name;

    return (
      <button
        key={segment.name}
        type="button"
        onClick={() =>
          setFlippedSegment(isFlipped ? null : segment.name)
        }
        className={`
          group
          min-h-[190px]
          border
          p-5
          text-left
          transition-all
          duration-300
          hover:border-[#4F8CFF]
          hover:bg-[#4F8CFF]/[0.06]
          hover:-translate-y-1
          ${
            segment.primary
              ? "border-[#4F8CFF]"
              : "border-white/10"
          }
        `}
      >
        {!isFlipped ? (
          <div className="h-full flex flex-col justify-end">

            {segment.primary && (
              <span className="text-[#4F8CFF] uppercase tracking-[0.15em] text-[10px] mb-auto">
                Primary Target
              </span>
            )}

            <span className="text-white/55 uppercase tracking-[0.15em] text-xs">
              {segment.name}
            </span>

            <span
              className={`text-sm mt-2 ${
                segment.primary
                  ? "text-[#4F8CFF]"
                  : "text-white/60"
              }`}
            >
              {segment.percentage}
            </span>

             <span className="text-white/30 group-hover:text-[#4F8CFF] uppercase tracking-[0.15em] text-[9px] mt-5 transition-colors duration-200">
            Flip ↻
            </span>

          </div>
        ) : (
          <div className="h-full flex flex-col justify-between">

            <span className="text-white/30 uppercase tracking-[0.15em] text-[9px]">
              Back ↻
            </span>

            <p className="text-white/65 text-sm leading-6 mt-6">
              {segment.detail}
            </p>

          </div>
        )}
      </button>
    );
   })}

</div>

</div>

    


      {/* =========================
          CAMPAIGN STRATEGY
      ========================== */}
      <section className="py-28 border-t border-white/10 bg-[#080A0D]">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
      04 · Campaign Strategy
    </p>

    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 mt-8">

      <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
        Turning insight into{" "}
        <span className="text-[#FF2F7D]">
          action.
        </span>
      </h2>

      <p className="text-white/60 leading-7 max-w-2xl lg:self-end">
        Research insights informed Turn the Tide Together — an integrated
        campaign designed to make ZeroCo&apos;s environmental impact more
        visible and actionable. The strategy combines high-impact outdoor
        media, retail activation, location-targeted social advertising and
        database marketing, connecting awareness with opportunities for
        engagement and conversion.
      </p>

     </div>

  </div>

 {/* CAMPAIGN IDENTITY */}
<div className="mt-24 border-t border-white/10 pt-16">

  <img
    src="/assets/zeroco/turn-tide-banner.png"
    alt="Turn the Tide Together campaign"
    className="w-full h-auto block"
  />

</div>

{/* OUT OF HOME */}
<div className="mt-24">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      01 · Out of Home
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Taking the campaign into public spaces.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      High-impact outdoor creative was designed to build awareness of
      ZeroCo&apos;s environmental mission and bring the Turn the Tide Together
      campaign into everyday public environments.
    </p>

  </div>

  {/* OOH CAROUSEL */}
  <div className="mt-12 overflow-x-auto ooh-scroll-hidden">

  <div className="ooh-marquee flex items-start gap-5 w-max pb-6">

    {[...oohPages, ...oohPages].map((image, index) => (

      <div
        key={`${image}-${index}`}
        className="
          w-[78vw]
          md:w-[42vw]
          lg:w-[30vw]
          shrink-0
          border border-white/10
          overflow-hidden
          transform-gpu
          will-change-transform
          transition-all
          duration-200
          ease-out
          opacity-60
          hover:opacity-100
          hover:scale-[1.02]
        "
      >
        <button
          type="button"
          onClick={() => setSelectedPage(image)}
          className="block w-full cursor-zoom-in"
          aria-label="Enlarge ZeroCo out-of-home campaign image"
        >
          <img
            src={image}
            alt="ZeroCo Turn the Tide Together out-of-home campaign"
            className="w-full h-auto block"
          />
        </button>
      </div>

    ))}

  </div>

</div>

</div>

</section>

{/* RETAIL ACTIVATION */}
<section className="py-28 bg-[#080A0D]">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      02 · Retail Activation
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Bringing the campaign closer to purchase.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      Retail activation was designed to bring Turn the Tide Together into
      high-traffic shopping environments, connecting ZeroCo&apos;s sustainability
      message with product discovery, education and opportunities for conversion.
    </p>
<div className="mt-12">

  <button
    type="button"
    onClick={() => setSelectedPage("/assets/zeroco/retail-activation.png")}
    className="block w-full"
    aria-label="Enlarge ZeroCo retail activation image"
  >
    <img
      src="/assets/zeroco/retail-activation.png"
      alt="ZeroCo Turn the Tide Together retail activation"
      className="
        w-full
        h-auto
        block
        opacity-60
        transition-all
        duration-200
        ease-out
        hover:opacity-100
        hover:scale-[1.01]
      "
    />
  </button>

</div>


  </div>

</section>

{/* LOCATION-TARGETED SOCIAL */}
<section className="py-28 bg-[#080A0D]">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      03 · Location-Targeted Social
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Extending the activation into nearby digital touchpoints.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      Location-targeted social content was designed to support retail
      activations by reaching nearby audiences with timely, locally relevant
      campaign messaging and clear calls to action.
    </p>

  </div>

</section>

{/* SOCIAL CAMPAIGN GALLERY */}
<div className="mt-6 overflow-x-auto ooh-scroll-hidden">

  <div className="social-marquee flex items-start gap-10 w-max pb-6">

    {[...socialPages, ...socialPages].map((image, index) => (

      <div
        key={`${image}-${index}`}
        className="
          w-[78vw]
          md:w-[42vw]
          lg:w-[30vw]
          shrink-0
          overflow-hidden
          transform-gpu
          will-change-transform
          transition-all
          duration-200
          ease-out
          opacity-60
          hover:opacity-100
          hover:scale-[1.02]
        "
      >
        <button
          type="button"
          onClick={() => setSelectedPage(image)}
          className="block w-full"
          aria-label="Enlarge ZeroCo social campaign image"
        >
          <img
            src={image}
            alt="ZeroCo location-targeted social campaign"
            className="w-full h-auto block"
          />
        </button>
      </div>

    ))}

  </div>

</div>

{/* COMMUNITY ACTIVATION */}
<section className="py-28 bg-[#080A0D]">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      04 · Community Activation
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Bringing the campaign into everyday spaces.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      Community activation extended Turn the Tide Together into local
      environments, using ZeroCo-branded bin stickers to connect everyday
      household actions with the wider impact of plastic waste on our oceans.
    </p>

  </div>

  <div className="px-6 md:px-[7vw] mt-12">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

    {communityPages.map((image) => (
      <button
        key={image}
        type="button"
        onClick={() => setSelectedPage(image)}
        className="
          block
          w-full
          opacity-60
          transition-all
          duration-200
          ease-out
          hover:opacity-100
          hover:scale-[1.02]
        "
        aria-label="Enlarge ZeroCo community activation image"
      >
        <img
          src={image}
          alt="ZeroCo community bin activation"
          className="w-full h-auto block"
        />
      </button>
    ))}

  </div>

</div>

</section>

{/* EDM / DATABASE */}
<section className="py-28 bg-[#080A0D]">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      05 · EDM / Database
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Extending the campaign through owned channels.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      EDM and database marketing were used as part of the campaign concept to
      reinforce key messages, support referral activity and continue engagement
      with existing and prospective ZeroCo customers.
    </p>

  </div>

  <div className="px-6 md:px-[7vw] mt-12">

  <button
    type="button"
    onClick={() => setSelectedPage("/assets/zeroco/edm.png")}
    className="block w-full"
    aria-label="Enlarge ZeroCo EDM campaign"
  >
    <img
  src="/assets/zeroco/edm.png"
  alt="ZeroCo EDM campaign concept"
  className="
    w-[75%]
    md:w-[65%]
    lg:w-[55%]
    mx-auto
    h-auto
    block
    opacity-60
    transition-all
    duration-200
    ease-out
    hover:opacity-100
    hover:scale-[1.01]
  "
/>
  </button>

</div>

</section>


{/* PLASTIC FREE JULY ACTIVATION */}
<section className="py-28 bg-[#080A0D]">
  <div className="px-6 md:px-[7vw]">
    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      06 · Plastic-Free July Activation
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Turning awareness into participation.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      The TideTurner Challenge connected ZeroCo with Plastic-Free July,
      creating a campaign activation designed to encourage participation,
      referrals and community involvement around reducing plastic waste.
    </p>
  </div>

  <div className="px-6 md:px-[7vw] mt-12">
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] gap-12 items-start">
      {plasticFreeJulyPages.map((image) => (
        <button
          key={image}
          type="button"
          onClick={() => setSelectedPage(image)}
          className="
            block
            w-full
            opacity-60
            transition-all
            duration-200
            ease-out
            hover:opacity-100
            hover:scale-[1.02]
          "
          aria-label="Enlarge Plastic-Free July campaign creative"
        >
          <img
            src={image}
            alt="ZeroCo Plastic-Free July campaign activation"
            className="w-full h-auto block"
          />
        </button>
      ))}
    </div>
  </div>

<div className="px-6 md:px-[7vw] mt-16 max-w-5xl">
  <p className="text-white/60 leading-7 max-w-3xl">
    Designed to increase brand awareness by pairing ZeroCo with like-minded
    initiatives such as Plastic Free July, the activation aimed to reach
    people already willing to engage with the brand mission and encourage
    word-of-mouth between Tide Turners, Impact Investors and Eco Champions.
  </p>

  <p className="text-white font-medium mt-10 mb-6">
    Four activation recommendations were proposed:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-8 max-w-6xl">

  <div>
    <p className="text-[#FF2F7D] text-xl font-medium mb-3">01</p>
    <p className="text-white/60 leading-7">
      Enter participants into a draw to win one of three 12-day,
      all-expenses-paid trips for two, combining PADI dive certification
      with ocean-cleaning initiatives in the Great Barrier Reef through
      conservation organisation GoEco.
    </p>
  </div>

  <div>
    <p className="text-[#FF2F7D] text-xl font-medium mb-3">02</p>
    <p className="text-white/60 leading-7">
      Encourage participants to refer a friend in exchange for additional
      incentives, promotions and discounts.
    </p>
  </div>

  <div>
    <p className="text-[#FF2F7D] text-xl font-medium mb-3">03</p>
    <p className="text-white/60 leading-7">
      Host a clean-up event during July to encourage participation and build
      social engagement around the ZeroCo brand.
    </p>
  </div>

  <div>
    <p className="text-[#FF2F7D] text-xl font-medium mb-3">04</p>
    <p className="text-white/60 leading-7">
      Become a paid Plastic Free July Program Partner to support clean-up
      efforts while gaining access to partner-network support and advertising.
    </p>
  </div>

</div>
</div>


</section>

{/* REFERRAL PROGRAM */}
<section className="py-28 bg-[#080A0D]">
  <div className="px-6 md:px-[7vw]">
    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      07 · Referral Program
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Turning advocacy into acquisition.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      A referral program was proposed to encourage existing customers and
      campaign participants to introduce friends to ZeroCo, using product
      incentives to support word-of-mouth and customer acquisition.
    </p>
  </div>

  <div className="px-6 md:px-[7vw] mt-12">
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] gap-12 items-start">
      {referralPages.map((image) => (
        <button
          key={image}
          type="button"
          onClick={() => setSelectedPage(image)}
          className="block w-full opacity-60 transition-all duration-200 ease-out hover:opacity-100 hover:scale-[1.02]"
          aria-label="Enlarge ZeroCo referral campaign creative"
        >
          <img
            src={image}
            alt="ZeroCo referral campaign creative"
            className="w-full h-auto block"
          />
        </button>
      ))}
    </div>
  </div>

</section>

{/* GOOGLE ADS & REMARKETING */}
<section className="py-28 bg-[#080A0D]">
  <div className="px-6 md:px-[7vw]">

    <p className="text-[#FF2F7D] uppercase tracking-[0.2em] text-xs">
      08 · Google Ads & Remarketing
    </p>

    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mt-4">
      Converting awareness into action.
    </h3>

    <p className="text-white/60 leading-7 max-w-2xl mt-6">
      Google Ads and remarketing were proposed to move newly exposed
      audiences further through the purchasing funnel. Paid digital activity
      would reinforce ZeroCo across consumers' preferred online channels,
      increasing brand visibility and creating additional opportunities
      for conversion.
    </p>

  </div>

  <div className="px-6 md:px-[7vw] mt-12">
    <button
      type="button"
      onClick={() =>
        setSelectedPage("/assets/zeroco/zeroco-webjet-ad.png")
      }
      className="
        block
        w-full
        opacity-60
        transition-all
        duration-200
        ease-out
        hover:opacity-100
        hover:scale-[1.01]
      "
      aria-label="Enlarge ZeroCo Google Ads and remarketing concept"
    >
      <img
        src="/assets/zeroco/zeroco-webjet-ad.png"
        alt="ZeroCo Google Ads and remarketing concept"
        className="w-full h-auto block"
      />
    </button>
  </div>
</section>


      {/* =========================
          MODELLED IMPACT
      ========================== */}
      <section className="py-28 bg-[#080A0D]">

  <div className="px-6 md:px-[7vw]">

    <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
      06 · Modelled Business Impact
    </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

  <div>
    <div className="text-5xl md:text-6xl font-bold">
      $875K
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-xs mt-4">
      Modelled Campaign Investment
    </p>
  </div>

  <div>
    <div className="text-5xl md:text-6xl font-bold">
      25,500
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-xs mt-4">
      Projected New Customers
    </p>
  </div>

  <div>
    <div className="text-5xl md:text-6xl font-bold">
      $4.7M
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-xs mt-4">
      Projected Additional Revenue
    </p>
  </div>

  <div>
    <div className="text-5xl md:text-6xl font-bold text-[#4F8CFF]">
      437%
    </div>

    <p className="text-white/40 uppercase tracking-[0.15em] text-xs mt-4">
      Projected ROMI
    </p>
  </div>

</div>

<div className="mt-20">

  <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
    How the model was built
  </p>

  <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] mt-4">
    From campaign investment to projected return.
  </h3>

  <p className="text-white/50 leading-7 max-w-2xl mt-6">
    The financial model combined channel-level campaign costs with customer
    acquisition and revenue assumptions to estimate the potential commercial
    return of the proposed strategy.
  </p>

</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12 items-start">

  {impactPages.map((page) => (
  <div key={page.src} className="group">

      <p className="text-white text-lg md:text-xl font-medium mb-4 min-h-[120px]">
      {page.title}
      </p>

      <button
        type="button"
        onClick={() => setSelectedPage(page.src)}
        className="w-full flex items-start justify-start"
        aria-label={`Enlarge ${page.title}`}
      >
            <img
  src={page.src}
  alt={page.title}
  className="
    w-full
    h-auto
    object-contain
    block
    opacity-60
    transition-all
    duration-200
    ease-out
    hover:opacity-100
    hover:scale-[1.01]
  "
/>
      </button>
      
      {page.description && (
  <p className="text-white/45 group-hover:text-white/80 text-sm leading-6 mt-5 transition-colors duration-200">
    {page.description}
  </p>
)}

    </div>
  ))}

</div>

<p className="text-white/30 text-xs max-w-xl leading-5 mt-16 pt-6 border-t border-white/10">
  Financial figures represent projected and modelled outcomes developed
  as part of an academic marketing strategy project. They are not
  actual ZeroCo business results.
</p>

  </div>

</section>

      {/* =========================
          WHAT IT DEMONSTRATES
      ========================== */}
      <section className="py-28 bg-[#080A0D]">

        <p className="text-[#4F8CFF] uppercase tracking-[0.2em] text-xs">
          What This Project Demonstrates
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">

          {[
            "Consumer Research",
            "Customer Segmentation",
            "Integrated Campaign Strategy",
            "Marketing Measurement",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-white/10 min-h-[160px] p-6 flex items-end"
            >
              <p className="text-lg">
                {skill}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* =========================
          NEXT PROJECT
      ========================== */}
      <section className="py-28 bg-[#080A0D]">

        <p className="text-white/40 uppercase tracking-[0.18em] text-xs">
          Next Case Study
        </p>

        <a
          href="/work/wgac"
          className="block text-4xl md:text-7xl font-bold tracking-[-0.05em] mt-6 hover:text-[#4F8CFF] transition-colors"
        >
          Who Gives A Crap <span className="block w-4 h-4 border-r-[3px] border-t-[3px] border-current rotate-45" />
        </a>

        <p className="text-[#4F8CFF] mt-4">
          Make Every Wipe Count
        </p>

       </section>

{selectedPage && (
  <div
    className="fixed inset-0 z-[100] bg-black/90 overflow-y-auto p-6 md:p-10 zoom-scroller"
    onClick={() => setSelectedPage(null)}
  >
    <button
      type="button"
      onClick={() => setSelectedPage(null)}
      className="fixed top-6 right-6 z-[110] text-white text-3xl hover:text-[#4F8CFF] transition-colors"
      aria-label="Close enlarged page"
    >
      ×
    </button>
    {selectedIndex > 0 && (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      setSelectedPage(activePages[selectedIndex - 1]);
    }}
    className="fixed left-6 top-1/2 -translate-y-1/2 z-[110] text-white text-4xl hover:text-[#4F8CFF] transition-colors"
    aria-label="Previous page"
  >
    <span className="block w-4 h-4 border-l-[3px] border-b-[3px] border-current rotate-45" />
  </button>
)}

{selectedIndex < activePages.length - 1 && (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      setSelectedPage(activePages[selectedIndex + 1]);
    }}
    className="fixed right-6 top-1/2 -translate-y-1/2 z-[110] text-white text-4xl hover:text-[#4F8CFF] transition-colors"
    aria-label="Next page"
  >
    <span className="block w-4 h-4 border-r-[3px] border-t-[3px] border-current rotate-45" />
  </button>
)}

    <div className="min-h-full flex justify-center items-center">
  <img
    key={selectedPage}
    src={selectedPage}
    alt="Enlarged ZeroCo presentation page"
    className={
      selectedPage === "/assets/zeroco/2referral.png"
        ? "max-h-[75vh] max-w-[75vw] w-auto h-auto object-contain"
        : selectedPage === "/assets/zeroco/1app-phone.png"
        ? "max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
        : selectedPage?.match(/\/[1-5]-(kid|bin|chadstone|food|adult)\.png$/)
        ? "max-h-[99vh] max-w-[98vw] w-auto h-auto object-contain"
        : "w-[95vw] md:w-[85vw] lg:w-[70vw] h-auto object-contain"
    }
    onClick={(e) => e.stopPropagation()}
  />
</div>
</div>
)}

<section>
  {/* KEY FINDINGS */}

  ...your existing findings...

  <div className="mt-12 flex flex-wrap gap-4">
    <a
      href="#"
      className="
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        rounded-full
        border
        border-white/20
        text-sm
        font-medium
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
      "
    >
      View R Analysis
      <span className="ml-2">→</span>
    </a>
  </div>
</section>
    </main>
  );
}