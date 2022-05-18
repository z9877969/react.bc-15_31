import NewsList from "../NewsList/NewsList";
import SearchForm from "../SearchForm/SearchForm";
import newsData from "../../data/news.json";

const News = () => {
  return (
    <>
      <SearchForm />
      
      <NewsList news={newsData} />
    </>
  );
};

export default News;
