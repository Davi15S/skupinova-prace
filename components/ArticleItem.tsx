import Image from "next/image";
import React from "react";

function ArticleItem(props: {
  image: string;
  title: string;
  author: string;
  content: string;
  date: JSX.Element;
  categorie: string;
}) {

    let author = props.author;
    author = author[0].toUpperCase() + author.slice(1)

  return (
    <div>
      <div className="image w-full justify-center items-center flex relative h-[589px]">
        <Image
          className=" object-cover"
          layout="fill"
          src={props.image}
        ></Image>
      </div>
      <div className="content py-10 px-5 md:py-24">
        <div className=" flex justify-center md:px-16">
          <p className=" text-[#00084ECC] text-6xl ">{props.title}</p>
        </div>
        <div className="font-Montserrat text-[#00084ECC] flex mt-16 flex-wrap md:px-20">
          <div className="details flex flex-col items-center gap-5 w-full md:w-1/4 p-5">
            <p>{props.date}</p>
            <p>Autor: {author}</p>
            <p className="bg-[#6DBDD03B] w-[199px] h-[45px] flex justify-center items-center">
              {props.categorie}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: props.content }}
            className="text-[20px] w-full md:w-3/4 p-5"
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
