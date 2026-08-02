import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { useParams } from "react-router";
import { toast } from "react-toastify";

function ImageDetail() {
  const { id } = useParams();

  const imageUrl = `/imgs/img_${id}.jpg`;
  const imageName = `img_${id}.jpg`;

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = imageName;

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      toast.error("Unable to download image.");
    }
  };

  const handleShare = async () => {
    try {
      const response = await fetch(imageUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      const blob = await response.blob();

      const file = new File([blob], imageName, {
        type: blob.type,
      });

      // Share the image file if supported
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: `Image ${id}`,
          text: "Check out this photo!",
          files: [file],
        });
        return;
      }

      // Fallback: share page URL
      if (navigator.share) {
        await navigator.share({
          title: `Image ${id}`,
          url: window.location.href,
        });
        return;
      }

      // Last fallback
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard.");
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
        toast.error("Unable to share image.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 px-5 sm:px-25 pb-20">
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={handleDownload}
          className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all"
        >
          <TfiDownload className="text-black100 w-5 h-5" />
        </button>

        <button
          onClick={handleShare}
          className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all"
        >
          <PiShareFatLight className="text-black100 w-5 h-5" />
        </button>
      </div>

      <div className="w-full h-150 bg-black/15">
        <img
          src={imageUrl}
          alt={`Image ${id}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ImageDetail;
