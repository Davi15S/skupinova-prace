import type { NextPage } from "next";
import Link from "next/link";
import NewsItem from "../components/NewsItem";
import Image from "next/image";

import {
  useGetCategoriesQuery,
  useGetPostsQuery,
} from "../generated/graphql-types";

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
        <div></div>
      ) : (
        <div className="mainscreen">
          <div className="image w-full justify-center items-center flex relative h-[589px]">
            <Image
              className=" object-cover "
              layout="fill"
              src="https://images.pexels.com/photos/1269805/pexels-photo-1269805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></Image>
            <div className="darker w-full h-[589px] bg-[#00000066] absolute"></div>
            <h1 className="absolute font-bold text-white md:text-5xl lg:text-9xl">
              NOVINKY Z PRAHY
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
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
      )}
    </div>
  );
};

export default Home;
