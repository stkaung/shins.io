import ButtonSeondary from "@/components/shared/buttons/ButtonSeondary";
import FunFact from "@/components/shared/fun-fact/FunFact";
import Socials from "@/components/shared/socials/Socials";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section relative pt-130px lg:pt-40 xl:pt-200px pb-10 md:pb-30px lg:pb-50px after:absolute after:top-0 after:right-0 after:w-322px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:-mr-5% overflow-hidden">
      {/* <!-- intro text --> */}
      <div className="intro_text">
        <svg viewBox="0 0 1320 300" className="overflow-hidden">
          <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
            HI
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="hidded md:grid md:grid-cols-2 md:items-center gap-30px">
          <div>
            <h4 className="text-seondary-color dark:text-body-color text-size-22 md:text-size-25 lg:text-4xl lg:leading-1.5 font-bold mb-1.5 xl:mb-10px">
              Shin Development
            </h4>
            <h1 className="text-size-30 md:text-size-35 lg:text-size-45 xl:text-5xl 2xl:text-size-60 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
              Websites That Scale <br />
              Your Business.
            </h1>

            <div className="flex md:hidden justify-center items-center my-30px">
              <Image
                src="/img/hero/me.png"
                width={437}
                height={475}
                alt="banner image"
                className="rounded-38px border-2 border-seondary-color hover:border-primary-color rotate-[4.29deg] hover:rotate-0 transition-all duration-300 max-w-[80%]"
              />
            </div>
            <p className="text-xl leading-1.5 text-primary-color-light dark:text-body-color max-w-540px">
              At Shin Development, we help businesses unlock growth by building
              stunning, high-converting websites that boost online presence and
              bring in consistent leads. Whether you&apos;re a local business or
              scaling nationwide, we turn clicks into clients.
            </p>
            {/* <!-- action and social --> */}
            <div className="flex items-center gap-30px lg:gap-25px mt-5 flex-wrap lg:flex-nowrap md:mt-30px lg:mt-50px">
              <div>
                <ButtonSeondary url="#contact">
                  Work with us{" "}
                  <i className="fa-solid fa-envelope ml-0.5 text-size-17"></i>
                </ButtonSeondary>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:justify-center md:items-center relative after:absolute after:bottom-0 after:left-0 after:w-220px after:h-220px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:-mr-5%">
            <Image
              src="/img/hero/me.png"
              width={437}
              height={475}
              alt="banner image"
              className="rounded-38px border-2 border-seondary-color hover:border-primary-color rotate-[4.29deg] hover:rotate-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      {/* <!-- fanfact --> */}
      <FunFact />
    </section>
  );
};

export default Hero;
