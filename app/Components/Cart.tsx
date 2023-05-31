"use client";

import basket from "@/public/shopping-cart.png";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { useCartStore } from "@/store";

export default function Cart() {
  const cartStore = useCartStore();
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700"
      >
        <h1>Here's your shopping list 📃</h1>
        {cartStore.cart.map((item) => (
          <div className="flex py-4 gap-4">
            <Image
              className="rounded-med h-24"
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
            />
            <div>
              <h2>{item.name}</h2>
              <div className="flex gap-2">
                <h2>Quantity: {item.quantity}</h2>
                <button>
                  <IoRemoveCircle
                    onClick={() =>
                      cartStore.removeProduct({
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        unit_amount: item.unit_amount,
                        quantity: item.quantity,
                      })
                    }
                  />
                </button>
                <button>
                  <IoAddCircle
                    onClick={() =>
                      cartStore.addProduct({
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        unit_amount: item.unit_amount,
                        quantity: item.quantity,
                      })
                    }
                  />
                </button>
              </div>
              <p className="text-sm">
                {item.unit_amount && formatPrice(item.unit_amount)}
              </p>
            </div>
          </div>
        ))}
        {cartStore.cart.length > 0 && (
          <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
            Checkout
          </button>
        )}
        {!cartStore.cart.length && (
          <div className="flex flex-col items-center gap-12 text-2x1 font-medium pt-56 opacity-75">
            <h1>Uhhh ohh...it's empty 😢</h1>
            <Image src={basket} alt="empty cart" width={200} height={200} />
          </div>
        )}
      </div>
    </div>
  );
}