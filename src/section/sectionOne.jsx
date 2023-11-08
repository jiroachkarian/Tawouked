import React from "react";
import NavBar from "../components/navbar";
import Header from "../components/header";

function SectionOne() {
  return (
    <>
      <section className="w-full  h-screen bg-[#F3DFB9] overflow-hidden">
        <NavBar></NavBar>
        <Header></Header>
      </section>
    </>
  );
}
export default SectionOne;
