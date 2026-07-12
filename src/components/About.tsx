import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "React.js", value: 90 },
  { name: "Node.js", value: 85 },
  { name: "Express.js", value: 80 },
  { name: "PostgreSQL", value: 75 },
];

const SOCIALS = [
  { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/share/1MGPZxugL8/" },
  { icon: "fa-brands fa-x-twitter", href: "#0" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/mequ_anint?igsh=ZDM1YWo3MWtldzh5" },
  { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/mekuanint-tewende-a04861256/?skipRedirect=true" },
  { icon: "fa-brands fa-telegram", href: "https://t.me/LightMQ_XII" },
];

function SkillBar({ name, value }: { name: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="skill-item mb-[30px] last:mb-0" ref={ref}>
      <h6 className="mb-[10px] text-[14px] font-normal">{name}</h6>
      <div className="skill-progress relative h-[8px] w-full rounded-[20px] bg-[#333]">
        <div
          className="progres relative h-full rounded-[20px] bg-gold"
          style={{ width: `${width}%` }}
          data-value={`${value}%`}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about section-group bg-ink">
      <div className="container">
        <div className="row grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:items-center">
          <div className="valign flex">
            <div className="skills w-full py-[100px] max-md:py-0 max-md:text-center">
              <div className="section-head mb-[80px]">
                <h4>About Me</h4>
              </div>
              {SKILLS.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div
            className="hero-img bg-img self-stretch bg-cover bg-[position:50%_50%] max-md:h-[400px]"
            style={{ backgroundImage: "url(/image/mekuanint.png)" }}
          />

          <div>
            <div className="content py-[100px] max-md:py-[50px] max-md:text-center">
              <h6 className="mb-[10px] text-[12px] font-light uppercase tracking-[8px]">
                Who am i
              </h6>
              <h4 className="mb-[40px] inline-block bg-gold px-[10px] py-[5px] text-[30px] font-semibold uppercase tracking-[4px] text-white">
                Mekuanint Tewende.
              </h4>
              <h5 className="mb-[10px] text-[18px]">
                Full-Stack Developer &amp; Web Designer
              </h5>
              <p className="mb-[10px]">
                I am a full-stack developer who builds modern, responsive, and
                production-ready web applications — from clean frontend UIs to
                secure backend APIs with database integration.
              </p>
              <p>
                I work with React, Node.js, Express, and PostgreSQL to deliver
                complete systems that solve real-world problems. My focus is on
                clean architecture, smooth user experience, and reliable
                performance across all devices.
              </p>

              <div className="social mt-[40px]">
                <span className="relative pr-[50px] text-[12px] text-gold after:absolute after:right-0 after:top-1/2 after:h-px after:w-[40px] after:bg-[#eee]">
                  Follow Me :
                </span>
                {SOCIALS.map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mx-[10px] text-[12px] transition-colors hover:text-gold"
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
