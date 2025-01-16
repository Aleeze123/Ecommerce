
"use client";

import { Product, useCart } from "@/context/cartProvider"
import { FC } from "react";

interface Props {
  product: Product;
}

const BuyingOptions: FC<Props> = ({ product }) => {
  const { updateCart } = useCart();
  const onAddToCartClick = () => {
    updateCart(product, 1);
  };

  return (
    <div className="flex p-2 space-x-2">
      <button
        onClick={onAddToCartClick}
        className="flex-1 border-2 border-blue-700 bg-blue-600 p-2 rounded-md text-white"
      >
        Add to Cart
      </button>
 
     
    </div>
  );
};

export default BuyingOptions;
