import { scrollToSection } from "@/hooks/useScrollSpy";
import AnimatedHeadline from "./AnimatedHeadline";

export default function Hero() {
  return (
    <header
      id="home"
      className="header relative flex min-h-[110vh] items-center bg-ink bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/image/33.jpg)",
      }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="caption mt-[50px] w-full text-center">
          <h2 className="text-[70px] font-light tracking-[4px] max-md:text-[30px] max-xs:text-[16px]">
            Welcome!
          </h2>
          <h1 className="cd-headline push my-[15px] text-[60px] font-bold leading-normal tracking-[2px] max-md:text-[45px] max-md:leading-[1.4] max-sm:text-[25px] max-xs:text-[20px]">
            <span className="blc">I am</span>{" "}
            <AnimatedHeadline />
          </h1>
          <a
            href="#0"
            className="butn butn-bord mt-[30px]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}
          >
            <span>View Work</span>
          </a>
          <a
            href="#0"
            className="butn butn-light mt-[30px]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            <span>Hire Me!</span>
          </a>
        </div>
      </div>
    </header>
  );
}