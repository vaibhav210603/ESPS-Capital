export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  accent: string;
  content: string; // HTML string
};

export const blogs: BlogPost[] = [
  {
    slug: 'india-forex-reserves-all-time-high',
    category: 'ESPS Academy',
    title: "Wow Moment...India's Forex Reserves rose to USD 513.25B for the first time",
    date: 'July 11, 2020',
    accent: '#22c55e',
    excerpt:
      "As per the data released by Reserve Bank of India on 10th July 2020, India's Forex Reserves reaches an all-time high at USD 513.25B. International reserves are used to settle balance of payments deficits between countries.",
    content: `
      <p>As per the data released by Reserve Bank of India on 10th July 2020, India's Forex Reserves reaches an all-time high at <strong>USD 513.25 Billion</strong>. This is a landmark moment for the Indian economy and marks a significant milestone in India's financial stability.</p>

      <h2>What are Forex Reserves?</h2>
      <p>International reserves are used to settle balance of payments deficits between countries. Forex reserves are assets held by a central bank in foreign currencies, used to back liabilities and influence monetary policy. They typically include foreign banknotes, deposits, bonds, treasury bills, and other government securities.</p>

      <h2>Components of India's Forex Reserves</h2>
      <p>India's forex reserves comprise the following major components:</p>
      <ul>
        <li><strong>Foreign Currency Assets (FCA):</strong> The largest component, which rose by USD 2.81 billion to USD 474.66 billion.</li>
        <li><strong>Gold Reserves:</strong> Increased by USD 1.19 billion to USD 32.35 billion.</li>
        <li><strong>Special Drawing Rights (SDRs):</strong> Stood at USD 1.47 billion.</li>
        <li><strong>Reserve Position with IMF:</strong> Stood at USD 4.77 billion.</li>
      </ul>

      <h2>Why did Forex Reserves surge?</h2>
      <p>Several factors contributed to India's record-breaking forex reserves:</p>
      <ul>
        <li>Significant decline in crude oil imports due to COVID-19 lockdowns, reducing the import bill sharply.</li>
        <li>Robust Foreign Portfolio Investment (FPI) inflows as global liquidity remained high due to stimulus measures.</li>
        <li>Resilient remittances from the Indian diaspora abroad.</li>
        <li>RBI's consistent purchase of dollars in the forex market to prevent rupee appreciation.</li>
      </ul>

      <h2>Significance for India</h2>
      <p>Adequate forex reserves provide a cushion against external shocks and help in managing exchange rate volatility. With USD 513.25 billion in reserves, India now covers more than 12 months of projected imports — a comfortable buffer by international standards.</p>

      <p>High forex reserves also signal confidence to international investors and rating agencies, improving India's creditworthiness on the global stage. For businesses engaged in international trade and cross-border transactions, a strong forex reserve position means greater currency stability and predictability.</p>

      <h2>ESPS Capital's View</h2>
      <p>This milestone is a positive indicator for the Indian economy, especially amid the challenging global environment created by COVID-19. A strong forex war chest gives the RBI the ammunition to defend the rupee if global markets turn volatile, and provides the government with the confidence to pursue growth-oriented policies without worrying about a balance-of-payments crisis.</p>
    `,
  },
  {
    slug: 'gold-heading-towards-lifetime-high',
    category: 'Market Insights',
    title: 'Is GOLD Heading Towards Life Time High?',
    date: 'June 30, 2020',
    accent: '#f59e0b',
    excerpt:
      'Gold Prices are trading higher on Tuesday reaching $1802 levels. This rally in Gold prices is mainly attributed to rising cases of COVID-19 and cross-border tensions between India and China.',
    content: `
      <p>Gold Prices are trading higher on Tuesday reaching <strong>$1802 levels</strong>. This rally in gold prices is mainly attributed to rising cases of COVID-19 and cross-border tensions between India and China, which have pushed investors towards safe-haven assets.</p>

      <h2>What's Driving the Rally?</h2>
      <p>The surge in gold prices can be attributed to several interconnected factors:</p>
      <ul>
        <li><strong>COVID-19 second wave fears:</strong> A resurgence in coronavirus cases across the United States, Brazil, and India has renewed fears of extended lockdowns and economic damage.</li>
        <li><strong>US-China tensions:</strong> Escalating geopolitical tensions between the world's two largest economies continue to weigh on risk sentiment.</li>
        <li><strong>India-China border standoff:</strong> The ongoing standoff at the Galwan Valley has added a regional dimension to global uncertainty.</li>
        <li><strong>Ultra-loose monetary policy:</strong> Near-zero interest rates from the US Fed and massive quantitative easing have weakened the dollar and pushed investors to seek inflation hedges.</li>
        <li><strong>Massive fiscal stimulus:</strong> Global stimulus packages worth trillions of dollars are raising long-term inflation expectations, historically positive for gold.</li>
      </ul>

      <h2>Technical Analysis</h2>
      <p>From a technical standpoint, gold has decisively broken out above the $1800 psychological resistance level — a key zone that had capped upside for years. With momentum indicators bullish and the metal trading well above all major moving averages, the next target in focus is the all-time high near <strong>$1921</strong>, set in September 2011.</p>

      <p>A sustained close above $1800 opens the door to $1850 in the near term, followed by $1900. Key support now rests at $1780, and any dip towards this level could present a buying opportunity for investors.</p>

      <h2>What Should Investors Do?</h2>
      <p>Gold serves as an important portfolio diversifier and hedge against uncertainty. Investors looking for exposure can consider:</p>
      <ul>
        <li><strong>Sovereign Gold Bonds (SGBs):</strong> Issued by the Government of India, offering an additional 2.5% annual interest along with gold price appreciation.</li>
        <li><strong>Gold ETFs:</strong> Liquid, cost-efficient exposure to gold prices through the stock exchange.</li>
        <li><strong>Physical Gold:</strong> For those preferring tangible assets, though storage costs apply.</li>
      </ul>

      <h2>ESPS Capital's View</h2>
      <p>Given the current macroeconomic backdrop — unprecedented monetary stimulus, low real interest rates, and persistent geopolitical uncertainty — we believe gold remains in a structural bull market. A 5–10% allocation to gold in a diversified portfolio is advisable as a hedge against tail risks.</p>
    `,
  },
  {
    slug: 'mahindra-mahindra-quarterly-outlook',
    category: 'Stock Analysis',
    title: 'Mahindra & Mahindra Quarterly Outlook',
    date: 'June 23, 2020',
    accent: '#C8203E',
    excerpt:
      'Mahindra & Mahindra, from its recent fall till 245.40, has gained a whopping 109% upside and is trading at 514 today. This upward movement is mainly driven by the tractor segment.',
    content: `
      <p>Mahindra &amp; Mahindra (M&amp;M), from its recent fall till <strong>₹245.40</strong>, has gained a whopping <strong>109% upside</strong> and is trading at ₹514 today. This remarkable recovery is a testament to the resilience of M&amp;M's business model, particularly its tractor segment which has emerged as the key growth driver.</p>

      <h2>The Tractor Segment Story</h2>
      <p>While COVID-19 wreaked havoc on urban demand and the automobile sector broadly, the rural economy held firm — and M&amp;M was perfectly positioned to benefit. The company's tractor business has seen robust demand driven by:</p>
      <ul>
        <li><strong>Strong Rabi crop output:</strong> A bumper harvest season boosted farmer income and tractor demand.</li>
        <li><strong>Government support:</strong> Increased MSP (minimum support price) for crops and timely procurement lifted rural sentiment.</li>
        <li><strong>Reverse migration:</strong> Return of migrant workers to villages increased agricultural activity and labour availability.</li>
        <li><strong>Low base effect:</strong> After a sharp decline in FY20, volumes bounced back sharply in Q1FY21.</li>
      </ul>

      <h2>Business Restructuring</h2>
      <p>M&amp;M's management has been proactive in restructuring its portfolio. The company has exited or wound down several loss-making ventures and is sharpening its focus on core businesses — SUVs, tractors, and farm equipment. This capital discipline has been appreciated by the market.</p>

      <h2>Key Financial Highlights</h2>
      <ul>
        <li>The automotive segment, though impacted by COVID-19, is expected to recover as dealerships reopened and pent-up demand returned.</li>
        <li>Farm equipment segment revenue grew double digits year-on-year.</li>
        <li>Management guided for sustainable EBITDA margins of 14–15% for the core business.</li>
      </ul>

      <h2>Valuation &amp; Outlook</h2>
      <p>At the current price of ₹514, M&amp;M trades at approximately 15x FY22 estimated earnings — reasonable given the cyclical recovery underway. The stock has broken out of a multi-year consolidation range and the technical setup looks constructive for further upside towards ₹600–650 over the next 12 months.</p>

      <h2>ESPS Capital's View</h2>
      <p>M&amp;M remains a compelling story for investors with a 12–18 month horizon. The tractor business provides earnings visibility, the SUV pipeline (new Thar, XUV700) promises volume growth, and the ongoing portfolio restructuring should improve return ratios. We view any dips as buying opportunities.</p>
    `,
  },
  {
    slug: 'gold-slips-as-dollar-gains',
    category: 'Commodity Watch',
    title: 'Gold Slips as Dollar Gains',
    date: 'October 28, 2020',
    accent: '#f59e0b',
    excerpt:
      'Gold slips more than 1.50% and breaks a 4-week low on Wednesday due to increased uncertainty about rising COVID-19 cases in Europe and U.S. presidential elections. Concerns about renewed lockdowns weigh on sentiment.',
    content: `
      <p>Gold slips more than <strong>1.50%</strong> and breaks a 4-week low on Wednesday due to increased uncertainty arising from a sharp resurgence of COVID-19 cases across Europe and the approaching U.S. presidential election. Concerns about renewed lockdowns and the associated economic fallout are weighing heavily on investor sentiment.</p>

      <h2>What Triggered the Sell-Off?</h2>
      <p>The precious metal's decline was driven by a confluence of factors:</p>
      <ul>
        <li><strong>Stronger US Dollar:</strong> The US Dollar Index (DXY) gained sharply as investors sought safety in the world's reserve currency ahead of the November 3rd US presidential election. Gold and the dollar typically move inversely.</li>
        <li><strong>European lockdown fears:</strong> Germany, France, and other major European economies signalled the possibility of renewed lockdowns as COVID-19 cases surged to record levels. This triggered a risk-off move where investors unwound positions across commodities.</li>
        <li><strong>Stimulus uncertainty:</strong> Stalled negotiations over a fresh US fiscal stimulus package dampened hopes of near-term dollar weakness — a key driver of the gold rally earlier in the year.</li>
        <li><strong>Pre-election profit-taking:</strong> With gold up significantly from its March 2020 lows, many investors chose to lock in profits ahead of an uncertain election outcome.</li>
      </ul>

      <h2>Market Context</h2>
      <p>Gold had reached an all-time high of approximately $2,075 per ounce in August 2020. Since then, a period of consolidation set in. The metal remains structurally supported by:</p>
      <ul>
        <li>Near-zero global interest rates reducing the opportunity cost of holding non-yielding gold.</li>
        <li>Massive global debt levels and potential for long-term inflation.</li>
        <li>Central bank buying, particularly from emerging market central banks diversifying away from the US dollar.</li>
      </ul>

      <h2>Election Impact on Gold</h2>
      <p>Historically, US presidential elections create short-term volatility in gold. Irrespective of which party wins, the massive fiscal and monetary stimulus already in the system is likely to keep gold well-supported over the medium to long term. A Democratic win with a large stimulus package could push gold higher; a Republican win with gridlock might cause near-term weakness but would not fundamentally alter the bullish case.</p>

      <h2>Technical Picture</h2>
      <p>Gold is now testing support at $1,870–$1,880. A break below this zone could see prices test $1,850 and then $1,800. However, as long as the metal holds above $1,800, the long-term bull trend remains intact. Resistance stands at $1,940 and then the all-time high zone near $2,075.</p>

      <h2>ESPS Capital's View</h2>
      <p>The short-term pullback in gold is not surprising given the combination of a stronger dollar and pre-election jitters. We view this as a healthy consolidation within a broader bull market. Investors with a medium to long-term view can use dips towards $1,850–$1,900 as strategic accumulation opportunities. Our 12-month target on gold remains $2,200–$2,300 per ounce.</p>
    `,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find(b => b.slug === slug);
}
