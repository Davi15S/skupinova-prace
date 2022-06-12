import type { NextPage } from "next";
import Link from "next/link";
import NewsItem from "../components/NewsItem";
import Image from "next/image";

import { useGetPostsQuery } from "../generated/graphql-types";
import CategoriesItem from "../components/CategoriesItem";

/**
 *
 * @return {NextPage} Homepage
 */
const Home: NextPage = () => {
  const queryResponse = useGetPostsQuery();
  const { data, loading, error } = queryResponse;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="w-full justify-center items-center flex relative h-[590px]">
            <Image
              className=" object-cover "
              layout="fill"
              src="https://images.pexels.com/photos/1269805/pexels-photo-1269805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></Image>
            <div className="darker w-full h-[590px] bg-[#00000066] absolute" />
            <h1 className="absolute font-bold text-white md:text-5xl lg:text-9xl">
              NOVINKY Z PRAHY
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col max-w-[1300px] md:w-[80%]">
              <div className="max-w-[300px] py-10">
                <Link href={"categories"}>
                  <CategoriesItem text="Kategorie" link="/categories" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center sm:gap-x-12">
                {data?.posts?.nodes?.map((item) => (
                  <NewsItem
                    key={item?.id}
                    title={item?.title!}
                    image={item?.featuredImage?.node?.sourceUrl!}
                    content={item?.content!}
                    link={item?.slug!}
                  ></NewsItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
