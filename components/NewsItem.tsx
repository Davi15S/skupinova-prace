import Link from "next/link";
import React from "react";

function NewsItem(props: { title: string; image: string; content: string; link: string }) {
  return (
    <Link href={`/post/${props.link}`}>
      <div className="w-[350px] h-[480px] bg-gradient-to-b flex flex-col  from-[#36b4d34d] to-[#00c3ff11] m-10 p-[25px] cursor-pointer">
        <img src={props.image} className="object-cover h-1/2" alt="" />
        <div className="content h-1/2 py-5 overflow-hidden">
          <h2 className="leading-[22px] pt-[13px]font-semibold text-[18px]">
            {props.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: props.content }}
            className="text-[16px] py-[13px] font-light leading-[17px]"
          />
        </div>
      </div>
    </Link>
  );
}

export default NewsItem;
