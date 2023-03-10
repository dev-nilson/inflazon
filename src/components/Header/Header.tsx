import Image from "next/image";
import React from "react";
import { IconSearch, IconShoppingCart, IconMenu2 } from "@tabler/icons-react";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazonBlue p-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image className="cursor-pointer" src="" alt="logo" />
        </div>
        <div className="hidden sm:flex items-center h-10 m-[1px] rounded-md flex-grow bg-amazonYellow hover:bg-amazonYellow-dark cursor-pointer">
          <input
            className="p-1 px-3 h-full w-6s flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <IconSearch className="h-12 w-12 p-3" />
        </div>
        <div className="flex items-center text-white space-x-6 mx-7 whitespace-nowrap">
          <div className="cursor-pointer">EN</div>
          <div className="cursor-pointer">
            <p className="text-xs">Made with 💛 by</p>
            <p className="font-bold text-sm">Denilson Lemus</p>
          </div>
          <div className="cursor-pointer relative flex items-center">
            <div className="absolute flex justify-center -right-2 -top-1 bg-amazonYellow-dark rounded-full h-6 w-6 font-semibold text-xs p-1">0</div>
            <IconShoppingCart size={35} />
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
