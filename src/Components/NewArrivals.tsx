import { motion } from "framer-motion";
import watch1 from "../assets/Watch1.png";
import sellingImage1 from "../assets/sellingImage1.webp";

type NewArrivalItem = {
  id: string;
  brand: string;
  name: string;
  price: string;
  image: string;
};

const items: NewArrivalItem[] = [
  {
    id: "na-1",
    brand: "Rolex",
    name: "Datejust — Fluted Bezel",
    price: "₱ 385,000",
    image: sellingImage1,
  },
  {
    id: "na-2",
    brand: "Seiko",
    name: "Presage — Cocktail Time",
    price: "₱ 49,000",
    image: watch1,
  },
  {
    id: "na-3",
    brand: "Cartier",
    name: "Tank — Classic",
    price: "₱ 299,000",
    image: sellingImage1,
  },
  {
    id: "na-4",
    brand: "Omega",
    name: "Seamaster — Diver",
    price: "₱ 259,000",
    image: watch1,
  },
];

export default function NewArrivals() {
  return (
    <section className="bg-[#F6F0D7]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">
              Fresh drop
            </div>
            <div className="mt-2 text-3xl md:text-4xl font-black text-black">
              New Arrivals
            </div>
            <div className="mt-2 text-sm font-medium text-black/60 max-w-xl">
              Latest additions curated for collectors—ready to inquire.
            </div>
          </div>

          <a
            href="#inquire"
            className="rounded-md bg-green-700 px-4 py-3 text-sm font-black uppercase text-white shadow-lg shadow-green-900/20 hover:bg-green-800 transition"
          >
            Inquire now
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-sm ring-1 ring-white/20">
                  New
                </div>
              </div>

              <div className="p-5 text-left">
                <div className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  {item.brand}
                </div>
                <div className="mt-2 font-black text-base leading-tight text-black">
                  {item.name}
                </div>
                <div className="mt-2 text-sm font-semibold text-black/70">
                  {item.price}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="#inquire"
                    className="rounded-md bg-black/5 px-4 py-2 text-xs font-semibold text-black ring-1 ring-black/10 hover:bg-black/10 transition"
                  >
                    Inquire
                  </a>
                  <a
                    href="#featured"
                    className="rounded-md bg-[#89986D]/15 px-4 py-2 text-xs font-black uppercase text-[#3A432B] hover:bg-[#89986D]/25 transition"
                  >
                    View more
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
