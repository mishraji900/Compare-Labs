"use client";
import Image from "next/image";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex md:flex-row flex-col items-center space-y-8 lg:space-x-5 justify-center lg:mx-auto mx-auto mt-20 mb-32 container h-[70vh] pt-80  md:pt-40 w-screen"
    >
      <div className="w-[70vw] md:w-[50vw] h-[50vh]">
        <h5 className="text-3xl font-bold dark:text-[#7C3AED] text-[#2563EB] my-2">
          Let&apos;s Connect
        </h5>
        <p className="dark:text-gray-300 mb-4 max-w-md">
          {" "}
          We are currently looking for new opportunities, our inbox is always
          open. Whether you have a question or just want to say hi, well
          try our best to get back to you!
        </p>
        <div>
          <Image src="/contact.svg" width={400} height={400} alt="contact"  />
        </div>
      </div>
      <div className="w-[70vw] md:w-[50vw] h-[50vh] border border-gray-500 rounded-2xl p-4 lg:p-10">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <div className="mb-6">
              
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className=" dark:bg-[#7C3AED] bg-[#2563EB] hover:dark:bg-[#7C3AED]/70 hover:bg-[#2563EB]/80 font-custom font-semibold text-lg text-white  py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;