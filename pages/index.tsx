import type { NextPage } from "next";
import Link from "next/link";
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
        <h1>Ahoj</h1>
      ) : (
        <div>
          {data?.posts?.nodes?.map((item) => (
            <div>
              <h1>{item?.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item?.content! }}></div>
              <img src={item?.featuredImage?.node?.sourceUrl!} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
