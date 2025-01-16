import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 'banner1',
    title: 'STYLE & HEAVEN',
    description: 'Discover the latest trends and styles curated just for you. Elevate your fashion game today!',
    image: '/banner.png',
    bgColor: 'bg-orange-100'
  },
  {
    id: 'banner2',
    title: 'FASHION FOR YOU',
    description: 'Stay ahead of the trends with our curated collections for every occasion.',
    image: '/womens/shirt2.jpeg',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'banner3',
    title: 'NEW ARRIVALS',
    description: 'Check out our latest arrivals that will take your style to the next level!',
    image: '/mens/jacket.jpeg',
    bgColor: 'bg-green-100'
  },
  {
    id: 'banner4',
    title: 'LUXURY COLLECTION',
    description: 'Step into the world of luxury with our exclusive collection.',
    image: '/watches/watch4.jpeg',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'banner5',
    title: 'JEWELRY COLLECTION',
    description: 'Shine bright with our stunning jewelry collection, designed to make you stand out.',
    image: '/jewelry/sett.jpeg',
    bgColor: 'bg-pink-200',
  },
  {
    id: 'banner6',
    title: 'SHOES GALORE',
    description: 'Step up your shoe game with our wide range of stylish footwear.',
    image: "/mensshoes/mshoes1.jpeg",
    bgColor: 'bg-purple-100',
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
  };

 
  return (
    <div className="relative mt-16">
          <div className="bg-gray-900 text-yellow-300 py-2 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <span className="mx-4 text-lg font-semibold">Enjoy every discount and deal!</span>
          </div>
        </div>
      <div className={`flex flex-col md:flex-row items-center justify-between ${banners[currentBanner].bgColor} text-black p-6 md:p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out`}>
        <div className="flex flex-col items-start p-6 space-y-6 max-w-full md:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif leading-tight text-gray-800 drop-shadow-lg">
            {banners[currentBanner].title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            {banners[currentBanner].description}
          </p>

          <Link href="/Shop" legacyBehavior>
            <a>
              <button className="bg-yellow-400 text-black py-2 px-6 md:py-4 md:px-10 rounded-full text-sm sm:text-md md:text-xl font-semibold transition duration-300 ease-in-out shadow-lg transform hover:bg-yellow-500 hover:text-black hover:scale-105 hover:shadow-2xl">
                Shop Now
              </button>
            </a>
          </Link>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-1/2 lg:w-1/3 p-6">
          <div className="relative group">
            <Image
              src={banners[currentBanner].image}
              alt={`Banner ${currentBanner + 1}`}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-xl transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 md:right-8 z-10">
        <button onClick={nextBanner} className="bg-yellow-400 text-black p-2 md:p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all">
          <ChevronRight className="text-lg sm:text-xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default Banner;
