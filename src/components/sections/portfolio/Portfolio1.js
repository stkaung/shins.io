"use client";
import PortfolioCard from "@/components/shared/cards/PortfolioCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import getPortfolio from "@/libs/getPortfolio";

const Portfolio1 = () => {
  const portfolio = getPortfolio();
  return (
    <section id="portfolio">
      <div className="pt-60px pb-30px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20 overflow-hidden">
        <div className="container">
          {/* <!-- section heading --> */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>Our Recent Projects</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              Check out the two latest websites we&apos;ve worked on for our
              game development agency clients.
            </p>
          </div>
          {/* <!-- portfolio --> */}
          <div className="portfolio-grid">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 wow fadeInUp"
              data-wow-delay=".6s"
            >
              {portfolio?.length
                ? portfolio?.map((portfolioSingle, idx) => (
                    <PortfolioCard key={idx} portfolio={portfolioSingle} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio1;
