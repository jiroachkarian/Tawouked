import React from "react";
import "./header.css";
import SandF from "../images/tawouksw.png";
import SandB from "../images/Group4.png";

//import SandW from "../images/tawouksw.png";
//import SandVector from "../images/Groupvector.png";

function Sandwich() {
  return (
    <div className="relative h-full w-full flex items-end ">
      <div className="absolute imgb">
        <img src={SandB} alt="" />
      </div>
      <div className="absolute lg:-left-24 lg:-bottom-20 right-0 -left-10">
        <img className="imgfh" src={SandF} alt="" />
      </div>
    </div>
  );
}

export default Sandwich;

/*      

<div className="imgc w-fit h-fit bg-cover bg-center bg-no-repeat">
  <img
    src={SandW}
    className="z-10 absolute top-[]"
    alt=""
   />
    </div>
      <div className=" imgv w-fit h-fit bg-cover bg-center bg-no-repeat">
        <img src={SandVector} className="z-0  absolute" alt="" />
    </div>

*/
