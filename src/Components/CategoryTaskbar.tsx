import { motion } from "framer-motion";
import rolex from "../assets/rolex.jpg";
import { useNavigate } from "react-router-dom";

const assetImages = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const imageByNameLower = Object.fromEntries(
  Object.entries(assetImages).map(([path, url]) => {
    const filename = path.split("/").pop() ?? "";
    const baseName = filename.replace(/\.[^.]+$/, "");
    return [baseName.toLowerCase(), url];
  })
) as Record<string, string>;

const CategoryTaskbar = () => {
  const navigate = useNavigate();
  const categories = [
    "Rolex",
    "Seiko",
    "Casio",
    "GShock",
    "Cartier",
    "Omega",
    "Tag Heuer",
    "Tissot",
    "Patek Philippe",
  ];

  const getCategoryImageSrc = (label: string) => {
    // Matches files in src/assets by filename (case-insensitive):
    // e.g. "Rolex" -> src/assets/Rolex.jpg
    return imageByNameLower[label.toLowerCase()] ?? rolex;
  };

  return (
    <div className="bg-[#F6F0D7] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3 p-2 w-full px-6 md:px-10 pt-10 items-center justify-center">
      {categories.map((label, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05 }}
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={() => navigate(`/category/${encodeURIComponent(label)}`)}
            className="group relative h-40 w-full overflow-hidden rounded-2xl bg-[#89986D] shadow-lg ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:bg-[#73805b] hover:shadow-xl"
            aria-label={`Open ${label} category`}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={getCategoryImageSrc(label)}
              alt={label}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = rolex;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <div className="inline-flex rounded-md bg-black/35 px-2 py-1 text-xs font-black uppercase tracking-widest text-white/95 backdrop-blur-sm">
                {label}
              </div>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryTaskbar;
