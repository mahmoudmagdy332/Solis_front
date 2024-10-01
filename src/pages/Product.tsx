import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/blog/Hero";
import Galary from "../components/Product/Galary";
import LightEffect from "../components/Product/LightEffect";
import ShadersSlider from "../components/Product/OverView";

const ProductDetails = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const lightingRef = useRef<HTMLDivElement>(null);
  const imageryRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("Overview");

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "Overview", ref: overviewRef },
        { id: "Lighting Effects", ref: lightingRef },
        { id: "Application Imagery", ref: imageryRef },
        { id: "Product Details", ref: detailsRef },
        { id: "Accessories Details", ref: accessoriesRef },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero title="Product" />
      <div className="bg-gray-50 grid grid-cols-4 gap-2 p-10">
        <div className="text-left hidden md:block md:col-span-1  relative">
          <div className="sticky top-20 left-20">
            <button className="text-red-500 flex items-center space-x-2 mb-6">
              <span className="text-lg font-bold mb-4">← All Blade R</span>
            </button>
            <ul className="space-y-5">
              <li
                className={` ${
                  activeSection === "Overview"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(overviewRef)}
              >
                Overview
              </li>
              <li
                className={`${
                  activeSection === "Lighting Effects"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(lightingRef)}
              >
                Lighting Effects
              </li>
              <li
                className={`${
                  activeSection === "Application Imagery"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(imageryRef)}
              >
                Application Imagery
              </li>
              <li
                className={`${
                  activeSection === "Product Details"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(detailsRef)}
              >
                Product Details
              </li>
              <li
                className={`${
                  activeSection === "Accessories Details"
                    ? "text-red-500 font-bold "
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(accessoriesRef)}
              >
                Accessories Details
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 col-span-4">
          <div className="flex flex-col gap-4">
            <div ref={overviewRef} className="py-10 border-b-4">
              <ShadersSlider />
            </div>

            <div className="py-10">
              <img src="../../public/images/overview.jpg" alt="" />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="h-[450px] col-span-1">
                <img
                  src="../../public/images/blade.jpg"
                  className="h-full"
                  alt=""
                />
              </div>
              <div className="col-span-1 space-y-8 p-8 bg-white">
                <p className="text-6xl font-bold text-red-600">Blade R</p>
                <p className="text-gray-700 text-xl">All In One</p>
                <p className="text-md text-gray-500">From chaos to order.</p>
                <p>
                  Blade R develops the concept of integration in architecture to
                  improve people’s well-being through the smart activation of
                  safety, entertainment, comfort and sustainability services.
                </p>
                <button>Discover</button>
              </div>
            </div>

            <div
              ref={lightingRef}
              className="w-full flex flex-col gap-4 py-10 border-b-4"
            >
              <p className="text-2xl text-gray-500">Lighting Effects</p>
              <LightEffect />
            </div>

            <div
              ref={imageryRef}
              className="w-full flex flex-col gap-4 py-20 border-b-4"
            >
              <p className="text-2xl text-gray-500">
                Application imagery for Blade R ø170mm
              </p>
              <Galary />
            </div>

            <div ref={detailsRef} className="w-full flex flex-col gap-4">
              <p className="text-2xl text-gray-500">Accessories details</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Flush mount installation on false ceilings of thickness from
                  12.5 to 25 mm for Minimal versions (without perimeter flap) or
                  1 to 25 mm for Frame versions (with flap) using torsion
                  springs.
                </li>
                <li>
                  Main body with radiant surface made of die-cast aluminium.
                </li>
                <li>
                  High-definition optics made of metallised thermoplastic
                  material, integrated in the innovative black anti-glare screen
                  that defines emission with luminance control UGR&lt;10.
                </li>
                <li>
                  The special configuration of the optical system delivers a
                  precise circular distribution without punctiform effect.
                </li>
                <li>
                  Functional elements can be inserted into the product to
                  increase its potentialities: framers for accent lighting and
                  double emission, emergency lights, audio speakers,
                  multi-sensors, and sockets for connecting smoke sensors and
                  video cameras.
                </li>
                <li>
                  For the smoke detector and its base, always adhere strictly to
                  the manufacturer’s instructions and local standards.
                </li>
                <li>High visual comfort.</li>
                <li>Installation without tools.</li>
                <li>IP20.</li>
                <li>
                  IP23 on the visible body of the mount after installation.
                </li>
              </ul>
            </div>
          </div>
          <div
            ref={accessoriesRef}
            className="w-full flex flex-col gap-4 py-10"
          >
            <p className="text-2xl text-gray-500">Product Details</p>
            <ul className="list-disc">
              <li>
                Functional elements can be inserted into the product to increase
                its potentialities: framers for accent lighting and double
                emission, emergency lights, audio speakers, multi-sensors and
                sockets for connecting smoke sensors and video cameras.
              </li>
            </ul>{" "}
            <div className="bg-white p-8 flex flex-col gap-4 mt-20">
              <ul className="flex gap-4 flex-wrap">
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries1.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries2.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries3.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries4.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries4.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries5.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries6.jpg" alt="" />
                </li>
              </ul>
              <ul className="flex gap-4 flex-wrap">
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries7.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries8.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries9.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries9.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries10.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries11.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries12.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries13.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries14.jpg" alt="" />
                </li>
                <li className="w-20 h-20">
                  <img src="../../public/images/Accessoiries15.jpg" alt="" />
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl text-gray-500 mb-4">
                Colours available for Blade R ø170mm
              </p>
              <ul className="grid grid-cols-3 gap-4">
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color1.png" alt="" />
                  <p> 01 White</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color2.png" alt="" />
                  <p> 43 Black/Black</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color3.png" alt="" />
                  <p> 01 White</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color1.png" alt="" />
                  <p> 43 Black/Black</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color2.png" alt="" />
                  <p> 04 White</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-md font-bold text-gray-700 mb-4">
                Further colours on request
              </p>
              <ul className="grid grid-cols-3 gap-4">
                <li className="flex items-center gap-4">
                  <img src="../../public/images/fscolor1.png" alt="" />
                  <p> 41 White / gold</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color2.png" alt="" />
                  <p> 43 Black/Black</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color3.png" alt="" />
                  <p> 01 White</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color1.png" alt="" />
                  <p> 43 Black/Black</p>
                </li>
                <li className="flex items-center gap-4">
                  <img src="../../public/images/color2.png" alt="" />
                  <p> 04 White</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
