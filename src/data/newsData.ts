import { NewsArticle } from "@/components/NewsCard";
import appleNews from "@/assets/apple-news.jpg";
import oracleNews from "@/assets/oracle-news.jpg";
import teslaNews from "@/assets/tesla-news.jpg";

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Boeing's 787 Production Outlook Boosted by Strong Orders and Charleston Expansion",
    excerpt: "Forecast International has raised its production outlook for the Boeing 787 Dreamliner, pointing to strong order activity and Boeing's investment in added capacity at its Charleston, South Carolina facility as catalysts.",
    company: "Boeing",
    ticker: "BA",
    image: appleNews,
    author: "Sarah Chen",
    publishedAt: "2025-09-25T10:30:00Z",
    category: "Aerospace",
    trend: "up",
    readTime: "4 min read",
    fullArticle: `Forecast International has raised its production outlook for the Boeing 787 Dreamliner, pointing to strong order activity and Boeing's investment in added capacity at its Charleston, South Carolina facility as catalysts. As of 24th September 2025, Boeing has secured 807 gross orders for the 787 since 2020, nearly matching the 915 orders accumulated during the entire 2010–2019 period. Notably, over 250 of those orders have been placed in 2025 alone, highlighting a significant recovery in demand for the aircraft.

The production history of the Dreamliner has been uneven, with Boeing previously achieving a high of 13 aircraft per month in 2019. However, pandemic-related demand shocks and quality control issues forced a steep pullback in output. Initially, Boeing had targeted production levels of just four to five aircraft per month in early 2025, but the company has since stabilized production at around seven aircraft per month. This figure is ahead of the company's plan and in line with its stated goal to reach that level by year-end.

Looking ahead, Boeing aims to increase output to 10 aircraft per month by 2027, while also contemplating a potential long-term rate of 16 aircraft per month. This new target represents a substantial increase from the previously stated ceiling of 12 and reflects Boeing's growing optimism regarding the Dreamliner's long-term prospects. Although Forecast International has not yet projected a rate of 16 aircraft per month, it has raised its long-term outlook above 12 aircraft per month, acknowledging that such a rate could be viable given the current backlog and planned production increases.

The involvement of Grant, who has recently joined Forecast International as the Lead Analyst for Commercial Aerospace, could lend further insight into these developments. With a background at Boeing, Grant brings valuable experience in the aviation industry, having previously worked on aeronautical navigation charts and conducted market analysis for commercial aircraft and engines. His expertise may enhance Forecast International's ability to navigate the evolving landscape of the aerospace sector.

Forecast International's Aerospace Systems Market Intelligence Services provide comprehensive production forecasts for civil aircraft, including both fixed and rotary-wing types. These services offer in-depth program reviews, detailed statistics, and competitive market analysis, crucial for understanding market dynamics and unlocking growth potential. As Boeing continues to ramp up production of the 787 Dreamliner, stakeholders will be closely watching how these dynamics unfold in the coming years.`
  },
  {
    id: "2",
    title: "Oracle Expands Stargate Initiative with New AI Data Centers",
    excerpt: "Oracle Corporation has announced the establishment of five new AI data center sites, advancing its Stargate initiative in collaboration with OpenAI and SoftBank. This development comes shortly after Oracle's $300 billion deal with OpenAI.",
    company: "Oracle",
    ticker: "ORCL",
    image: oracleNews,
    author: "Michael Rodriguez",
    publishedAt: "2025-09-25T14:45:00Z",
    category: "Technology",
    trend: "up",
    readTime: "3 min read",
    fullArticle: `Oracle Corporation has announced the establishment of five new AI data center sites, advancing its Stargate initiative in collaboration with OpenAI and SoftBank. This development comes shortly after Oracle's $300 billion deal with OpenAI, which captured significant media attention, especially following its chairman briefly ascending to the title of the world's richest person. The new data centers will be located in Texas, New Mexico, Ohio, and the Midwest, and represent a critical step in fulfilling Oracle's commitment to meet the burgeoning demand for cloud computing capacity. Notably, this announcement was made on the 24th of September, 2025.

According to a press release from OpenAI, the additional capacity from these five sites, combined with the flagship site in Abilene, Texas, will bring the total planned capacity of the Stargate initiative to nearly 7 gigawatts. The total investment associated with Stargate is projected to exceed $400 billion over the next three years, positioning the companies on track to achieve a $500 billion commitment by the end of 2025, ahead of schedule. This expansion is anticipated to create over 25,000 jobs on-site, reflecting the initiative's significant impact on local economies.

The three data centers that fall under the $300 billion agreement between OpenAI and Oracle are to be constructed in Shackelford County, Texas; Doña Ana County, New Mexico; and an undisclosed location in the Midwest. The flagship site in Abilene is also being considered for an expansion of 600 megawatts, which, together with the new sites, can deliver an impressive 5.5 gigawatts of capacity. The remaining two sites will be located in Lordstown, Ohio, and Milam County, Texas, developed through a partnership between OpenAI and SoftBank, with an ability to scale up to 1.5 gigawatts of capacity.

On a financial note, Oracle is reportedly looking to raise $15 billion from the US corporate bond market, including a notably long 40-year offering. This initiative aligns with the capital requirements for the expansive Stargate project, underscoring the urgency of financing the promised capacity. As of 5 a.m. ET on Wednesday, Oracle's stock had increased by 0.4%, reflecting investor confidence in the company's strategic moves. Concurrently, Nvidia, which is deeply integrated within the AI supply chain, experienced a slight uptick of 0.7% in early trading, following a significant investment in OpenAI.

Analysts have noted that the current wave of investment in AI infrastructure is reminiscent of the early internet boom, with many experts viewing this moment as pivotal for the tech industry. Dan Ives from Wedbush Securities remarked that the AI revolution is accelerating, fueled by substantial capital expenditures from major players such as Oracle, OpenAI, Microsoft, and Nvidia. The latest developments in the Stargate initiative further validate the growing appetite for AI capabilities across sectors, indicating a robust future for Oracle and its partners in the evolving landscape of cloud computing.`
  },
  {
    id: "3",
    title: "Tesla Unveils New Patent for Cybercab Production Process",
    excerpt: "Tesla, Inc. has secured a patent that will reportedly be used in the production of the Elon Musk-led EV giant's upcoming Cybercab. The patent is part of the automaker's unboxed process, which involves assembling different components of the vehicle separately before final assembly.",
    company: "Tesla",
    ticker: "TSLA",
    image: teslaNews,
    author: "Jennifer Liu",
    publishedAt: "2025-09-25T09:15:00Z",
    category: "Automotive",
    trend: "up",
    readTime: "5 min read",
    fullArticle: `Tesla, Inc. has secured a patent that will reportedly be used in the production of the Elon Musk-led EV giant's upcoming Cybercab. As of 25th September 2025, the patent is part of the automaker's unboxed process, which involves assembling different components of the vehicle separately before final assembly. The process utilizes a robotic station to hold each car part, as noted by influencer Sawyer Merritt, who cited information from a post on X on Tuesday.

The patent describes an innovative method where parts are locked in place with vacuum clamps, followed by the application of glue either on the part or the car frame. Merritt highlighted that the robot aligns the components using reference points, marking a significant advancement in Tesla's manufacturing capabilities. This new method is expected to be integral to how the Cybercab will be built, reflecting the company's commitment to refining its production techniques.

This development aligns with Tesla's broader strategy to enhance its focus on robotics, particularly illustrated by the company's Master Plan IV. CEO Elon Musk has indicated that Tesla's Optimus line of humanoid robots could account for over 80% of the company's future value. Furthermore, Tesla has urged shareholders to vote in favor of a new compensation package for Musk, which he asserts will help him retain control over the company and drive the development of 'millions of robots.'

However, despite these advancements, Tesla's sales performance has faced challenges. The company's U.S. market share has dipped below 40% for the first time since October 2017, with sales in Europe also experiencing double-digit declines. Adding to the concerns, Tesla recently discontinued the most affordable variant of the Cybertruck, which was priced at $69,990, and is reportedly sitting on over 10,000 unsold units of the vehicle.

As Tesla continues to innovate and adapt to market conditions, the implications of this new patent could play a crucial role in the production of the Cybercab. Investors will be watching closely to see how these developments impact Tesla's operational efficiency and market presence in the competitive EV landscape.`
  }
];