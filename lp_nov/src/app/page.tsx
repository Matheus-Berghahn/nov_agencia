
"use client"
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import BoxParallax from "./components/BoxParallax";
import Work from "./components/Work";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <BoxParallax></BoxParallax>
    <Work></Work>
    <WhatWeDo></WhatWeDo>
    <Footer></Footer>
    </>
  );
}
