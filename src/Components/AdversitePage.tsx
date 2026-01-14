import { useState } from "react";
import { motion } from "framer-motion";
import WatchOne from "../assets/sellingImage1.webp";
import MalupitonOne from "../assets/malupiton1.jpg";
import MalupitonTwo from "../assets/malupiton2.jpg";
import MalupitonThree from "../assets/malupiton3.jpg";
import MalupitonFour from "../assets/malupiton4.jpg";

const AdversitePage = () => {
  const previewImages = [
    MalupitonOne,
    MalupitonTwo,
    MalupitonThree,
    MalupitonFour,
  ];
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState<
    number | null
  >(null);
  const [isZooming, setIsZooming] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("50% 50%");

  const displayedImageSrc =
    selectedPreviewIndex === null
      ? WatchOne
      : previewImages[selectedPreviewIndex];

  const handleImageMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="bg-[#F6F0D7] w-full px-6 md:px-20 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group h-[420px] md:h-[640px] rounded-2xl overflow-hidden shadow-lg bg-black/5"
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => {
            setIsZooming(false);
            setTransformOrigin("50% 50%");
          }}
          onMouseMove={handleImageMouseMove}
        >
          <img
            src={displayedImageSrc}
            alt={selectedPreviewIndex === null ? "Watch" : "Selected preview"}
            className={`w-full h-full object-cover transition-transform duration-200 ease-out ${
              isZooming ? "scale-[2]" : "scale-100"
            }`}
            style={{ transformOrigin }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
            Hover to zoom
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col h-[420px] md:h-[640px] overflow-auto rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 md:p-10 text-left text-black"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#89986D]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3A432B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#89986D]" />
              Featured listing
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70">
              Product ID <span className="font-black text-black">#A2806</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="font-black text-2xl leading-tight">
              Audemars Piguet Royal Oak Off Shore Rose Gold 26470OR.OO.A002CR.01 2016
            </div>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  Price
                </div>
                <div className="mt-1 text-3xl md:text-4xl font-black tracking-tight text-black">
                  ₱ 3,950,000.00
                </div>
              </div>

              <div className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  Stock
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  <span className="text-base font-black">13</span>
                  <span className="text-sm font-medium text-black/60">available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-black/50">
              Description
            </div>
            <div className="mt-2 text-sm leading-relaxed text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis impedit excepturi soluta itaque, exercitationem tempora, nemo necessitatibus eos quia quibusdam accusamus, cum velit perferendis omnis! Unde doloremque adipisci illum.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-md bg-green-600 px-5 py-3 text-sm font-black uppercase text-white shadow-lg shadow-green-900/20 hover:bg-green-700 transition"
            >
              Inquire
            </button>
            <button
              type="button"
              className="rounded-md bg-black/5 px-5 py-3 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-black/10 transition"
            >
              Add to wishlist
            </button>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-black/50">
              More photos
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedPreviewIndex(index)}
                className={
                  "group relative aspect-square overflow-hidden rounded-xl bg-black/5 shadow-sm ring-1 ring-black/10 transition " +
                  "hover:-translate-y-0.5 hover:shadow-md " +
                  (selectedPreviewIndex === index ? "ring-2 ring-green-700" : "")
                }
                aria-label={`Preview ${index + 1}`}
              >
                <img
                  src={previewImages[index]}
                  alt={`Preview ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
                <div className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-black/45 px-2 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdversitePage;
