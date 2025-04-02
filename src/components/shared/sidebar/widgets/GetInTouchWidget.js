"use client";

import { useState } from "react";

const GetInTouchWidget = () => {
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
    <div
      className="px-15px md:px-25px py-30px bg-cream-light-color dark:bg-primary-color-light rounded-lg wow fadeInUp"
      data-wow-delay=".3s"
    >
      <form onSubmit={onSubmit}>
        <h3 className="mb-25px text-primary-color dark:text-white-color uppercase relative z-0 text-size-lg md:text-xl font-bold">
          Get in Touch
        </h3>
        <div className="flex flex-col gap-10px">
          {/* <!-- name --> */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
            />
          </div>
          {/* <!-- email --> */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
            />
          </div>
          {/* <!-- subject --> */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
            />
          </div>
          <div>
            <textarea
              name="message"
              cols="1"
              rows="10"
              placeholder="Your Message"
              required
              className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
            />
          </div>
          <div className="sm:col-start-1 sm:col-span-2">
            <button
              type="submit"
              className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300 w-full text-center"
            >
              Send Message
            </button>
          </div>
          {result && (
            <div className="text-center">
              <p className="text-primary-color-light dark:text-white-color">
                {result}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default GetInTouchWidget;
