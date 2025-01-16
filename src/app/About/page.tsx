"use client";

import Image from "next/image";  
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full h-64 sm:h-80 md:h-80 lg:h-96 relative">
        <Image
          src="/about.png"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
  
      <div className="container mx-auto p-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
          <Image
              src="/about.jpg"
              alt="About Us"
              width={500}
              height={300}
              className="w-full sm:w-3/4 lg:w-1/2 h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg sm:text-xl text-white mb-4 leading-relaxed">
              Welcome to <span className="text-yellow-400 font-bold">Styles & Heaven</span>! We are an e-commerce platform offering a curated selection of the latest fashion trends, including <span className="text-yellow-400 font-bold">Men&apos;s Clothing</span>, <span className="text-yellow-400 font-bold">Women&apos;s Clothing</span>, <span className="text-yellow-400 font-bold">Watches</span>, <span className="text-yellow-400 font-bold">Jewelry</span>, <span className="text-yellow-400 font-bold">Men&apos;s Shoes</span>, and <span className="text-yellow-400 font-bold">Women&apos;s Shoes</span>. Our goal is to provide you with the best products at the most affordable prices for every style and occasion.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
              Whether you&apos;re shopping for the latest <span className="text-yellow-400 font-bold">fashion trends</span>, <span className="text-yellow-400 font-bold">premium watches</span>, or stylish <span className="text-yellow-400 font-bold">jewelry</span> to complete your look, we&apos;ve got you covered. At Styles & Heaven, we bring you high-quality products that cater to every taste and budget.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Thank you for choosing <span className="text-yellow-400 font-bold">Styles & Heaven</span>! We&apos;re excited to provide you with an exceptional shopping experience and make sure you find the perfect items for your wardrobe. Shop with us today and discover the best in <span className="text-yellow-400 font-bold">men&apos;s and women&apos;s fashion</span>, <span className="text-yellow-400 font-bold">watches</span>, <span className="text-yellow-400 font-bold">shoes</span>, and <span className="text-yellow-400 font-bold">jewelry</span>!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/team1.jpg"
                alt="Team Member 1"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Zayn</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/team2.png"
                alt="Team Member 2"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Sara Khan</h3>
              <p className="text-gray-400">Chief Marketing Officer</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/team3.jpg"
                alt="Team Member 3"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Aymen</h3>
              <p className="text-gray-400">Lead Designer</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/team4.jpeg"
                alt="Team Member 4"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Selim</h3>
              <p className="text-gray-400">Head of Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
