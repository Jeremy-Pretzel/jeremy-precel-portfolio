export function EcommerceAnalytics() {
  return (
    <main className="min-h-screen bg-[#080A0D] text-white px-6 md:px-[7vw] pt-32 pb-24">
      
      {/* PAGE INTRO */}
      <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
        Marketing Analytics
      </p>

      <h1 className="text-4xl md:text-6xl font-medium leading-tight max-w-5xl">
        E-commerce Customer & Sales Analysis
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-white/60 leading-relaxed">
        Analysis of e-commerce transaction data to identify customer behaviour,
        sales patterns, product performance, return risk and opportunities for
        targeted marketing using RFM segmentation.
      </p>


      {/* GRAPH 1 */}
      <section className="mt-24">
        <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
          01 · Market Performance
        </p>

        <h2 className="text-3xl md:text-5xl font-medium">
          Top 10 Markets by Sales
        </h2>

        <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
          Total sales by country, showing the top 10 markets in the dataset.
        </p>

        <div className="mt-12">
          <div className="space-y-4">

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>United Kingdom</span>
                <span className="text-white/50">8,187,806</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Netherlands</span>
                <span className="text-white/50">284,662</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "3.48%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>EIRE</span>
                <span className="text-white/50">263,277</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "3.22%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Germany</span>
                <span className="text-white/50">221,698</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "2.71%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>France</span>
                <span className="text-white/50">197,404</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "2.41%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Australia</span>
                <span className="text-white/50">137,077</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "1.67%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Switzerland</span>
                <span className="text-white/50">56,385</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "0.69%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Spain</span>
                <span className="text-white/50">54,775</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "0.67%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Belgium</span>
                <span className="text-white/50">40,911</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "0.50%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Sweden</span>
                <span className="text-white/50">36,596</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F8CFF] rounded-full"
                  style={{ width: "0.45%" }}
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
            Key Insight
          </p>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            The United Kingdom was overwhelmingly the largest sales market,
            generating 8,187,806 in total sales. The Netherlands, EIRE, Germany,
            France and Australia represented the next-largest markets, but at
            substantially lower sales levels.
          </p>
        </div>
      </section>


      {/* GRAPH 2 */}
      <section className="mt-28">
        <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
          02 · Returns Analysis
        </p>

        <h2 className="text-3xl md:text-5xl font-medium">
          Returned Items by Country
        </h2>

        <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
          Raw return volume across international markets.
        </p>

        <div className="mt-12">
          <div className="space-y-4">

            {[
              ["United Kingdom", 7800, "100%"],
              ["Germany", 450, "5.77%"],
              ["EIRE", 300, "3.85%"],
              ["France", 150, "1.92%"],
              ["USA", 120, "1.54%"],
              ["Australia", 80, "1.03%"],
              ["Spain", 55, "0.71%"],
              ["Italy", 45, "0.58%"],
              ["Belgium", 40, "0.51%"],
              ["Japan", 35, "0.45%"],
              ["Switzerland", 30, "0.38%"],
            ].map(([country, value, width]) => (
              <div key={country}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{country}</span>
                  <span className="text-white/50">
                    {Number(value).toLocaleString()}
                  </span>
                </div>

                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4F8CFF] rounded-full"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
            Key Insight
          </p>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            The United Kingdom recorded the highest number of returned items,
            followed by Germany, EIRE and France. However, these markets also
            generated some of the highest transaction volumes, meaning raw
            return counts alone do not indicate unusually high return behaviour.
            Return rates relative to total sales provide a clearer comparison
            between markets.
          </p>
        </div>
      </section>

      <section className="mt-28">
        <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
          03 · Return Rate Analysis
        </p>

        <h2 className="text-3xl md:text-5xl font-medium">
          Returns as a Percentage of Sales
        </h2>

        <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
          Return rates relative to total sales reveal markets with
          disproportionately high return behaviour.
        </p>

        <div className="mt-12">
          <div className="space-y-4">

            {[
              ["USA", "38.5%", "100%"],
              ["Czech Republic", "16.7%", "43.4%"],
              ["Malta", "11.8%", "30.6%"],
              ["Japan", "10.4%", "27.0%"],
              ["Saudi Arabia", "10.0%", "26.0%"],
              ["Australia", "5.9%", "15.3%"],
              ["Italy", "5.6%", "14.5%"],
              ["Bahrain", "5.3%", "13.8%"],
              ["Germany", "4.8%", "12.5%"],
              ["EIRE", "3.7%", "9.6%"],
              ["United Kingdom", "1.5%", "3.9%"],
            ].map(([country, rate, width]) => (
              <div key={country}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{country}</span>
                  <span className="text-white/50">{rate}</span>
                </div>

                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4F8CFF] rounded-full"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
            Key Insight
          </p>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            The USA, Czech Republic, Malta and Japan showed comparatively
            high return rates despite lower transaction volumes. In contrast,
            the United Kingdom had a relatively low return rate despite
            generating the largest sales and return volumes. This highlights
            why return rate provides a clearer measure of return risk than
            raw return volume alone.
          </p>
        </div>
      </section>

      <section className="mt-28">
  <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
    04 · Product Performance
  </p>

  <h2 className="text-3xl md:text-5xl font-medium">
    Top-Selling Product Items
  </h2>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    Ranking sales by product description highlights the items contributing
    the greatest value to overall transaction revenue.
  </p>

  <div className="mt-12 space-y-5">
    {[
      ["DOTCOM POSTAGE", "206,245", "100%"],
      ["REGENCY CAKESTAND 3 TIER", "164,762", "79.9%"],
      ["PARTY BUNTING", "98,303", "47.7%"],
      ["WHITE HANGING HEART T-LIGHT HOLDER", "97,716", "47.4%"],
      ["JUMBO BAG RED RETROSPOT", "92,356", "44.8%"],
      ["RABBIT NIGHT LIGHT", "66,757", "32.4%"],
      ["POSTAGE", "66,231", "32.1%"],
      ["PAPER CHAIN KIT 50'S CHRISTMAS", "63,792", "30.9%"],
      ["ASSORTED COLOUR BIRD ORNAMENT", "58,960", "28.6%"],
      ["CHILLI LIGHTS", "53,768", "26.1%"],
    ].map(([product, sales, width], index) => (
      <div key={product}>
        <div className="flex justify-between gap-6 text-sm mb-2">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-white/30 w-5">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="truncate">
              {product}
            </span>
          </div>

          <span className="text-white/50 whitespace-nowrap">
            {sales}
          </span>
        </div>

        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4F8CFF] rounded-full"
            style={{ width }}
          />
        </div>
      </div>
    ))}
  </div>

  <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
      Key Insight
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      DOTCOM POSTAGE generated the highest recorded sales value at £206,245,
      indicating that shipping-related charges represent a substantial
      component of transaction revenue. Among merchandise, REGENCY CAKESTAND
      3 TIER was the strongest-performing product at £164,762, followed by
      PARTY BUNTING and WHITE HANGING HEART T-LIGHT HOLDER. The leading
      merchandise products are concentrated around gifting, homeware and
      decorative categories.
    </p>
  </div>
</section>

<section className="mt-28">
  <p className="text-sm uppercase tracking-[0.2em] text-[#FF4F7B] mb-4">
    05 · Category Return Risk
  </p>

  <h2 className="text-3xl md:text-5xl font-medium">
    Return Rate by Product Category
  </h2>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    Comparing returns relative to sales volume provides a clearer measure of
    category-level return risk. Miscellaneous and Other items were excluded
    to focus the analysis on defined product categories.
  </p>

  <div className="mt-12 space-y-5">
    {[
      ["Gift Wrap & Craft", 15.7],
      ["Drinkware & Ceramics", 12.8],
      ["Kitchen & Baking", 4.4],
      ["Lighting & Candle", 2.9],
      ["Clocks", 2.8],
      ["Glassware & Jars", 2.7],
      ["Seasonal", 2.4],
      ["Home Decor", 1.9],
      ["Party Supplies", 1.8],
      ["Stationery & Cards", 1.7],
      ["Toys & Children", 1.7],
      ["Bags & Totes", 1.7],
      ["Garden & Outdoor", 1.5],
      ["Fashion Accessories", 1.1],
      ["Home Essentials", 0.8],
      ["Health & Personal Care", 0.8],
    ].map(([category, rate]) => (
      <div key={category}>
        <div className="flex justify-between gap-6 text-sm mb-2">
          <span>{category}</span>

          <span className="text-white/50 whitespace-nowrap">
            {Number(rate).toFixed(1)}%
          </span>
        </div>

        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF4F7B] rounded-full"
            style={{ width: `${(Number(rate) / 15.7) * 100}%` }}
          />
        </div>
      </div>
    ))}
  </div>

  {/* Return Rate Scale */}
  <div className="relative mt-8 h-12 border-t border-white/30">
    <div className="absolute left-0 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute left-1/4 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute left-1/2 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute left-3/4 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute right-0 -top-[5px] h-2 w-px bg-white/40" />

    <span className="absolute left-0 top-3 text-xs text-white/40">
      0%
    </span>

    <span className="absolute left-1/4 top-3 -translate-x-1/2 text-xs text-white/40">
      4%
    </span>

    <span className="absolute left-1/2 top-3 -translate-x-1/2 text-xs text-white/40">
      8%
    </span>

    <span className="absolute left-3/4 top-3 -translate-x-1/2 text-xs text-white/40">
      12%
    </span>

    <span className="absolute right-0 top-3 text-xs text-white/40">
      16%
    </span>
  </div>

  <div className="mt-10 border-l-2 border-[#FF4F7B] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#FF4F7B] mb-3">
      Key Insight
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      Gift Wrap & Craft recorded the highest category return rate at 15.7%,
      followed by Drinkware & Ceramics at 12.8%. Both categories substantially
      exceeded the remainder of the product range, with the next-highest rate
      falling to 4.4% for Kitchen & Baking. This concentration suggests these
      categories should be prioritised for further investigation into product
      characteristics, customer expectations and fulfilment.
    </p>
  </div>
</section>

<section className="mt-28">
  <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
    06 · Customer Segmentation
  </p>

  <h2 className="text-3xl md:text-5xl font-medium">
    RFM Customer Analysis
  </h2>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    RFM segmentation groups customers according to Recency, Frequency and
    Monetary value, helping identify high-value customers, emerging loyalists
    and customers showing signs of disengagement.
  </p>

  {/* RFM explanation */}
  <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-5xl">
    {[
      [
        "Recency",
        "How recently a customer made a purchase.",
      ],
      [
        "Frequency",
        "How often a customer purchased from the business.",
      ],
      [
        "Monetary",
        "How much value a customer generated through purchases.",
      ],
    ].map(([title, description]) => (
      <div
        key={title}
        className="border border-white/10 rounded-xl p-5 bg-white/[0.02]"
      >
        <p className="text-sm uppercase tracking-[0.15em] text-[#4F8CFF]">
          {title}
        </p>

        <p className="mt-3 text-white/60 leading-relaxed">
          {description}
        </p>
      </div>
    ))}
  </div>

  {/* Segment chart */}
<div className="mt-14 space-y-5">
  {[
    ["Champions", 960],
    ["Potential Loyalists", 850],
    ["Needs Attention", 465],
    ["Loyal Customers", 465],
    ["Hibernating", 420],
    ["At Risk", 365],
    ["Recent Customers", 290],
    ["Can't Lose Them", 225],
    ["Lost Cheap Customers", 200],
    ["Big Spenders", 140],
  ].map(([segment, customers], index) => (
    <div key={segment}>
      <div className="flex justify-between gap-6 text-sm mb-2">
        <div className="flex items-center gap-3">
          <span className="text-white/30 w-7">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{segment}</span>
        </div>

        <span className="text-white/50 whitespace-nowrap">
          ≈{Number(customers).toLocaleString()} customers
        </span>
      </div>

      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4F8CFF] rounded-full"
          style={{ width: `${(Number(customers) / 1000) * 100}%` }}
        />
      </div>
    </div>
  ))}
</div>

{/* Customer count scale */}
<div className="relative mt-8 h-12 border-t border-white/30">
  <div className="absolute left-0 -top-[5px] h-2 w-px bg-white/40" />
  <div className="absolute left-1/4 -top-[5px] h-2 w-px bg-white/40" />
  <div className="absolute left-1/2 -top-[5px] h-2 w-px bg-white/40" />
  <div className="absolute left-3/4 -top-[5px] h-2 w-px bg-white/40" />
  <div className="absolute right-0 -top-[5px] h-2 w-px bg-white/40" />

  <span className="absolute left-0 top-3 text-xs text-white/40">
    0
  </span>

  <span className="absolute left-1/4 top-3 -translate-x-1/2 text-xs text-white/40">
    250
  </span>

  <span className="absolute left-1/2 top-3 -translate-x-1/2 text-xs text-white/40">
    500
  </span>

  <span className="absolute left-3/4 top-3 -translate-x-1/2 text-xs text-white/40">
    750
  </span>

  <span className="absolute right-0 top-3 text-xs text-white/40">
    1,000
  </span>
</div>

<p className="mt-2 text-sm text-white/35">
  Customer counts are approximate values reconstructed from the original RFM
  analysis chart.
</p>

  {/* Marketing implications */}
  <div className="mt-12 grid md:grid-cols-3 gap-5">
    <div className="border border-white/10 rounded-xl p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF]">
        Retain
      </p>

      <h3 className="mt-3 text-xl font-medium">
        Champions
      </h3>

      <p className="mt-3 text-white/60 leading-relaxed">
        Reward high-value customers through loyalty incentives, early access
        and personalised cross-sell opportunities.
      </p>
    </div>

    <div className="border border-white/10 rounded-xl p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF]">
        Grow
      </p>

      <h3 className="mt-3 text-xl font-medium">
        Potential Loyalists
      </h3>

      <p className="mt-3 text-white/60 leading-relaxed">
        Encourage repeat purchasing with tailored recommendations, lifecycle
        messaging and targeted incentives.
      </p>
    </div>

    <div className="border border-white/10 rounded-xl p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#FF4F7B]">
        Re-engage
      </p>

      <h3 className="mt-3 text-xl font-medium">
        At-Risk Customers
      </h3>

      <p className="mt-3 text-white/60 leading-relaxed">
        Use win-back campaigns and personalised offers to re-engage customers
        showing declining purchase activity.
      </p>
    </div>
  </div>

  {/* Key insight */}
  <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
      Key Insight
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      Champions represented the largest customer segment, followed by
      Potential Loyalists, indicating a strong base of valuable and developing
      customer relationships. However, sizeable Needs Attention, Hibernating
      and At Risk groups also indicate potential churn. RFM segmentation
      provides a practical framework for tailoring retention, loyalty and
      re-engagement campaigns to different stages of the customer lifecycle.
    </p>
  </div>
</section>

<section className="mt-28">
  <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
    07 · Customer Behaviour
  </p>

  <h2 className="text-3xl md:text-5xl font-medium">
    Customer Spending & Purchase Frequency
  </h2>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    Customer-level purchasing behaviour was analysed to understand typical
    spending, purchase frequency and the variation between lower-value and
    high-value customers.
  </p>

  {/* Summary metrics */}
  <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      {
        value: "1,898.46",
        label: "Average Customer Spend",
        description: "Mean total spending per customer",
      },
      {
        value: "5.08",
        label: "Average Visits",
        description: "Mean purchase visits per customer",
      },
      {
        value: "8,219.35",
        label: "Spending Variation",
        description: "Standard deviation in customer spending",
      },
      {
        value: "248",
        label: "Highest Visit Frequency",
        description: "Maximum recorded customer visits",
      },
    ].map((metric) => (
      <div
        key={metric.label}
        className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
      >
        <p className="text-2xl md:text-3xl font-medium text-white">
          {metric.value}
        </p>

        <p className="mt-3 text-sm font-medium text-[#4F8CFF]">
          {metric.label}
        </p>

        <p className="mt-2 text-sm text-white/40 leading-relaxed">
          {metric.description}
        </p>
      </div>
    ))}
  </div>

