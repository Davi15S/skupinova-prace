import React from "react";
import CategoriesItem from "../components/CategoriesItem";
import { useGetCategoriesQuery } from "../generated/graphql-types";

function Pages() {
  const { data, error, loading } = useGetCategoriesQuery();

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <div className="relative overflow-hidden">
            <img
              className="w-full h-[500px] opacity-70 object-cover"
              alt="xxx"
              src="https://lp-cms-production.imgix.net/2021-08/shutterstockRF_300856853.jpg?auto=format&q=40&w=1920&ar=16%3A9&h=1080"
            />
            <div className="absolute w-full invisible md:visible py-2.5 pl-52 bottom-0 inset-x-0 font-mono text-[#00084ECC] text-[100px]">
              Kategorie
            </div>
          </div>

          <div className=" flex justify-center">
            <p className="font-mono text-[#00084ECC] text-4xl p-12">
              Kategorie
            </p>
          </div>

          <div className="flex justify-center">
            <div className="xl:w-[1300px] lg:w-[1000px] md:w-[700px] w-[350px] py-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
              {data?.categories?.nodes?.map((item) => (
                <CategoriesItem key={item?.id} text={item?.name!} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pages;
