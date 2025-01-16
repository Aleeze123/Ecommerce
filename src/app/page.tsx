"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import ProductList from '@/components/ProductList';
import Service from "@/components/Service";
import { fetchProducts } from "@/app/utils/api";
import { Product } from "@/app/data/products";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);
  return (
    <div>
 
      <Banner/>
      <header className="bg-black text-white py-4 text-center">
    
      </header>
      <main>
        <ProductList  /> 
     
      </main>
      <Service/>

    </div>
  );
};

export default HomePage;



