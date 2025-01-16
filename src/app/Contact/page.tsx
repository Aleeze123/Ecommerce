import React from 'react';
import Link from 'next/link';
import { HiLocationMarker, HiClock, HiPhone, HiMail } from 'react-icons/hi';
import Image from 'next/image';  

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full h-64 sm:h-80 md:h-80 lg:h-96 relative">
        <Image
          src="/contact.png" 
          alt="Contact Us"  
          layout="fill"  
          objectFit="cover"  
          className="absolute inset-0"
        />
      </div>
      <div className="max-w-2xl w-full space-y-8 mt-20">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-center text-lg text-gray-400">
            We&apos;d love to hear from you! Please fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="text-center space-y-6 mt-8">
          <h3 className="text-2xl font-semibold">Our Contact Info</h3>
          <p className="text-lg text-gray-400">You can reach us at:</p>

          <div className="text-gray-300 space-y-4">
            <p className="flex items-center text-lg">
              <HiLocationMarker className="mr-2 text-yellow-500" />
              <strong>Location:</strong> Malir Karachi, Pakistan
            </p>
            <p className="flex items-center text-lg">
              <HiClock className="mr-2 text-yellow-500" />
              <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM
            </p>
            <p className="flex items-center text-lg">
              <HiPhone className="mr-2 text-yellow-500" />
              <strong>Phone:</strong> +92123456789
            </p>
            <p className="flex items-center text-lg">
              <HiMail className="mr-2 text-yellow-500" />
              <strong>Email:</strong> styles@gmail.com
            </p>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-black border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-black border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="subject"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-black border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <input
                id="message"
                name="message"
                className="appearance-none rounded-md relative block w-full px-3 py-6 border bg-black border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-lg"
                placeholder="Your Message"
                required
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Link href="/" legacyBehavior>
              <a className="font-medium text-yellow-500 hover:text-yellow-400">
                Back to Home
              </a>
            </Link>
            <button
              type="submit"
              className="group relative w-1/2 flex justify-center py-2 px-4  text-sm font-medium rounded-md bg-black text-yellow-400 border-[1px] border-yellow-400 hover:bg-yellow-400   hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
