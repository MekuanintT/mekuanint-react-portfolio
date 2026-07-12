const SOCIALS = [
  { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/share/1MGPZxugL8/" },
  { icon: "fa-brands fa-x-twitter", href: "https://twitter.com/MekuanintTewende" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/mequ_anint?igsh=ZDM1YWo3MWtldzh5" },
  { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/mekuanint-tewende-a04861256/?skipRedirect=true" },
  { icon: "fa-brands fa-telegram", href: "https://t.me/LightMQ_XII" },
];

export default function Footer() {
  return (
    <footer className="bg-void py-[80px] text-center">
      <div className="container">
        <a href="#0" className="logo mx-auto inline-block w-[90px]">
          <img src="/image/logo.png" alt="logo" />
        </a>

        <div className="social mt-[15px]">
          {SOCIALS.map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative z-[2] mx-[10px] my-[15px] inline-flex h-[40px] w-[40px] items-center justify-center text-gold transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-0 -z-10 rotate-45 rounded-[10px] bg-[#222] transition-all duration-300 group-hover:rotate-0 group-hover:bg-gold" />
              <i className={icon} />
            </a>
          ))}
        </div>

        <p className="text-[12px] font-normal uppercase tracking-[2px] text-[#999]">
          &copy; 2026 Mekuanint Tewende. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
