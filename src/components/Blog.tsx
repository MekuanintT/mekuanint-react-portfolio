const POSTS = [
  {
    image: "/image/blog/blog1.png",
    tags: ["Building a Full-Stack App from Scratch", "June 2026"],
    title: "How I built FuelControl with React, Node.js, and PostgreSQL.",
  },
  {
    image: "/image/blog/blog2.png",
    tags: ["MySQL to PostgreSQL Migration", "June 2026"],
    title: "Lessons learned migrating a live backend mid-build.",
  },
  {
    image: "/image/blog/blog3.png",
    tags: ["JWT Authentication in Node.js", "June 2026"],
    title: "Implementing secure role-based access control with Express.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog section-group section-padding bg-void py-[120px]">
      <div className="container">
        <div className="section-head mx-auto mb-[80px] text-center lg:w-8/12">
          <h4>My Blog</h4>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <div key={post.title} className="item relative overflow-hidden rounded-[4px] shadow-[0px_15px_40px_rgba(0,0,0,0.1)]">
              <div className="post-img position-re o-hidden group overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blur-[2px] transition-all duration-500 group-hover:scale-105 group-hover:blur-0"
                />
                <div className="content absolute bottom-[-60px] left-0 w-full p-[30px] transition-all duration-300 group-hover:bottom-0">
                  <span className="data mb-[10px] block text-[11px] uppercase text-gold">
                    {post.tags[0]} <span className="mx-1">/</span> {post.tags[1]}
                  </span>
                  <h5 className="mb-[30px] text-[25px] font-medium leading-[1.5] text-white">{post.title}</h5>
                 <a 
                    href="#portfolio"
                    className="more mt-[30px] border-b border-gold pb-[10px] text-[13px] font-medium tracking-[2px] transition-colors hover:text-gold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}