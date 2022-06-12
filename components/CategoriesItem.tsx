import Link from "next/link";
import React from "react";

function CategoriesItem(props: { text: string; link?: string }) {
  return (
    <Link href={props.link ? props.link : ""}>
      <div className="text-center bg-gradient-to-b from-cyan-200 to-gray-50 p-4 rounded-sm space-y-2 shadow-sm cursor-pointer">
        <h1 className="font-mono text-[#00084ECC] text-2xl p-2 font-bold">
          {props.text}
        </h1>
      </div>
    </Link>
  );
}

export default CategoriesItem;
