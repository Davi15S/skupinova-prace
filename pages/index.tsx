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
      <NewsItem
        title="Březnové vydání fotbalového magazínu Offside"
        image="https://play-lh.googleusercontent.com/cvcQMYwlebh23KkUjShTZ4nzq1ubapxjOAjA5cdL41kdfOWKjfR7kgp0DOilfAnxTa8"
        content="V únorovém vydání fotbalového magazínu Offside můžete zjistit více například o skvělé formě Antonína Baráka, o nejzajímavějších přestupech ve Fortuna Lize nebo o problémech Belgického fotbalisty Lukaka. Toto vše a mnohem více z fotbalového dění u nás i ve světě se dozvíte v tomto novém vydání!"
      ></NewsItem>
    </div>
  );
};

export default Home;
