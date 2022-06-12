import React from "react";

function CategoriesItem(props: {text: string}) {
  return (
    <div className="text-center bg-gradient-to-b from-cyan-200 to-gray-50 p-4 rounded-sm space-y-2 shadow-sm">
      <h1 className="font-mono text-[#00084ECC] text-2xl p-2 font-bold">
        {props.text}
      </h1>
    </div>
  );
}

export default CategoriesItem;
