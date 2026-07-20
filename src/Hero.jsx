import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-black/30 h-200 bg-hero">
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="font-raleway text-white font-bold text-5xl uppercase tracking-[2.6px]">
          Mix & mingle
        </h1>
        <p className="font-lato text-white uppercase text-sm tracking-[2.1px]">
          2nd august, 2026
        </p>
      </div>

      <a
        href="https://wa.me/2348077182884"
        target="_blank"
        className="w-35 h-10 flex items-center justify-center border border-white text-white text-[11px] uppercase tracking-[1.65px] hover:bg-black hover:border-black transition-all"
      >
        View Gallery
      </a>
    </section>
  );
}

export default Hero;
