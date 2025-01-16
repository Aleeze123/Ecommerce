import { useCart } from "@/context/cartProvider"; 
import Image from "next/image";
import Link from "next/link"; 
import { FC } from "react";

interface Props {
  visible?: boolean;
  onRequestClose?(): void;
}
const SideCart: FC<Props> = ({ visible, onRequestClose }) => {
  const {
    items: cartItems,
    updateCart,
    removeFromCart,
    countTotalPrice,
    clearCart,
  } = useCart();
  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.count * cartItem.product.price;
  }, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div
      style={{ right: visible ? "0" : "-100%" }}
      className="transition-all w-full sm:w-96 bg-gray-900 fixed right-0 top-0 flex flex-col z-50 shadow-xl h-full sm:shadow-2xl"
    >
      <div className="p-4 sm:p-6 flex justify-between items-center bg-yellow-300">
        <h1 className="font-semibold text-gray-900 uppercase text-lg">Cart</h1>
        <button
          onClick={onRequestClose}
          className="text-gray-900 text-2xl hover:text-yellow-500"
        >
          ✕
        </button>
      </div>

      <div className="w-full h-0.5 bg-gray-700" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 pr-6">
        {cartItems.length === 0 ? (
          <div className="text-center text-white">
            <p>Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((cartItem) => {
            const formattedPrice = (cartItem.product.price * cartItem.count).toFixed(2);
            return (
              <div key={cartItem.product.id} className="p-4 sm:p-6 border-b border-gray-700">
                <div className="flex space-x-4 items-center">
                  <Image
                    src={cartItem.product.image}
                    alt={cartItem.product.name}
                    className="rounded-md object-cover"
                    width={64}
                    height={64}
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-white">{cartItem.product.name}</h2>
                    <div className="flex text-gray-400 text-sm space-x-1">
                      <span>{cartItem.count}</span>
                      <span>x</span>
                      <span>${formattedPrice}</span>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center space-x-4">
                    <button
                      onClick={() => removeFromCart(cartItem.product)}
                      className="text-xs text-gray-300 hover:text-yellow-500"
                    >
                      Remove
                    </button>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateCart(cartItem.product, -1)}
                        className="text-gray-300 hover:text-yellow-500"
                      >
                        -
                      </button>
                      <span className="text-xs text-white">{cartItem.count}</span>
                      <button
                        onClick={() => updateCart(cartItem.product, 1)}
                        className="text-gray-300 hover:text-yellow-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="w-full h-0.5 bg-gray-700" />
      <div className="p-4 sm:p-6 bg-gray-800 mt-auto">
        <div className="py-4">
          <h1 className="font-semibold text-xl text-yellow-300 uppercase">Total</h1>
          <p className="font-semibold text-white">
            <span className="text-gray-400 font-normal">The total of your cart is:</span> ${formattedTotalPrice}
          </p>
        </div>
        <div className="space-y-4">
        <Link href="/Checkout" legacyBehavior>
        <a
  className="w-full py-3 px-6 rounded-md bg-black text-yellow-400 border-[1px] border-yellow-400 font-semibold hover:bg-yellow-400 hover:text-white transition duration-300"

    onClick={(e) => {
      // Close the cart
      e.preventDefault(); 
      onRequestClose?.(); 
      setTimeout(() => {
        window.location.href = '/Checkout'; 
      }, 300);
    }}
  >
    Proceed to Checkout
  </a>
</Link>
          <button
            onClick={() => {
              clearCart();
            }}
            className="w-full py-2 text-gray-900 border-2 border-yellow-500 rounded-md hover:bg-yellow-500 bg-white" >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideCart;
