import { useMemo, useState } from "react";
import watch1 from "../assets/watch1.png";
import { motion } from "framer-motion";

type Slide = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const slides: Slide[] = [
  { id: "watch-1", name: "Seiko Presage", price: "$499", image: watch1 },
  { id: "watch-2", name: "Seiko Prospex", price: "$799", image: watch1 },
  { id: "watch-3", name: "Seiko 5 Sports", price: "$329", image: watch1 },
];

const Carousel = () => {
  const data = useMemo(() => slides, []);
  const loopItems = useMemo(() => [...data, ...data, ...data], [data]);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex bg-[#F6F0D7] items-center shadow-md justify-center w-full h-full py-16 px-6">
      <motion.div
        className="relative w-full  overflow-hidden h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="h-full rounded-2xl bg-[#9CAB84] shadow-md p-5 overflow-hidden relative">
          <div
            className="flex h-full items-stretch gap-6 p-6 carousel-track"
            style={{
              width: "max-content",
              animationPlayState: isHovering ? "paused" : "running",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {loopItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex w-72 flex-col gap-4 rounded-xl bg-[#fdf9e9] p-6 text-left text-black shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <div className="rounded-xl p-6 ">
                    <img
                      className="h-44 w-44 object-contain"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-semibold leading-tight">
                    {item.name}
                  </div>
                  <div className="text-lg font-medium">{item.price}</div>
                  <p className="text-sm text-gray-700">
                    Crafted with precision and heritage-inspired design, perfect
                    for daily wear or formal occasions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
