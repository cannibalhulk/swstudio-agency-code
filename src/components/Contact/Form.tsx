"use client"
import { FormEvent, useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      fullname: fullname,
      email: email,
      phone: phone,
      message: message,
    };
    try {
      const response = await fetch('/api/email-send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Email sent successfully!');
        setFullname('');
        setEmail('');
        setMessage('');
        setPhone('');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
      <div
        className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
        data-wow-delay=".2s
      "
      >
        <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
          Send us a Message
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-[22px]">
            <label
              htmlFor="fullName"
              className="mb-4 block text-sm text-body-color dark:text-dark-6"
            >
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={fullname}
              onChange={(e)=>setFullname(e.target.value)}
              placeholder="Adam Gelius"
              className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
            />
          </div>
          <div className="mb-[22px]">
            <label
              htmlFor="email"
              className="mb-4 block text-sm text-body-color dark:text-dark-6"
            >
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="example@yourmail.com"
              className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
            />
          </div>
          <div className="mb-[22px]">
            <label
              htmlFor="phone"
              className="mb-4 block text-sm text-body-color dark:text-dark-6"
            >
              Phone*
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="+885 1254 5211 552"
              className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
            />
          </div>
          <div className="mb-[30px]">
            <label
              htmlFor="message"
              className="mb-4 block text-sm text-body-color dark:text-dark-6"
            >
              Message*
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              rows={2}
              placeholder="type your message here"
              className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
            ></textarea>
          </div>
          <div className="mb-0">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;