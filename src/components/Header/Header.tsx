import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "@/redux/slices/cartSlice";
import { IconSearch, IconShoppingCart, IconMenu2 } from "@tabler/icons-react";
import logo from "../../../assets/logo.png";

function Header() {
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazonBlue p-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href="/">
            <Image
              className="cursor-pointer mr-5"
              width={80}
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden sm:flex items-center h-10 m-[1px] rounded-md flex-grow bg-amazonYellow hover:bg-amazonYellow-dark cursor-pointer">
          <input
            className="p-1 px-3 h-full w-6s flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <IconSearch className="h-12 w-12 p-3" />
        </div>
        <div className="flex items-center text-white space-x-6 mx-7 whitespace-nowrap">
          <select className="bg-transparent">
            <option className="text-black">EN</option>
            <option className="text-black">ES</option>
          </select>
          <div className="cursor-pointer">
            <p className="text-xs">Made with 💛 by</p>
            <p className="font-bold text-sm">Denilson Lemus</p>
          </div>
          <Link href="/cart">
            <div className="relative flex items-center">
              {items.length > 0 && (
                <div className="absolute flex justify-center -right-2 -top-1 bg-amazonYellow-dark rounded-full h-5 w-5 font-semibold text-sm">
                  {items.length}
                </div>
              )}
              <IconShoppingCart size={35} />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-6 bg-amazonBlue-light text-white text-sm p-2">
        <p className="cursor-pointer flex items-center">
          <IconMenu2 />
          All
        </p>
        <p className="cursor-pointer hidden sm:inline-flex">
          Todays Deal&apos;s
        </p>
        <p className="cursor-pointer hidden sm:inline-flex">Customer Service</p>
        <p className="cursor-pointer hidden sm:inline-flex">Registry</p>
        <p className="cursor-pointer hidden sm:inline-flex">Gift Cards</p>
      </div>
    </header>
  );
}

export default Header;
