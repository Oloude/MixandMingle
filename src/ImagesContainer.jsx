import { useState } from "react";
import { Link } from "react-router";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const numbers = Array.from({ length: 21 }, (_, index) => index + 1);

function ImagesContainer() {
  const [loading, setLoading] = useState(false);

  const images = numbers.map((i) => ({
    name: `img_${i}.jpg`,
    url: `/imgs/img_${i}.jpg`,
  }));

  const handleDownload = async () => {
    try {
      setLoading(true);
      console.log("clicked");

      const zip = new JSZip();
      const folder = zip.folder("Mix-and-Mingle");

      await Promise.all(
        images.map(async (image) => {
          const response = await fetch(image.url);

          if (!response.ok) {
            throw new Error(`Failed to fetch ${image.url}`);
          }

          const blob = await response.blob();
          folder?.file(image.name, blob);
        }),
      );

      const zipBlob = await zip.generateAsync({
        type: "blob",
      });

      saveAs(zipBlob, "Mix-and-Mingle-Gallery.zip");
    } catch (error) {
      console.error(error);
      toast.error("Unable to download image.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      setLoading(true);

      // Fetch all images as File objects
      const files = await Promise.all(
        images.map(async (image) => {
          const response = await fetch(image.url);

          if (!response.ok) {
            throw new Error(`Failed to fetch ${image.url}`);
          }

          const blob = await response.blob();

          return new File([blob], image.name, {
            type: blob.type,
          });
        }),
      );

      // Share files if supported
      if (
        navigator.canShare &&
        navigator.canShare({ files }) &&
        navigator.share
      ) {
        await navigator.share({
          title: "Mix & Mingle Gallery",
          text: "Check out these amazing photos!",
          files,
        });
      } else if (navigator.share) {
        // Fallback: Share page URL
        await navigator.share({
          title: "Mix & Mingle Gallery",
          text: "Check out these amazing photos!",
          url: window.location.href,
        });
      } else {
        // Last fallback: Copy URL
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard.");
      }
    } catch (error) {
      // Ignore AbortError (user cancelled)
      if (error.name !== "AbortError") {
        console.error(error);
        toast.error("Unable to share image.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 sm:px-25 py-10 flex flex-col gap-10 scroll-smooth ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-raleway text-base font-bold text-black100 uppercase tracking-[1.46px]">
            MIX & MINGLE
          </h2>

          <p className="text-black100/60 text-[9px] font-lato uppercase tracking-[1.8px]">
            ZIG STUDIOS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              alert("cliked");
              console.log("clicked");
              handleDownload();
            }}
            disabled={loading}
            className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all disabled:opacity-50 relative z-9999"
            title="Download Gallery"
          >
            <TfiDownload className="text-black100 w-5 h-5" />
          </button>

          <button
            onClick={handleShare}
            disabled={loading}
            className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all disabled:opacity-50"
            title="Share Gallery"
          >
            <PiShareFatLight className="text-black100 w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {numbers.map((i) => (
          <Link
            key={i}
            to={`img/${i}`}
            className="bg-black/10 h-50 overflow-hidden"
          >
            <img
              src={`/imgs/img_${i}.jpg`}
              alt={`Image ${i}`}
              loading="lazy"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>

      <a
        href="https://wa.me/2348077182884"
        target="_blank"
        rel="noopener noreferrer"
        className="w-35 h-10 self-center flex items-center justify-center bg-black text-white text-[11px] uppercase tracking-[1.65px] hover:border hover:text-black hover:bg-white cursor-pointer hover:border-black transition-all"
      >
        View More
      </a>
    </section>
  );
}

export default ImagesContainer;
