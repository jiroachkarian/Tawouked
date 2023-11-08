import React from "react";
import Logo from "./logo";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <div className="absolute w-full h-fit bg-transparent px-32 py-2.5">
        <div className="flex justify-between items-center flex-row ">
          <div className="athiti flex flex-row gap-16">
            <p>Extra</p>
            <p>Garlic</p>
          </div>
          <Logo></Logo>
          <div className="athiti flex flex-row gap-16 ">
            <p>Pepsi</p>
            <p>Please</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
