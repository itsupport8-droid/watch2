import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/NavbarComponent";
import { productsByCategory } from "./categoryData";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const rawName = params.name ?? "";
  const categoryName = useMemo(() => decodeURIComponent(rawName), [rawName]);
  const products = productsByCategory[categoryName.toLowerCase()] ?? [];
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [categoryName]);

  return (
    <div className="min-h-dvh h-full bg-[#F6F0D7]">
      <div className="sticky top-0 z-30">
        <Navbar />
      </div>

      {loading ? (
        <div className="flex justify-center items-center text-black h-dvh">
          <div className="w-24 h-24 flex text-xs bg-[#d3e4b380] justify-center items-center relative rounded-full shadow-md">
            <div className="text-[#5a6448]">Loading...</div>
            <div className="absolute border-t-2 rounded-full border-[#89986D] animate-spin w-full h-full"></div>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">
                Category
              </div>
              <div className="mt-2 text-3xl md:text-4xl font-black text-black">
                {categoryName || "Category"}
              </div>
              <div className="mt-2 text-sm font-medium text-black/60">
                Browse available variety for this category.
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.length === 0 ? (
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 text-black">
                <div className="font-black text-lg">No items found</div>
                <div className="mt-2 text-sm text-black/60">
                  Add products for “{categoryName}” in
                  [src/Category/categoryData.ts](src/Category/categoryData.ts).
                </div>
              </div>
            ) : (
              products.map((product, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={product.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 text-left">
                    <div className="text-xs font-semibold uppercase tracking-widest text-black/50">
                      {categoryName}
                    </div>
                    <div className="mt-2 font-black text-lg leading-tight text-black">
                      {product.name}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-black/70">
                      {product.price}
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href="/#inquire"
                        className="rounded-md bg-green-700 px-4 py-2 text-xs font-black uppercase text-white hover:bg-green-800 transition"
                      >
                        Inquire
                      </a>
                      <button
                        type="button"
                        className="rounded-md bg-black/5 px-4 py-2 text-xs font-semibold text-black ring-1 ring-black/10 hover:bg-black/10 transition"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
