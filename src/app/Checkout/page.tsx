"use client";
import React, { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';  
import Image from 'next/image';
const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-12 pb-8 px-4 sm:px-6 lg:px-8">
         <div className="w-full h-64 sm:h-80 md:h-80 lg:h-96 relative">
              <Image
                src="/checkout.png"
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
        
      <div className="max-w-lg w-full space-y-8">
        {isSubmitted ? (
          // Message after purchase
          <div className="text-center">
            <FontAwesomeIcon 
              icon={faCheckCircle} 
              className="w-16 h-16 text-yellow-400 mx-auto" 
            />
            <h2 className="text-4xl font-extrabold text-white mt-6">
              Thank You for Shopping!
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Your order has been successfully completed. We will notify you once it&apos;s shipped.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="font-medium text-yellow-500 hover:text-yellow-400 bg-yellow-900 hover:bg-yellow-800 py-2 px-4 rounded-md text-sm"
              >
                Back to Home
              </a>
            </div>
          </div>
        ) : (
          // Checkout form
          <>
           
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
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
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="sr-only">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="address"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Shipping Address"
                  />
                </div>
                <div>
                  <label htmlFor="postal-code" className="sr-only">Postal Code</label>
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Postal Code (Zip Code)"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="sr-only">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label htmlFor="town" className="sr-only">Town</label>
                  <input
                    id="town"
                    name="town"
                    type="text"
                    autoComplete="address-level3"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Town"
                  />
                </div>
                <div>
                  <label htmlFor="province" className="sr-only">Province</label>
                  <input
                    id="province"
                    name="province"
                    type="text"
                    autoComplete="address-level1"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Province"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="sr-only">Country</label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label htmlFor="additional-info" className="sr-only">Additional Information</label>
                  <textarea
                    id="additional-info"
                    name="additional-info"
                    rows={4}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white bg-black placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Additional Information (Optional)"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="payment-method" className="block text-sm font-medium text-gray-400">
                  Payment Method
                </label>
                <select
                  id="payment-method"
                  name="payment-method"
                  className="mt-1 block w-full py-2 px-3 border border-white bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                >
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Bank Transfer</option>
                </select>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a href="/Shop" className="font-medium text-yellow-500 hover:text-yellow-400">
                  Back to Shop
                </a>
                <button
  type="submit"
  className="group relative w-full sm:w-1/2 flex justify-center py-2 px-4  text-sm font-medium rounded-md text-yellow-400 border-[1px] border-yellow-400 hover:bg-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all"
>
  Complete Purchase
</button>

              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
