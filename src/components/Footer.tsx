"use client";
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPinterest } from 'react-icons/fa';
const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmailSubmit = (e:any) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail('');
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex-1 mb-8 sm:mb-0 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-yellow-500 mb-4">Styles & Heaven</h2>
          <p className="font-thin text-sm sm:text-base mb-4 max-w-xs sm:max-w-md mx-auto sm:mx-0">
            Your gateway to exclusive offers, premium fashion, and outstanding customer service. Join our community today!
          </p>
          <p className="text-sm sm:text-base mb-4">
            Explore our <a href="/community" className="text-yellow-500 hover:text-white">community</a> for the latest trends and updates.
          </p>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="mb-8 flex justify-center sm:justify-start space-x-6">
         
            <a href="
          https://github.com/Aleeze123/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-all">
          <FaGithub size={28} />
            </a>
         
            <a href="https://www.linkedin.com/in/aleeza-a-i68735305"   target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-all">
            <FaLinkedin size={28} />
            </a>
            <a href=" https://www.pinterest.com/alizey649/"target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-all">
            <FaPinterest size={28} />
            </a>
          </div>
       
        
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-6 text-sm sm:text-base">
              <li>
                <a href="#terms-of-service" className="text-gray-300 hover:text-white transition-all">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-gray-300 hover:text-white transition-all">Privacy Policy</a>
              </li>
              <li>
                <a href="/Contact" className="text-gray-300 hover:text-white transition-all">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 rounded-md text-black text-sm sm:text-base"
                required
              />
              <button type="submit" className="text-yellow-500 border-[1px] border-yellow-500 bg-black px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-yellow-500 hover:text-black transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between">
        <div id="terms-of-service" className="flex-1 sm:mr-8 mb-8 sm:mb-0">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-500">Terms of Service</h3>
          <p className="text-sm sm:text-base mb-2">
            Welcome to Styles & Heaven! By using our website, you agree to comply with and be bound by the following terms and conditions:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base font-extralight">
            <li>Use of our website is subject to our privacy policy.</li>
            <li>All content provided on this site is for informational purposes only.</li>
            <li>You agree not to use our site for any unlawful purpose.</li>
            <li>We reserve the right to terminate or restrict your access to our site at any time without notice.</li>
          </ul>
        </div>
        <div id="privacy-policy" className="flex-1 sm:ml-8">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-500">Privacy Policy</h3>
          <p className="text-sm sm:text-base mb-2">
            At Styles & Heaven, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and disclose your information:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base font-extralight">
            <li>We collect personal information when you sign up for our newsletter, make a purchase, or interact with our site.</li>
            <li>Your information is used to provide and improve our services, communicate with you, and personalize your experience.</li>
            <li>We do not share your personal information with third parties except as required by law or to provide our services.</li>
            <li>You can opt-out of marketing communications at any time by following the unsubscribe instructions in our emails.</li>
          </ul>
        </div>
      </div>

      {/* Home, Shop, About, Contact*/}
      <div className="mb-8 text-center">
        <ul className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base">
          <li>
            <a href="/" className="text-gray-300 hover:text-white transition-all">Home</a>
          </li>
          <li>
            <a href="/Shop" className="text-gray-300 hover:text-white transition-all">Shop</a>
          </li>
          <li>
            <a href="/About" className="text-gray-300 hover:text-white transition-all">About</a>
          </li>
          <li>
            <a href="/Contact" className="text-gray-300 hover:text-white transition-all">Contact</a>
          </li>
        </ul>
      </div>
      <div className="text-center py-4">
        <p className="text-gray-400"> &copy; {new Date().getFullYear()} Styles & Heaven. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
