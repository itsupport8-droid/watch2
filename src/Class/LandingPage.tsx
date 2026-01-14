import imageBackground from "../assets/image.png";
import rolexbg from "../assets/rolexbg.webp";
import rolex2bg from "../assets/rolex2bg.webp";
import cartierbg from "../assets/cartierbg.webp";
import Navbar from "../Components/NavbarComponent";
import { motion } from "framer-motion";
import Carousel from "../Components/Carousel";
import IntermissionOne from "../Components/IntermissionOne";
import { useEffect, useMemo, useState } from "react";
import Footer from "../Components/Footer";
import AdversitePage from "../Components/AdversitePage";
import CategoryTaskbar from "../Components/CategoryTaskbar";
import NewArrivals from "../Components/NewArrivals";
import BrandMarquee from "../Components/BrandMarquee";

const LandingPage = () => {
  const backgrounds = useMemo(
    () => [imageBackground, rolexbg, rolex2bg, cartierbg],
    []
  );
  const [bgIndex, setBgIndex] = useState(0);
  const [isInquire, setIsInquire] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(id);
  }, [backgrounds.length]);

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="z-30 sticky top-0">
        <Navbar />
      </div>
      <div className="flex shadow-md flex-col z-20 bg-black relative w-full h-[calc(100dvh-1px)]">
        <motion.img
          key={backgrounds[bgIndex]}
          className="absolute z-10 top-0 left-0 w-full h-full object-cover"
          src={backgrounds[bgIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
          <div className="absolute -top-24 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[#89986D]/25 blur-3xl" />
        </div>
        <div className="z-20 h-full">
          <div className="z-20 h-full flex items-center justify-center px-6">
            <div className="w-full max-w-6xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.24em] uppercase text-white/80 backdrop-blur-sm">
                Luxury watches • Authentic • Philippines
              </div>

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-left"
              >
                <div className="text-5xl md:text-7xl font-black uppercase tracking-tight">
                  Inspired <span className="text-[#DCE7C2]">Timepieces</span>
                </div>
                <div className="mt-4 max-w-xl text-base md:text-lg font-medium text-white/80 leading-relaxed">
                  Discover iconic designs, curated collections, and timeless
                  pieces—crafted to elevate every moment.
                </div>
              </motion.div>

              <motion.div
                id="inquire"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#categories"
                  className="rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-black/30 hover:bg-white/90 transition"
                >
                  Explore categories
                </a>
                <a
                  href="#footer"
                  className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 hover:ring-white/30 transition"
                >
                  Contact us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div id="categories" className="z-20 scroll-mt-20">
        <CategoryTaskbar />
      </div>
      <div className="z-20">
        <AdversitePage />
      </div>


      <div id="featured" className="z-20 scroll-mt-20">
        <Carousel />
      </div>

      <div className="z-10">
        <IntermissionOne />
      </div>

      <div id="brands" className="z-20 scroll-mt-20">
        <BrandMarquee />
      </div>
      <div id="new-arrivals" className="z-20 scroll-mt-20">
        <NewArrivals />
      </div>

      <div id="footer" className="z-20 scroll-mt-20">
        <Footer />
      </div>

      <motion.div
        layout
        className={
          "fixed z-40 bottom-4 right-4 rounded-2xl border border-[#616b4f]/70 bg-[#89986D] shadow-lg overflow-hidden " +
          (isInquire
            ? "w-[320px] "
            : "w-12 h-12 hover:bg-[#818f67] cursor-pointer")
        }
        onClick={() => {
          if (!isInquire) setIsInquire(true);
        }}
      >
        {isInquire ? (
          <div className="h-full w-full flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
              <div className="text-sm font-black uppercase tracking-widest text-white/90">
                Inquiry
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsInquire(false);
                }}
                className="h-9 w-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/20 transition"
                aria-label="Close inquiry"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6 6 18"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-auto px-5 py-4 flex flex-col gap-3 font-medium text-white">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Name
                </div>
                <input className="w-full shadow-md rounded-md px-3 outline-none text-black py-2" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Email
                </div>
                <input className="w-full shadow-md rounded-md px-3 outline-none text-black py-2" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Contact Number
                </div>
                <input className="w-full shadow-md rounded-md px-3 outline-none text-black py-2" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Remarks
                </div>
                <textarea className="w-full min-h-24 shadow-md rounded-md outline-none text-black px-3 py-2" />
              </div>

              <button
                type="button"
                className="mt-1 bg-green-700 p-3 rounded-md font-black uppercase text-center shadow-md hover:shadow-none hover:bg-green-800 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full w-full grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LandingPage;
