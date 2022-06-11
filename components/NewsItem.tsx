import { title } from "process";
import React from "react";

function NewsItem(props: { title: string; image: string; content: string }) {
  return (
    <div className="w-[350px] h-[480px] bg-gradient-to-b flex flex-col  from-[#36b4d34d] to-[#00c3ff11]">
      <img src={props.image} className="p-[25px] object-cover h-1/2" alt="" />
      <div className="content h-1/2 ">
        <h2 className="leading-[22px] pt-[13px] px-[25px] font-semibold text-[18px]">
          {props.title}
        </h2>
        <p className="text-[16px] px-[25px] py-[13px] font-light leading-[17px]">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default NewsItem;
