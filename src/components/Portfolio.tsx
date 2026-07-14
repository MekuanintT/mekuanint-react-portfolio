import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Category = "brand" | "web" | "graphic";

interface Item {
  title: string;
  desc?: string;
  image: string;
  category: Category;
  small?: boolean;
  github?: string;
  live?: string;
  lightbox?: boolean;
}

const ITEMS: Item[] = [
  {
    title: "Gallery UI",
    desc: "Modern gallery website with clean layouts, smooth animations, and a responsive premium UI.",
    image: "/image/portfolio/bmw.png",
    category: "graphic",
    github: "https://github.com/MekuanintT/bdac-web-platform",
    live: "https://69a825adb1413a5ed511a72f--unique-llama-7db993.netlify.app/",
  },
  {
    title: "Event Booking System (Main)",
    desc: "Developed a full-featured event booking website that enables users to discover events, check availability, and book tickets online.",
    image: "/image/portfolio/PayFlow.png",
    category: "web",
    github: "https://github.com/MekuanintT/bdac-web-platform",
    live: "https://bdac-web-platform.vercel.app/",
  },
  {
    title: "Best Modern UI Dashboard",
    image: "/image/portfolio/ui.png",
    category: "graphic",
    small: true,
    live: "https://69a825adb1413a5ed511a72f--unique-llama-7db993.netlify.app/",
    lightbox: true,
  },
  {
    title: "React-based event website with live updates",
    image: "/image/portfolio/full.png",
    category: "brand",
    small: true,
    github: "https://github.com/MekuanintT/bdac-web-platform",
    live: "https://bdac-web-platform.vercel.app/",
  },
  {
    title: "Event Booking System",
    image: "/image/portfolio/event-booking.png.png",
    category: "graphic",
    small: true,
    github: "https://github.com/MekuanintT/placeholder-one",
    live: "https://example.com/placeholder-one",
  },
  {
    title: "Gallery UI",
    image: "/image/portfolio/bmwm.png",
    category: "graphic",
    small: true,
    github: "https://github.com/MekuanintT/placeholder-two",
    live: "https://example.com/placeholder-two",
  },
  {
    title: "Agency Website",
    desc: "Modern agency website designed to showcase services, projects, and attract clients through clean UI and strong user experience.",
    image: "/image/portfolio/agency.png",
    category: "brand",
    github: "https://github.com/MekuanintT/mekuanint-web-solutions",
    live: "https://mekuanint-web-solutions.vercel.app/",
  },
  {
     title: "Apple Minimal UI",
    desc: "I build Apple-style websites using React JS, focusing on simplicity, performance, and elegant user experiences.",
    image: "/image/portfolio/apple.png",
    category: "brand",
    github: "https://github.com/MekuanintT/Apple-website",
    live: "https://cute-lily-7a7e71.netlify.app/",
  },
  {
   title: "FuelControl — Fleet Management System",
    desc: "Built a full-stack fleet fuel management system with real-time quota enforcement, JWT authentication, AI copilot, and consumption analytics. React + Node.js + PostgreSQL.",
    image: "/image/portfolio/fuel-d.png",
    category: "web",
    github: "https://github.com/MekuanintT/fuelcontrol",
    live: "https://fuelcontrol-eight.vercel.app/",
  },
];

const FILTERS: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "brand" },
  { label: "Systems", value: "web" },
  { label: "UI/UX Design", value: "graphic" },
];

function ItemCard({
  item,
  index,
  filter,
  onLightbox,
}: {
  item: Item;
  index: number;
  filter: string;
  onLightbox: (img: string) => void;
}) {
  return (
    <div
      key={`${filter}-${item.title}`}
      className="items portfolio-item-anim p-[15px]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="item-img group relative overflow-hidden rounded-[5px]">
        <img src={item.image} alt={item.title} className="w-full object-cover" />
        <div className="item-img-overlay absolute inset-[5px] z-[2] flex translate-y-[10px] flex-col items-center justify-center bg-black/90 p-6 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h6 className="relative mb-[8px] -translate-y-[15px] font-medium transition-transform duration-500 group-hover:translate-y-0">
            {item.title}
          </h6>
          {item.desc && <p className="text-[13px]">{item.desc}</p>}

          <div className="mt-4 flex items-center gap-[50px]">
            {item.lightbox ? (
              <button onClick={() => onLightbox(item.image)} aria-label="View image">
                <i className="fa-brands fa-github text-[30px] text-gold" />
              </button>
            ) : (
              item.github && (
                <a href={item.github} target="_blank" rel="noreferrer" aria-label="View source">
                  <i className="fa-brands fa-github text-[30px] text-gold" />
                </a>
              )
            )}
            {item.live && (
              <a href={item.live} target="_blank" rel="noreferrer" aria-label="View live site">
                <i className="fa-solid fa-play text-[30px] text-gold" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  const bigItems = visible.filter((i) => !i.small);
  const smallItems = visible.filter((i) => i.small);

  return (
    <section id="portfolio" className="portfolio section-group section-padding overflow-hidden bg-ink py-[120px]">
      <style>{`
        @keyframes portfolioFadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .portfolio-item-anim {
          animation: portfolioFadeIn 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>
      <div className="container">
        <div className="section-head mx-auto mb-10 text-center lg:w-8/12">
          <h4>Portfolio</h4>
        </div>

        <div className="filtering mb-10 flex flex-wrap justify-center gap-1 text-center">
          {FILTERS.map((f) => (
            <span
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "cursor-pointer rounded-[30px] px-[30px] py-[9px] text-[12px] font-semibold uppercase tracking-[1px] transition-colors max-sm:px-[12px] max-sm:font-normal",
                filter === f.value
                  ? "bg-gold text-white shadow-[0px_10px_30px_-4px_rgba(0,0,0,0.2)]"
                  : "text-muted hover:text-white"
              )}
            >
              {f.label}
            </span>
          ))}
        </div>

        <div className="gallery grid grid-cols-1 [grid-auto-flow:dense] gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {bigItems.slice(0, 1).map((item, i) => (
            <div key={`${filter}-${item.title}`} className="lg:col-span-2">
              <ItemCard item={item} index={i} filter={filter} onLightbox={setLightbox} />
            </div>
          ))}

          {smallItems.length > 0 && (
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2">
              {smallItems.map((item, i) => (
                <ItemCard key={`${filter}-${item.title}`} item={item} index={i} filter={filter} onLightbox={setLightbox} />
              ))}
            </div>
          )}

          {bigItems.slice(1).map((item, i) => (
            <div key={`${filter}-${item.title}`} className="lg:col-span-2">
              <ItemCard item={item} index={i + 1} filter={filter} onLightbox={setLightbox} />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark text-[28px]" /> 
          </button>
          <img src={lightbox} alt="Preview" className="max-h-[85vh] w-auto rounded-md" />
        </div>
      )}
    </section>
  );
}