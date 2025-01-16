import React from 'react';
import { FaTruck, FaRegStar, FaHeadphones, FaShoppingCart } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">Fashion Services at Styles & Heaven</h1>
        <p className="text-lg text-white mb-12">
          At <span className="text-yellow-400 font-bold">Styles & Heaven</span>, we provide a range of premium services to make your shopping experience seamless and enjoyable. Explore our fashion-focused services, including exclusive offers, free delivery, and more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-md text-center hover:bg-yellow-500 transition-all">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaTruck />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Free Delivery on All Orders</h3>
            <p className="text-white">
              Enjoy free delivery on every order. No minimum purchase required! Whether you&apos;re buying clothes, shoes, or accessories, your items will be delivered straight to your doorstep, at no extra cost.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md text-center hover:bg-yellow-500 transition-all">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaRegStar />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Fashion Forward Trends</h3>
            <p className="text-white">
              Stay ahead of the curve with the latest fashion trends. From men&apos;s and women&apos;s clothing to shoes and accessories, we bring you the most stylish picks for every season.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md text-center hover:bg-yellow-500 transition-all">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaHeadphones />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">24/7 Customer Support</h3>
            <p className="text-white">
              Our customer support team is available 24/7 to assist with any questions or concerns. Whether it&apos;s tracking an order or styling advice, we&apos;re here to help.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md text-center hover:bg-yellow-500 transition-all">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaShoppingCart />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Easy Returns and Exchanges</h3>
            <p className="text-white">
              We understand that shopping online can be tricky. That&apos;s why we offer hassle-free returns and exchanges, ensuring you always get the perfect fit and style.
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Why Choose Styles & Heaven?</h2>
          <p className="text-lg text-white mb-6">
            At <span className="font-bold text-yellow-400">Styles & Heaven</span>, we are passionate about bringing you the best in fashion, at the best prices. Our focus is on delivering quality products with a smooth shopping experience, and we are proud to offer a variety of services designed with your convenience in mind.
          </p>
          <p className="text-lg text-gray-300">
            We are committed to offering a wide selection of premium clothing, footwear, and accessories. Plus, with free delivery, 24/7 customer support, and easy returns, shopping at Styles & Heaven is an experience you can trust. Thank you for making us your go-to destination for all things fashion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
