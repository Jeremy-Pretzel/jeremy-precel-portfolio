export function NetflixAnalytics() {
  const viewership = [
    { genre: "Documentary", value: 155.05 },
    { genre: "Sci-Fi", value: 153.12 },
    { genre: "Romance", value: 144.67 },
    { genre: "Comedy", value: 132.86 },
    { genre: "Action", value: 125.16 },
    { genre: "Thriller", value: 105.49 },
    { genre: "Drama", value: 85.99 },
  ];

  const ratings = [
    { genre: "Thriller", value: 7.66 },
    { genre: "Comedy", value: 7.31 },
    { genre: "Sci-Fi", value: 7.25 },
    { genre: "Drama", value: 7.25 },
    { genre: "Action", value: 7.12 },
    { genre: "Documentary", value: 6.95 },
    { genre: "Romance", value: 6.94 },
  ];

  return (
    <main className="bg-white text-[#11131A]">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#080A0D] text-white px-6 md:px-[7vw] pt-32 pb-24">

        {/* DECORATIVE BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(229,9,20,0.16),transparent_38%)]" />

          <div className="absolute right-[-5%] top-[-10%] w-[55%] h-[120%] opacity-40">
            <div className="absolute inset-0 rotate-[-8deg] grid grid-cols-3 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-gradient-to-br from-[#351014] via-[#14161C] to-[#080A0D] border border-white/5"
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-[#FF3045] text-sm tracking-[0.28em] uppercase font-semibold mb-4">
              Project 02
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-[78px] font-bold tracking-[-0.055em] leading-[0.95]">
              <span className="text-[#FF3045]">Netflix</span> Content
              <br />
              Performance Analysis
            </h1>

            <p className="mt-5 text-lg md:text-xl font-semibold text-white/90">
              R · Data Wrangling · Descriptive Analytics
            </p>

            <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 text-white/65">
              Analysis of a 100-title Netflix dataset to explore how viewership
              and audience ratings vary across content genres, while
              demonstrating data preparation, transformation and grouped
              analysis in R.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#analysis"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#FF3045] text-white font-semibold transition hover:scale-[1.03]"
              >
                View Analysis ↗
              </a>

              <a
                href="#dataset"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/30 bg-white/[0.04] text-white font-medium transition hover:bg-white/10"
              >
                Explore Dataset
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:flex min-h-[430px] items-center justify-center relative">
            <div className="absolute w-[320px] h-[320px] bg-[#E50914]/20 blur-[100px] rounded-full" />

            <div className="relative">
              <div className="text-[220px] leading-none font-black tracking-[-0.12em] text-[#E50914] drop-shadow-2xl">
                N
              </div>

              <p className="absolute -bottom-2 right-[-70px] text-3xl italic rotate-[-5deg] text-white/90">
                Stories move
                <br />
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 01 DATASET OVERVIEW */}
      {/* ========================================================= */}

      <section
        id="dataset"
        className="px-6 md:px-[7vw] py-16 bg-[#F8F9FC]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12">

          {/* LEFT */}
          <div>
            <SectionTitle
              number="01"
              title="Dataset Overview"
              subtitle="Understanding the Data"
            />

            <p className="mt-6 text-[#4B5160] leading-7 max-w-xl">
              The dataset contains information on 100 Netflix titles, with both
              categorical and numeric variables. Each row represents one movie
              or TV show, including details such as genre, production country,
              rating, duration and viewership.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <MetricCard icon="▣" value="100" title="Titles" sub="observations" />
              <MetricCard icon="●" value="9" title="Variables" sub="columns" />
              <MetricCard icon="▥" value="7" title="Genres" sub="unique categories" />
              <MetricCard icon="✓" value="0" title="Missing Values" sub="complete data" />
            </div>

            <div className="mt-3 rounded-xl border border-[#E4E7EC] bg-white p-6">
              <p className="font-bold mb-4">Key Variables</p>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#4B5160]">
                {[
                  "Title (name)",
                  "Production country",
                  "Type (Movie or TV Show)",
                  "Rating (audience score)",
                  "Release year",
                  "Duration (minutes)",
                  "Genre",
                  "Views (millions)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF3045]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02 DATA PREPARATION */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-[#FFF3F6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12">

          {/* LEFT */}
          <div>
            <SectionTitle
              number="02"
              title="Data Preparation"
              subtitle="Preparing the Dataset for Analysis"
            />

            <p className="mt-6 text-[#4B5160] leading-7 max-w-xl">
              The data was imported and inspected in R, with checks for missing
              values, variable types and category consistency. Categorical
              variables were converted to factors, column names were updated
              for clarity, and a genre lookup table was created and joined to
              the main dataset.
            </p>
          </div>

          {/* WORKFLOW */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-start">
            <WorkflowStep icon="↓" title="Import" text="Load dataset from CSV" />
            <WorkflowStep icon="⌕" title="Inspect" text="Check structure, dimensions and variable types" />
            <WorkflowStep icon="⚙" title="Clean" text="Validate data, check missing values and consistency" />
            <WorkflowStep icon="◆" title="Categorise" text="Convert categorical variables to factors" />
            <WorkflowStep icon="▦" title="Analyse" text="Create genre lookup table and join to dataset" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03 GENRE PERFORMANCE */}
      {/* ========================================================= */}

      <section
        id="analysis"
        className="px-6 md:px-[7vw] py-16 bg-[#FBFBFC]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.7fr_1.3fr] gap-12">

          {/* LEFT */}
          <div>
            <SectionTitle
              number="03"
              title="Genre Performance"
              subtitle="Average Viewership by Genre"
            />

            <p className="mt-6 text-[#4B5160] leading-7">
              Documentary recorded the highest average viewership at 155.05
              million views, closely followed by Sci-Fi at 153.12 million.
              Drama recorded the lowest average at 85.99 million,
              approximately 45% below Documentary. This indicates substantial
              differences in audience reach across genres within the dataset.
            </p>
          </div>

          {/* CHART */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Average Viewership by Genre
            </h3>

            <div className="space-y-3">
              {viewership.map((item) => (
                <div
                  key={item.genre}
                  className="grid grid-cols-[90px_1fr_70px] md:grid-cols-[120px_1fr_90px] gap-3 items-center"
                >
                  <span className="text-sm text-[#4B5160] text-right">
                    {item.genre}
                  </span>

                  <div className="h-5 bg-[#ECEEF2]">
                    <div
                      className="h-full bg-gradient-to-r from-[#C8193C] to-[#FF3045]"
                      style={{
                        width: `${(item.value / 165) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-sm font-semibold">
                    {item.value.toFixed(2)}M
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-[#7A808C] mt-5">
              Average Views (Millions)
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04 AUDIENCE RATINGS */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-[#FFF6F8]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.7fr_1.3fr] gap-12">

          {/* LEFT */}
          <div>
            <SectionTitle
              number="04"
              title="Audience Ratings"
              subtitle="Average Rating by Genre"
            />

            <p className="mt-6 text-[#4B5160] leading-7">
              Thriller achieved the highest average rating at 7.66 despite
              ranking sixth for average viewership. Conversely, Documentary
              generated the highest average viewership while recording an
              average rating of 6.95. This suggests that higher ratings do not
              necessarily translate to greater audience reach.
            </p>
          </div>

          {/* CHART */}
          <div>
            <h3 className="font-bold text-lg mb-8">
              Average Rating by Genre
            </h3>

            <div className="h-[260px] flex items-end gap-3 md:gap-6 border-l border-b border-[#C9CDD5] px-4 pt-6">
              {ratings.map((item) => (
                <div
                  key={item.genre}
                  className="flex-1 flex flex-col justify-end items-center h-full"
                >
                  <span className="text-xs md:text-sm font-bold mb-2">
                    {item.value.toFixed(2)}
                  </span>

                  <div
                    className="w-full max-w-[65px] rounded-t-md bg-gradient-to-t from-[#332852] to-[#5D4D87]"
                    style={{
                      height: `${(item.value / 10) * 100}%`,
                    }}
                  />

                  <span className="text-[10px] md:text-xs mt-3 text-[#4B5160] text-center">
                    {item.genre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 05 ADDITIONAL INSIGHTS */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.7fr_1.3fr] gap-12">

          {/* LEFT */}
          <div>
            <SectionTitle
              number="05"
              title="Additional Insights"
              subtitle="Variation in Viewership"
            />

            <p className="mt-6 text-[#4B5160] leading-7">
              Documentary had the lowest variation in viewership, with a
              standard deviation of 57.24 million, while Thriller showed the
              highest variation at 76.71 million, indicating more inconsistent
              performance across titles.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <InsightCard
              icon="♟"
              value="155.05M"
              title="Highest Avg. Views"
              sub="Documentary"
              tone="pink"
            />

            <InsightCard
              icon="▥"
              value="57.24M"
              title="Lowest Viewership Variation"
              sub="Documentary"
              tone="purple"
            />

            <InsightCard
              icon="★"
              value="7.66"
              title="Highest Avg. Rating"
              sub="Thriller"
              tone="pink"
            />

            <InsightCard
              icon="▥"
              value="85.99M"
              title="Lowest Avg. Views"
              sub="Drama"
              tone="purple"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 06 KEY FINDINGS */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-[#0D0D19] text-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-10">
            <div>
              <SectionTitle
                number="06"
                title="Key Findings"
                subtitle="What the Analysis Shows"
                dark
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <FindingCard
                icon="●"
                title="Audience Reach"
                text="Documentary and Sci-Fi generated the highest average viewership within the dataset."
              />

              <FindingCard
                icon="☆"
                title="Ratings vs Popularity"
                text="The highest-rated genre was not the most-viewed genre, suggesting ratings and reach capture different dimensions of content performance."
              />

              <FindingCard
                icon="▥"
                title="Content Consistency"
                text="Documentary combined the highest average viewership with the lowest variation, making it the most consistently viewed genre."
              />
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">JP</span>
              <span className="text-xs text-white/40">
                Data Analytics Portfolio
              </span>
            </div>

            <p className="text-xs text-white/35 max-w-xl md:text-right">
              Note: Findings relate to the 100-title dataset analysed and should
              not be interpreted as representative of Netflix's complete
              catalogue.
            </p>
            <a
  href="https://github.com/Jeremy-Pretzel/netflix-content-performance-analysis"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-full
    border
    border-white/20
    text-white
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
        </div>
      </section>
    </main>
  );
}


/* ============================================================= */
/* COMPONENTS */
/* ============================================================= */

function SectionTitle({
  number,
  title,
  subtitle,
  dark = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-[#FF3045] text-xl md:text-2xl font-bold">
          {number}
        </span>

        <span className="w-7 h-[2px] bg-[#FF3045]" />

        <h2
          className={`text-2xl md:text-3xl font-bold tracking-[-0.03em] ${
            dark ? "text-white" : "text-[#10131A]"
          }`}
        >
          {title}
        </h2>
      </div>

      <p
        className={`mt-2 ml-[62px] text-base font-medium ${
          dark ? "text-white/65" : "text-[#242936]"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}


function MetricCard({
  icon,
  value,
  title,
  sub,
}: {
  icon: string;
  value: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-[#E1E5EC] bg-gradient-to-br from-white to-[#EEF3FB] p-5 text-center shadow-sm">
      <div className="w-9 h-9 rounded-full bg-[#EFF2F8] mx-auto mb-3 flex items-center justify-center font-bold">
        {icon}
      </div>

      <p className="text-3xl md:text-4xl font-bold tracking-[-0.04em]">
        {value}
      </p>

      <p className="font-semibold mt-1">{title}</p>

      <p className="text-xs text-[#707684] mt-1">({sub})</p>
    </div>
  );
}


function WorkflowStep({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center relative">
      <div className="w-14 h-14 mx-auto rounded-full bg-[#FFD8E1] text-[#E6254D] flex items-center justify-center text-2xl font-bold">
        {icon}
      </div>

      <p className="font-bold mt-4">{title}</p>

      <p className="text-xs leading-5 text-[#676D79] mt-2">
        {text}
      </p>
    </div>
  );
}


function InsightCard({
  icon,
  value,
  title,
  sub,
  tone,
}: {
  icon: string;
  value: string;
  title: string;
  sub: string;
  tone: "pink" | "purple";
}) {
  const background =
    tone === "pink"
      ? "from-[#FFF0F3] to-[#FFDCE5]"
      : "from-[#F3F0FF] to-[#E4DDFB]";

  const text = tone === "pink" ? "text-[#C9183D]" : "text-[#55428E]";

  return (
    <div
      className={`rounded-xl bg-gradient-to-br ${background} p-6 text-center min-h-[180px] flex flex-col justify-center`}
    >
      <div className={`text-2xl ${text} mb-3`}>
        {icon}
      </div>

      <p className={`text-2xl md:text-3xl font-bold ${text}`}>
        {value}
      </p>

      <p className="text-sm font-semibold mt-3">{title}</p>

      <p className="text-xs text-[#6C7180] mt-1">{sub}</p>
    </div>
  );
}


function FindingCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#181827] p-6">
      <div className="flex gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-[#2A2843] flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold mb-2">{title}</h3>

          <p className="text-sm leading-6 text-white/55">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}