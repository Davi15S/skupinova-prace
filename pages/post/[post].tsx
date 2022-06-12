import { useRouter } from "next/router";
import React from "react";
import ArticleItem from "../../components/ArticleItem";
import { useGetArticleQuery } from "../../generated/graphql-types";
import Moment from "react-moment";

function Post() {
  const { query } = useRouter();
  const queryResponse = useGetArticleQuery({
    variables: { slug: query.post as string },
  });
  const { data, loading, error } = queryResponse;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ArticleItem
          image={data?.postBy?.featuredImage?.node?.sourceUrl!}
          title={data?.postBy?.title!}
          author={data?.postBy?.author?.node?.name!}
          content={data?.postBy?.content!}
          date={<Moment format="DD.MM.YYYY">{data?.postBy?.date!}</Moment>}
          categorie={data?.postBy?.categories?.nodes ? data.postBy.categories.nodes[0]?.name! : ""}
        />
      )}
    </div>
  );
}

export default Post;
