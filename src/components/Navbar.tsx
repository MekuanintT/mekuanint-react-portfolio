import { useEffect, useState } from "react";
import { scrollToSection } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={cn(
        "navbar fixed left-0 top-0 z-[9] min-h-[80px] w-full bg-transparent transition-colors duration-500",
        scrolled && "bg-[#222]"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="logo w-[90px] py-[15px]"
          href="#0"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
          <img src="/image/logo.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler border-0 bg-transparent p-2 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="icon-bar text-white">
            <i className="fa-solid fa-bars" />
          </span>
        </button>

        <div
          className={cn(
            "navbar-collapse w-full lg:!block lg:w-auto",
            open
              ? "block max-h-[340px] overflow-auto bg-[#111] py-[10px] text-center"
              : "hidden"
          )}
        >
          <ul className="navbar-nav ml-auto flex flex-col lg:flex-row lg:items-center">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
              <a  
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id);
                  }}
                  className={cn(
                    "nav-link mx-[18px] my-[15px] block text-[13px] font-medium tracking-[0.5px] text-[#eee] transition-colors duration-500 lg:inline-block",
                    active === item.id && "!text-gold"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}