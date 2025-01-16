"use client";
import { Product, products } from '@/app/data/products'; 
import { useRouter, notFound } from 'next/navigation'; 
import Image from 'next/image'; 
import { FaStar } from 'react-icons/fa'; 
import { useState } from 'react'; 
import BuyingOptions from '@/components/BuyingOpption';

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const router = useRouter(); 
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  const colors = ["#FF5733", "#33C3FF", "#33FF57", "#FFC300"];

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <button 
        onClick={() => router.back()} 
        className="mb-4 sm:mt-4 text-blue-500 underline"
      >
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:bg-black sm:text-white">
        <Image
          src={product.image}
          alt={product.name}
          width={500}   
          height={500} 
          className="object-cover rounded-lg shadow-lg"
          layout="responsive"
        />

        <div className="flex flex-col justify-center bg-black p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-200 ml-2">(150 reviews)</p>
          </div>
          <p className="text-base md:text-lg text-gray-200 mb-2">{product.description}</p>
          <p className="text-xl md:text-3xl font-bold text-blue-600 mt-2">${product.price}</p>

          <div className="mt-4">
            <label htmlFor="color" className="block text-white font-semibold">Select Color:</label>
            <div className="flex space-x-4 mt-2">
              {colors.map(color => (
                <div 
                  key={color} 
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-600' : 'border-gray-300'}`} 
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="size" className="block text-white font-semibold">Select Size:</label>
            <select id="size" className="mt-2 p-2 border border-gray-300 rounded bg-white text-black">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>

          <BuyingOptions product={product} />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2).map(relatedProduct => (
            <div key={relatedProduct.id} className="border p-4 rounded-md bg-gray-800 text-white">
              <a href={`/product/${relatedProduct.id}`}>
                <Image 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name} 
                  width={100} 
                  height={100} 
                  className="w-full h-auto object-cover mb-4 rounded-lg" 
                />
              </a>
              <h3 className="text-lg font-bold mb-2">{relatedProduct.name}</h3>
              <p className="text-blue-500">${relatedProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
