import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";

const numbers = Array.from({ length: 21 }, (_, index) => index + 1);

function ImagesContainer() {
  const navigate = useNavigate();
  return (
    <section className="px-5 sm:px-25 py-10 flex flex-col gap-10 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-raleway text-base font-bold text-black100 uppercase tracking-[1.46px]">
            mix & mingle
          </h2>
          <p className="text-black100/60 text-[9px] font-lato uppercase tracking-[1.8px]">
            zig studios
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all">
            <TfiDownload className="text-black100 w-5 h-5" />
          </button>
          <button className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all">
            <PiShareFatLight className="text-black100 w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {numbers.map((i) => (
          <Link key={i} to={`img/${i}`} className="bg-black/10 h-50">
            <img
              src={`/imgs/img_${i}.jpg`}
              className="w-full h-full object-cover object-center"
            />
          </Link>
        ))}
      </div>
      <a
        href="https://wa.me/2348077182884"
        target="_blank"
        className="w-35 h-10 self-center flex items-center justify-center bg-black text-white text-[11px] uppercase tracking-[1.65px] hover:border hover:text-black hover:bg-white cursor-pointer hover:border-black transition-all"
      >
        View More
      </a>
    </section>
  );
}

export default ImagesContainer;
