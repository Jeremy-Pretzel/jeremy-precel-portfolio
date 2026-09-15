export function GeelongAnalytics() {
  const topIndustries = [
  {
    name: "Professional, Scientific & Technical Services",
    value: 721.18,
  },
  {
    name: "Construction Services",
    value: 593.95,
  },
  {
    name: "Wholesale Trade",
    value: 317.32,
  },
  {
    name: "Petroleum & Coal Product Manufacturing",
    value: 309.65,
  },
  {
    name: "Basic Non-Ferrous Metal Manufacturing",
    value: 308.69,
  },
];

  return (
    <main className="bg-[#F6F8FB] text-[#11182A]">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#07101A] text-white px-6 md:px-[7vw] pt-32 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(78,125,175,0.35),transparent_34%)]" />

          <div className="absolute right-0 top-0 w-[55%] h-full opacity-60">
            <div className="absolute inset-0 bg-gradient-to-l from-[#4D7091]/30 via-[#182838]/50 to-transparent" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#07101A] via-[#07101A]/95 to-[#07101A]/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-[#9FC3EA] text-sm tracking-[0.3em] uppercase font-semibold mb-5">
              Project 04
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-[78px] font-bold tracking-[-0.055em] leading-[0.95]">
              Greater Geelong
              <br />
              <span className="text-[#BFD7F1]">
                Economic & Industry Analysis
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl font-semibold text-white/90">
              R · Data Wrangling · Economic Analysis
            </p>

            <p className="mt-6 max-w-2xl text-base md:text-lg leading-7 text-white/65">
              Analysis of three public City of Greater Geelong datasets
              covering local sales, employment and economic value added across
              114 industry sectors. The project focused on transforming messy
              raw data into a usable analytical dataset and exploring
              relationships between industry activity, employment and economic
              contribution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#analysis"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#BFD7F1] text-[#07101A] font-semibold transition hover:scale-[1.03]"
              >
                View Analysis ↓
              </a>

              <a
                href="#dataset"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/30 bg-white/[0.04] text-white font-medium transition hover:bg-white/10"
              >
                Explore Dataset
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex min-h-[430px] items-center justify-center relative">
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#6E9BC8]/20 blur-[110px]" />

            <div className="relative w-full max-w-[460px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                Greater Geelong
              </p>

              <p className="mt-5 text-5xl font-semibold tracking-[-0.04em] leading-tight">
                People.
                <br />
                Industry.
                <br />
                Opportunity.
              </p>

              <div className="mt-8 h-px w-full bg-white/10" />

              <div className="mt-6 grid grid-cols-3 gap-4">
                <HeroMetric value="3" label="Datasets" />
                <HeroMetric value="114" label="Industries" />
                <HeroMetric value="342" label="Rows" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 01 DATASET OVERVIEW */}
      {/* ========================================================= */}

      <section
        id="dataset"
        className="px-6 md:px-[7vw] py-16 bg-[#F9FAFC]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12">

          <div>
            <SectionTitle
              number="01"
              title="Dataset Overview"
              subtitle="Three Datasets. A Broader Perspective."
            />

            <p className="mt-6 text-[#556070] leading-7 max-w-xl">
              The project combined three public datasets covering local sales,
              employment and economic value added across Greater Geelong, the
              G21 region and Victoria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              value="3"
              title="Datasets"
              sub="Sales, employment, value added"
            />

            <MetricCard
              value="114"
              title="Industry Sectors"
              sub="Across each region"
            />

            <MetricCard
              value="3"
              title="Regions"
              sub="Geelong, G21, Victoria"
            />

            <MetricCard
              value="2015"
              title="Reporting Period"
              sub="Historical public data"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02 + 03 */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* CLEANING */}
          <div>
            <SectionTitle
              number="02"
              title="Data Cleaning & Transformation"
              subtitle="From Raw Data to Analysis Ready"
            />

            <p className="mt-6 text-[#556070] leading-7">
              The raw CSV files contained multiple heading rows, special
              characters, inconsistent formatting and numeric values stored as
              character data. The data was cleaned, standardised and reshaped
              into a consistent analytical structure.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Removed non-data header rows",
                "Converted formatted text values to numeric",
                "Removed $, % symbols and commas",
                "Reshaped data with pivot_longer() and pivot_wider()",
                "Standardised industry and region names",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#DDEBFA] text-[#2F6696] flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>

                  <p className="text-sm text-[#556070]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* INTEGRATION */}
          <div>
            <SectionTitle
              number="03"
              title="Dataset Integration"
              subtitle="Combining the Bigger Picture"
            />

            <p className="mt-6 text-[#556070] leading-7">
              The three datasets were joined using industry sector and region,
              creating one analytical dataset that aligned each industry with
              its sales, employment and economic value measures.
            </p>

            <div className="mt-8">
              <div className="grid md:grid-cols-3 gap-3">
                <SourceCard
                  title="Local Sales"
                  text="114 industries"
                />
                <SourceCard
                  title="Employment"
                  text="114 industries"
                />
                <SourceCard
                  title="Economic Value Added"
                  text="114 industries"
                />
              </div>

              <div className="flex justify-center my-4 text-[#7D8997] text-2xl">
                ↓
              </div>

              <div className="rounded-xl bg-[#203F5D] text-white p-6 text-center max-w-md mx-auto">
                <p className="text-sm text-white/55 uppercase tracking-[0.18em]">
                  Merged Dataset
                </p>

                <p className="text-3xl font-bold mt-2">
                  342 Rows
                </p>

                <p className="text-sm text-white/65 mt-2">
                  Matched by industry_sector + region
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04 VALIDATION + 05 INDUSTRY PERFORMANCE */}
      {/* ========================================================= */}

      <section
        id="analysis"
        className="px-6 md:px-[7vw] py-16 bg-[#F7F9FC]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* VALIDATION */}
          <div>
            <SectionTitle
              number="04"
              title="Data Validation"
              subtitle="A Clean, Reliable Dataset"
            />

            <p className="mt-6 text-[#556070] leading-7">
              After cleaning and merging, the final dataset was validated for
              missing values, duplicate industry-region combinations and
              consistency across each region.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <SmallMetric value="342" label="Total rows" />
              <SmallMetric value="0" label="Missing values" />
              <SmallMetric value="0" label="Duplicate rows" />
              <SmallMetric value="114" label="Industries / region" />
            </div>
          </div>

          {/* PERFORMANCE */}
          <div>
            <SectionTitle
              number="05"
              title="Industry Performance"
              subtitle="Top Industries by Local Sales"
            />

            <div className="mt-8 space-y-4">
              {topIndustries.map((industry) => (
                <div
                  key={industry.name}
                  className="grid grid-cols-[1.2fr_1fr_90px] gap-3 items-center"
                >
                  <span className="text-sm text-[#556070]">
                    {industry.name}
                  </span>

                  <div className="h-5 bg-[#E6EBF1] rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#496F96] to-[#7FA0C0]"
                      style={{
  width: `${(industry.value / 721.18) * 100}%`,
}}
                    />
                  </div>

                  <span className="text-sm font-semibold text-right">
                    ${industry.value.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}M
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 06 RELATIONSHIP ANALYSIS — ACTUAL R GRAPHS */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-white">
        <div className="max-w-7xl mx-auto">

          <SectionTitle
            number="06"
            title="Relationship Analysis"
            subtitle="Employment, Local Sales & Economic Value"
          />

          <div className="mt-6 max-w-3xl">
            <p className="text-[#556070] leading-7">
              Cube-root transformations were applied to reduce the visual
              influence of extreme values while retaining the underlying
              observations.
            </p>

            <p className="mt-4 text-[#556070] leading-7">
              The transformed scatterplots indicated positive associations
              between employment, local sales and economic value added.
            </p>
          </div>

          {/* ACTUAL R GRAPHS */}
          <div className="grid lg:grid-cols-2 gap-6 mt-10">

            {/* LOCAL SALES */}
            <div className="rounded-2xl border border-[#E1E6ED] bg-[#FAFBFD] p-5">
              <div className="overflow-hidden rounded-xl bg-white">
                <img
                  src="/assets/jobs-by-local-sales.png"
                  alt="Jobs by Local Sales scatterplot"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* ECONOMIC VALUE ADDED */}
            <div className="rounded-2xl border border-[#E1E6ED] bg-[#FAFBFD] p-5">
              <div className="overflow-hidden rounded-xl bg-white">
                <img
                  src="/assets/jobs-added-by-economic.png"
                  alt="Jobs by Economic Value Added scatterplot"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>

          <div className="mt-8 rounded-xl bg-[#EDF3F8] border border-[#DCE5ED] p-6">
            <p className="text-sm md:text-base leading-7 text-[#566575] max-w-4xl">
              Both transformed plots indicate a positive association between
              employment and economic activity. The relationship between
              employment and economic value added appears stronger than the
              relationship between employment and local sales. These results
              demonstrate association rather than causation.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 07 + 08 */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12">

          {/* FINDINGS */}
          <div>
            <SectionTitle
              number="07"
              title="Key Findings"
              subtitle="What the Data Shows"
            />

            <div className="mt-8 space-y-4">
              <Finding
                number="1"
                text="Industries with higher local sales and economic value generally had higher employment."
              />

              <Finding
                number="2"
                text="The relationship between employment and economic value appeared stronger than the relationship between employment and local sales."
              />

              <Finding
                number="3"
                text="Several industries appeared as statistical outliers, but these reflected genuine high-performing industries rather than obvious data errors."
              />

              <Finding
                number="4"
                text="The results demonstrate association rather than causation, and Victoria's substantially larger economy affects the overall comparison."
              />
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <SectionTitle
              number="08"
              title="Tools & Techniques"
              subtitle="Technical Workflow"
            />

            <div className="mt-8 grid gap-3">
              {[
                "R",
                "Data cleaning and transformation",
                "pivot_longer() / pivot_wider()",
                "Dataset joins",
                "Data validation",
                "Outlier investigation",
                "Cube-root transformation",
                "Descriptive and comparative analysis",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#DDE3EA] bg-white px-5 py-4 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER CTA */}
      {/* ========================================================= */}

      <section className="px-6 md:px-[7vw] py-12 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#102232] text-white px-7 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>
            <p className="text-xl font-bold">
              Real Data. Real Insights.
            </p>

            <p className="text-sm text-white/55 mt-2 max-w-2xl">
              A practical example of transforming messy public datasets into
              structured information for economic and industry analysis.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#BFD7F1] text-[#0E1E2D] font-semibold transition hover:scale-[1.03]"
          >
            View Full Analysis
            <span className="ml-2">→</span>
          </a>
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
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-[#315D87] text-lg md:text-xl font-bold">
          {number}
        </span>

        <span className="w-8 h-[2px] bg-[#315D87]" />

        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#506070]">
          {title}
        </p>
      </div>

      <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-[-0.035em]">
        {subtitle}
      </h2>
    </div>
  );
}


function MetricCard({
  value,
  title,
  sub,
}: {
  value: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-[#E2E7EE] bg-gradient-to-br from-white to-[#EDF3F9] p-6 text-center shadow-sm">
      <p className="text-3xl md:text-4xl font-bold">
        {value}
      </p>

      <p className="font-semibold mt-2">
        {title}
      </p>

      <p className="text-xs text-[#6B7684] mt-2 leading-5">
        {sub}
      </p>
    </div>
  );
}


function SmallMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-[#E0E6ED] bg-white p-5 text-center">
      <p className="text-3xl font-bold">
        {value}
      </p>

      <p className="text-xs text-[#6B7684] mt-2">
        {label}
      </p>
    </div>
  );
}


function SourceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#DCE3EB] bg-white px-5 py-5 text-center">
      <p className="font-bold text-sm">
        {title}
      </p>

      <p className="text-xs text-[#7A8490] mt-2">
        {text}
      </p>
    </div>
  );
}


function HeroMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-3xl font-bold">
        {value}
      </p>

      <p className="text-xs text-white/45 mt-1">
        {label}
      </p>
    </div>
  );
}


function Finding({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-9 h-9 rounded-full bg-[#DCEAF7] text-[#2C5B87] flex items-center justify-center font-bold">
        {number}
      </div>

      <p className="text-[#4F5A69] leading-7">
        {text}
      </p>
    </div>
  );
}