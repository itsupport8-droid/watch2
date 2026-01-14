export default function BrandMarquee() {
  const text = "INSPIRED TIMEPIECES";
  const loop = Array.from({ length: 16 }, () => text);

  return (
    <section className="bg-[#F6F0D7]">
      <div className="mx-auto w-full py-10">

        <div className="mt-6 overflow-hidden rounded-2xl ">
          <div className="relative">
            <div className="brand-track flex w-max items-center gap-8 py-5 px-6">
              {loop.map((value, i) => (
                <div key={`${value}-${i}`} className="inline-flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full" />
                  <span className="text-sm md:text-4xl font-black uppercase tracking-[0.35em] text-black/80 whitespace-nowrap">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F6F0D7] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F6F0D7] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
