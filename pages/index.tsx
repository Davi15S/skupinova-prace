import type { NextPage } from "next";
import Link from "next/link";
import NewsItem from "../components/NewsItem";
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

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery();

  return (
    <NewsItem
      title="Březnové vydání fotbalového magazínu Offside"
      image="https://play-lh.googleusercontent.com/cvcQMYwlebh23KkUjShTZ4nzq1ubapxjOAjA5cdL41kdfOWKjfR7kgp0DOilfAnxTa8"
      content="V únorovém vydání fotbalového magazínu Offside můžete zjistit více například o skvělé formě Antonína Baráka, o nejzajímavějších přestupech ve Fortuna Lize nebo o problémech Belgického fotbalisty Lukaka. Toto vše a mnohem více z fotbalového dění u nás i ve světě se dozvíte v tomto novém vydání!"
    ></NewsItem>
  );
};

export default Home;
