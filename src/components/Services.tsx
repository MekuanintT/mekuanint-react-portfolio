const SERVICES = [
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Web Design",
    desc: "I design modern, clean, and responsive interfaces that deliver outstanding user experiences across all devices.",
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Frontend Development",
    desc: "I build fast, interactive, and responsive web applications using React, Vite, Tailwind CSS, and modern JavaScript.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    desc: "I build secure REST APIs using Node.js and Express.js with JWT authentication and role-based access control.",
  },
  {
    icon: "fa-solid fa-database",
    title: "Database Design",
    desc: "I design and manage PostgreSQL databases with optimized queries, transactions, and data integrity enforcement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services section-group section-padding bg-void py-[120px]">
      <div className="container">
        <div className="section-head mb-[80px] text-center">
          <h4>Services</h4>
        </div>
        <div className="row grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className="item mb-md50 bg-panel px-[20px] py-[50px] text-center">
              <span className="icon group relative z-[3] mb-[30px] inline-block h-[85px] w-[85px] text-[45px] leading-[85px] text-gold transition-colors duration-300 hover:text-white">
                <i className={icon} />
                <span className="absolute inset-0 -z-10 rotate-45 rounded-[30px] bg-white/5 transition-all duration-300 group-hover:rotate-0 group-hover:bg-gold" />
              </span>
              <h6 className="mb-[15px] text-[16px] font-normal">{title}</h6>
              <p className="text-[14px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
