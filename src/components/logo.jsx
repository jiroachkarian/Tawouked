import React from "react";
import LogoT from "../images/LogoTawouk.png";

function Logo() {
  return (
    <>
      <div className="w-40 h-16">
        <div className="bg-cover bg-no-repeat bg-center">
          <img src={LogoT} alt="" />
        </div>
      </div>
    </>
  );
}
export default Logo;
