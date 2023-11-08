import React from "react";
import Sandwich from "./sandwichCop";
function Header() {
  return (
    <div className="relative w-full h-screen flex flex-row-reverse items-start justify-between h-fit">
      <div className="w-full h-screen flex items-center">
        <Sandwich></Sandwich>
      </div>
      <div className="ml-10 relative titleh flex items-end ">
        <div className="flex flex-col title lg:mb-12">
          <div className="title-1">LET'S GET</div>
          <div className="title2">
            T<span className="text-[#E0372C]">AWOU</span>K
            <span className="text-[#E9A323]">ED</span>
          </div>
          <div className="title-3 text-start ">
            Get splashed with extra sauces like garlic, ketchup and more right
            on your face. Live, Love, Get Tawouked
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
