import React from "react";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { Outlet, useParams } from "react-router";

function ImageDetail() {
    const {id} = useParams()
    console.log(id)
  return (
    <div className="flex flex-col gap-4 px-5 sm:px-25 pb-20">
      <div className="flex items-center justify-end gap-4">
        <button className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all">
          <TfiDownload className="text-black100 w-5 h-5" />
        </button>
        <button className="w-11.25 h-8 cursor-pointer hover:bg-black100/5 flex items-center justify-center transition-all">
          <PiShareFatLight className="text-black100 w-5 h-5" />
        </button>
      </div>
      {/* <Outlet /> */}
      <div className="w-full h-150 bg-black/15">
      <img src={`/imgs/img_${id}.jpg`} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default ImageDetail;
