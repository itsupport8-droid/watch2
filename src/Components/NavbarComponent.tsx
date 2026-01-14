import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "w-full transition-all duration-300 " +
        (isScrolled
          ? "bg-[#89986D]/95 shadow-lg"
          : "bg-[#89986D]/35 backdrop-blur-md")
      }
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-3"
        >
          <div className="h-9 w-9 rounded-xl bg-black/15 ring-1 ring-white/15" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.28em] uppercase text-white/90">
              Inspired
            </div>
            <div className="-mt-1 text-lg font-black uppercase tracking-wide">
              Timepieces
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#categories"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Categories
          </a>
          <a
            href="#brands"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Brands
          </a>
          <a
            href="#new-arrivals"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            New Arrivals
          </a>
          <a
            href="#featured"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Featureddasds
          </a>
          <a
            href="#footer"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
