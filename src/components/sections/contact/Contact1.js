"use client";

import { useState } from "react";

const Contact1 = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact">
      <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
        <div className="container">
          <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center gap-x-6 gap-y-10 overflow-hidden">
            {/* <!-- section heading --> */}
            <div className="md:col-start-1 md:col-span-7 lg:col-span-6">
              <div className=" wow fadeInLeft" data-wow-delay=".3s">
                <form
                  onSubmit={onSubmit}
                  className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px"
                >
                  <div className="mb-25px text-center">
                    <h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                      Let&apos;s work together!
                    </h2>
                    <p
                      className="text-primary-color-light dark:text-body-color wow fadeInLeft"
                      data-wow-delay=".4s"
                    >
                      Let&apos;s work together to craft something amazing for
                      your business.
                    </p>
                  </div>
                  {/* <!-- inputs --> */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-15px wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {/* <!-- first name --> */}
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        required
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Last name --> */}
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        required
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Email address --> */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Phone number --> */}
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Subject --> */}
                    <div className="sm:col-start-1 sm:col-span-2">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    <div className="sm:col-start-1 sm:col-span-2">
                      <textarea
                        name="message"
                        cols="1"
                        rows="10"
                        placeholder="Message"
                        required
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    <div className="sm:col-start-1 sm:col-span-2">
                      <button
                        type="submit"
                        className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                    {result && (
                      <div className="sm:col-start-1 sm:col-span-2 text-center">
                        <p className="text-primary-color-light dark:text-white-color">
                          {result}
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- experience single area --> */}
            <div className="md:col-start-8 md:col-span-5">
              <div className="contact-info-list">
                <ul className="flex flex-col gap-y-10">
                  <li
                    className="flex  items-center gap-25px position-relative wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-phone-call leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+12134540127"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        +1 (213) 454-0127
                      </a>
                    </div>
                  </li>
                  <li
                    className="flex  items-center gap-25px position-relative wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-mail-inbox-app leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:shin@shins.io"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        shin@shins.io
                      </a>
                    </div>
                  </li>
                  <li
                    className="flex  items-center gap-25px position-relative wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-location leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Address
                      </p>
                      <a
                        href="#"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        334/344 Anawrahta Road, <br />
                        Yangon 11131, Myanmar (Burma)
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