{/* Customer Spending Scatter Plot */}
<div className="mt-16">
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
        Purchase Behaviour
      </p>

      <h3 className="text-2xl md:text-3xl font-medium">
        Spending vs Purchase Frequency
      </h3>
    </div>

    <p className="text-sm text-white/40 max-w-md">
      Customers spending below 20,000 were isolated to provide a clearer view
      of purchasing behaviour across the main customer population.
    </p>
  </div>

  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
    <img
      src="/assets/customer-spending.png"
      alt="Scatter plot showing customer spending against number of visits"
      className="w-full h-auto"
    />
  </div>
</div>
  

  {/* Key insight */}
  <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
      Key Insight
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      Customers with higher purchase frequency generally generated greater
      total spending. However, the majority of customers were concentrated
      within lower-frequency and lower-spending ranges, while a smaller group
      of repeat customers generated substantially higher value. This creates
      an opportunity to use CRM and lifecycle marketing to encourage repeat
      purchasing and develop higher-value customer relationships.
    </p>
  </div>
</section>

<section className="mt-28">
  <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
    08 · Seasonal Performance
  </p>

  <h2 className="text-3xl md:text-5xl font-medium">
    Monthly Sales & Seasonality
  </h2>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    Monthly sales as a percentage of annual sales reveal a highly seasonal
    pattern, with demand increasing toward the end of the year and peaking
    sharply in November.
  </p>

  {/* Monthly sales chart */}
  <div className="mt-14">
    <div className="space-y-5">
      {[
        ["January", 2.4],
        ["February", 2.2],
        ["March", 3.0],
        ["April", 2.2],
        ["May", 3.2],
        ["June", 3.0],
        ["July", 3.0],
        ["August", 3.0],
        ["September", 4.5],
        ["October", 4.7],
        ["November", 63.8],
        ["December", 5.2],
      ].map(([month, percentage]) => (
        <div key={month}>
          <div className="flex justify-between gap-6 text-sm mb-2">
            <span>{month}</span>

            <span className="text-white/50 whitespace-nowrap">
              {Number(percentage).toFixed(1)}%
            </span>
          </div>

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${
                month === "November"
                  ? "bg-[#FF4F7B]"
                  : "bg-[#4F8CFF]"
              }`}
              style={{ width: `${(Number(percentage) / 63.8) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Percentage scale */}
  <div className="relative mt-8 h-12 border-t border-white/30">
    <div className="absolute left-0 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute left-1/4 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute left-1/2 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute left-3/4 -top-[5px] h-2 w-px bg-white/40" />
    <div className="absolute right-0 -top-[5px] h-2 w-px bg-white/40" />

    <span className="absolute left-0 top-3 text-xs text-white/40">
      0%
    </span>

    <span className="absolute left-1/4 top-3 -translate-x-1/2 text-xs text-white/40">
      16%
    </span>

    <span className="absolute left-1/2 top-3 -translate-x-1/2 text-xs text-white/40">
      32%
    </span>

    <span className="absolute left-3/4 top-3 -translate-x-1/2 text-xs text-white/40">
      48%
    </span>

    <span className="absolute right-0 top-3 text-xs text-white/40">
      64%
    </span>
  </div>

  {/* Seasonal summary cards */}
  <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      {
        value: "63.8%",
        label: "November Sales",
        description: "Largest share of annual sales",
      },
      {
        value: "5.2%",
        label: "December Sales",
        description: "Second-highest monthly share",
      },
      {
        value: "4.7%",
        label: "October Sales",
        description: "Beginning of the Q4 increase",
      },
      {
        value: "4.5%",
        label: "September Sales",
        description: "Sales begin strengthening before Q4",
      },
    ].map((metric) => (
      <div
        key={metric.label}
        className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
      >
        <p className="text-2xl md:text-3xl font-medium text-white">
          {metric.value}
        </p>

        <p className="mt-3 text-sm font-medium text-[#4F8CFF]">
          {metric.label}
        </p>

        <p className="mt-2 text-sm text-white/40 leading-relaxed">
          {metric.description}
        </p>
      </div>
    ))}
  </div>

  {/* Key insight */}
  <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
      Key Insight
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      November accounted for 63.8% of annual sales, making it the dominant
      sales month by a substantial margin. Sales also increased across
      September, October and December compared with earlier months, indicating
      a strong end-of-year seasonal pattern. This creates an opportunity to
      concentrate campaign activity, customer acquisition, inventory planning
      and retention efforts ahead of the peak sales period.
    </p>

    </div>

</section>

{/* Order Fulfilment & Cancellations */}
<div className="mt-24 pt-16 border-t border-white/10">
  <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
    Order Performance
  </p>

  <h3 className="text-2xl md:text-4xl font-medium">
    Fulfilled Orders & Cancellations
  </h3>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    Monthly order volumes provide additional context to the seasonal sales
    pattern, showing how both fulfilled and cancelled orders changed
    throughout the year.
  </p>

  {/* Fulfilled Orders */}
  <div className="mt-14">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
          Fulfilled Orders
        </p>

        <h4 className="text-xl md:text-2xl font-medium">
          Fulfilled Orders by Month
        </h4>
      </div>

      <p className="text-sm text-white/40 max-w-md">
        Fulfilled order volume increased substantially toward the end of the
        year, reaching its highest level in November.
      </p>
    </div>

    <div className="space-y-4">
      {[
        ["Jan", 1216],
        ["Feb", 1174],
        ["Mar", 1665],
        ["Apr", 1504],
        ["May", 1848],
        ["Jun", 1683],
        ["Jul", 1657],
        ["Aug", 1459],
        ["Sep", 1994],
        ["Oct", 2275],
        ["Nov", 3021],
        ["Dec", 2568],
      ].map(([month, orders]) => (
        <div key={month}>
          <div className="flex justify-between gap-6 text-sm mb-2">
            <span>{month}</span>

            <span className="text-white/50">
              {Number(orders).toLocaleString()}
            </span>
          </div>

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F8CFF] rounded-full"
              style={{ width: `${(Number(orders) / 3021) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Cancelled Orders */}
  <div className="mt-20">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#FF4F7B] mb-3">
          Cancelled Orders
        </p>

        <h4 className="text-xl md:text-2xl font-medium">
          Cancelled Orders by Month
        </h4>
      </div>

      <p className="text-sm text-white/40 max-w-md">
        Cancellation volumes also increased during the later months of the
        year, reaching their highest level in October.
      </p>
    </div>

    <div className="space-y-4">
      {[
        ["Jan", 701],
        ["Feb", 475],
        ["Mar", 699],
        ["Apr", 559],
        ["May", 621],
        ["Jun", 711],
        ["Jul", 685],
        ["Aug", 668],
        ["Sep", 805],
        ["Oct", 1200],
        ["Nov", 1076],
        ["Dec", 1088],
      ].map(([month, orders]) => (
        <div key={month}>
          <div className="flex justify-between gap-6 text-sm mb-2">
            <span>{month}</span>

            <span className="text-white/50">
              {Number(orders).toLocaleString()}
            </span>
          </div>

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF4F7B] rounded-full"
              style={{ width: `${(Number(orders) / 1200) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Summary Metrics */}
  <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
      <p className="text-2xl md:text-3xl font-medium">
        3,021
      </p>

      <p className="mt-3 text-sm text-[#4F8CFF]">
        November Fulfilled
      </p>

      <p className="mt-2 text-sm text-white/40">
        Highest fulfilled order volume
      </p>
    </div>

    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
      <p className="text-2xl md:text-3xl font-medium">
        2,568
      </p>

      <p className="mt-3 text-sm text-[#4F8CFF]">
        December Fulfilled
      </p>

      <p className="mt-2 text-sm text-white/40">
        Second-highest fulfilled volume
      </p>
    </div>

    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
      <p className="text-2xl md:text-3xl font-medium">
        1,200
      </p>

      <p className="mt-3 text-sm text-[#FF4F7B]">
        October Cancelled
      </p>

      <p className="mt-2 text-sm text-white/40">
        Highest cancellation volume
      </p>
    </div>

    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
      <p className="text-2xl md:text-3xl font-medium">
        1,088
      </p>

      <p className="mt-3 text-sm text-[#FF4F7B]">
        December Cancelled
      </p>

      <p className="mt-2 text-sm text-white/40">
        Cancellations remained elevated
      </p>
    </div>
  </div>

  {/* Key Insight */}
  <div className="mt-12 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
      Key Insight
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      Order activity increased substantially during Q4. Fulfilled orders rose
      from 1,459 in August to a peak of 3,021 in November, while cancellations
      increased from 668 in August to a peak of 1,200 in October. Although
      both measures increased during the peak sales period, their different
      monthly peaks suggest cancellation activity should be evaluated
      separately from overall order volume.
    </p>
  </div>
</div>
<section className="mt-28">
  <p className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
    09 · Marketing Recommendations
  </p>

  <h2 className="text-3xl md:text-5xl font-medium">
    Turning Customer Data Into Action
  </h2>

  <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
    The analysis identifies opportunities across customer retention,
    cancellation management, seasonal planning and return risk. These
    insights can be translated into targeted marketing and operational
    actions designed to improve customer value and business performance.
  </p>

  {/* Recommendation Cards */}
  <div className="mt-14 grid md:grid-cols-2 gap-5">

    {/* CRM & Retention */}
    <div className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF]">
          01 · Retain
        </p>

        <span className="text-sm text-white/30">
          RFM
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-medium">
        CRM & Customer Retention
      </h3>

      <p className="mt-4 text-white/55 leading-relaxed">
        Use RFM segments to create differentiated lifecycle campaigns.
        Champions and Loyal Customers can receive loyalty rewards and
        exclusive offers, while At Risk and Hibernating customers can be
        targeted with personalised re-engagement campaigns.
      </p>

      <div className="mt-6 pt-5 border-t border-white/10">
        <p className="text-sm text-white/40">
          Focus
        </p>

        <p className="mt-2 text-sm text-white/70">
          Repeat purchase · Retention · Customer value
        </p>
      </div>
    </div>

    {/* Cancellations */}
    <div className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#FF4F7B]">
          02 · Investigate
        </p>

        <span className="text-sm text-white/30">
          Orders
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-medium">
        Reduce Order Cancellations
      </h3>

      <p className="mt-4 text-white/55 leading-relaxed">
        Cancellation activity increased during the Q4 sales period and
        peaked in October. Further analysis should identify the underlying
        drivers before implementing changes to checkout, fulfilment or
        customer recovery activity.
      </p>

      <div className="mt-6 pt-5 border-t border-white/10">
        <p className="text-sm text-white/40">
          Focus
        </p>

        <p className="mt-2 text-sm text-white/70">
          Cancellation rate · Checkout · Fulfilment
        </p>
      </div>
    </div>

    {/* Seasonal Planning */}
    <div className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF]">
          03 · Prepare
        </p>

        <span className="text-sm text-white/30">
          Seasonality
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-medium">
        Plan for Peak Demand
      </h3>

      <p className="mt-4 text-white/55 leading-relaxed">
        Sales activity was heavily concentrated toward the end of the year,
        with November representing the largest monthly share. Campaign,
        inventory and customer acquisition planning should therefore begin
        ahead of the Q4 demand increase.
      </p>

      <div className="mt-6 pt-5 border-t border-white/10">
        <p className="text-sm text-white/40">
          Focus
        </p>

        <p className="mt-2 text-sm text-white/70">
          Forecasting · Campaign timing · Inventory
        </p>
      </div>
    </div>

    {/* Return Risk */}
    <div className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#FF4F7B]">
          04 · Optimise
        </p>

        <span className="text-sm text-white/30">
          Returns
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-medium">
        Prioritise Return Risk
      </h3>

      <p className="mt-4 text-white/55 leading-relaxed">
        Markets and product categories with disproportionately high return
        rates should be prioritised for investigation. Return rate should be
        evaluated alongside sales volume to distinguish genuine return risk
        from high return counts caused by greater transaction volume.
      </p>

      <div className="mt-6 pt-5 border-t border-white/10">
        <p className="text-sm text-white/40">
          Focus
        </p>

        <p className="mt-2 text-sm text-white/70">
          Return rate · Product performance · Market risk
        </p>
      </div>
    </div>
  </div>

  {/* Measurement Framework */}
  <div className="mt-20">
    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
      Measurement Framework
    </p>

    <h3 className="text-2xl md:text-3xl font-medium">
      Measuring Marketing Impact
    </h3>

    <p className="mt-4 max-w-3xl text-white/60 leading-relaxed">
      Performance should be measured against customer, sales and operational
      KPIs to determine whether the recommended actions generate measurable
      improvements over time.
    </p>

    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        ["Conversion Rate", "Acquisition"],
        ["Repeat Purchase Rate", "Retention"],
        ["Cancellation Rate", "Orders"],
        ["Return Rate", "Product Risk"],
        ["Average Order Value", "Revenue"],
        ["Customer Lifetime Value", "Customer Value"],
      ].map(([metric, category]) => (
        <div
          key={metric}
          className="border border-white/10 rounded-xl p-5 bg-white/[0.02]"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[#4F8CFF]">
            {category}
          </p>

          <p className="mt-3 text-base md:text-lg font-medium">
            {metric}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Final Takeaway */}
  <div className="mt-20 border-l-2 border-[#4F8CFF] pl-6 max-w-4xl">
    <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF] mb-3">
      Strategic Takeaway
    </p>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      The analysis demonstrates that customer value is not evenly distributed
      across the customer base, product portfolio or calendar year. Combining
      customer segmentation, purchase behaviour, return risk and seasonal
      performance provides a stronger foundation for targeted CRM, campaign
      planning and performance optimisation.
    </p>
  </div>
</section>


</main>

);
}









