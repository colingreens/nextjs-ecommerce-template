"use client";

import Cart from "./Cart";
import Image from "next/image";
import Link from "next/link";

import { AiFillShopping } from "react-icons/ai";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useCartStore } from "@/store";

export default function Nav({ user }: Session) {
  const cartStore = useCartStore();
  return (
    <nav className="flex justify-between items-center py-12">
      <Link href={"/"}>
        <h1>Home</h1>
      </Link>
      <ul className="flex items-center gap-12">
        <li
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer"
        >
          <AiFillShopping />
          <span className="bg-teal-700 text-sm font-bold w-5 h-5 rounded-full text-white absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </span>
        </li>
        {!user && (
          <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        {user && (
          <li>
            <Image
              src={user?.image as string}
              alt={user?.name as string}
              width={36}
              height={36}
              className="rounded-full"
            />
          </li>
        )}
      </ul>

      {cartStore.isOpen && <Cart />}
    </nav>
  );
}