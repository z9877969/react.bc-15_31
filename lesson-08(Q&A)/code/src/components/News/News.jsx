import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
// import news from "../../data/news.json";
import { Component } from "react";
import { getNewsApi } from "../../utils/newsApi";

class News extends Component {
  state = {
    news: [],
    page: 1,
    totalNews: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.query !== this.props.query) {
      //   this.getNews();
      this.setState({ news: [], page: 1 });
    }
    if (
      prevState.page !== this.state.page ||
      (prevProps.query !== this.props.query && this.state.page === 1)
    ) {
      if (this.props.query === "") {
        this.setState({ error: new Error("Value is required!!!") });
      } else {
        this.getNews();
      }
    }

    if (prevState.news !== this.state.news && prevState.news.length > 0) {
      // window.scrollTo({
      //   top: snapshot - (55 + 20 + 70),
      //   behavior: "smooth",
      // });
      // console.log("window.innerHeight :>> ", window.innerHeight);
      window.scrollBy({
        top: window.innerHeight - 55,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  getSnapshotBeforeUpdate() {
    const scrollHeight = document.body.scrollHeight;
    return scrollHeight;
  }

  getNews = () => {
    this.setState({ isLoading: true, error: null });
    getNewsApi({ q: this.props.query, page: this.state.page })
      .then(({ news, totalNews }) => {
        if (!news.length) {
          throw new Error("No news by your request");
        }
        this.setState((prev) => ({ news: [...prev.news, ...news], totalNews }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleMoreNews = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { news, isLoading, error, totalNews, status } = this.state;
    const { toggleModal } = this.props;
    return (
      <>
        {isLoading && <p>Loading...</p>}
        <NewsList news={news} openModal={toggleModal} />
        {news.length > 0 && news.length < totalNews && (
          <Button handleMoreNews={this.handleMoreNews} />
        )}
        {error && <h2>{error.message}</h2>}
      </>
    );
    // switch (status) {
    //   case "idle":
    //     return <h1>Base content for user</h1>;
    //   case "reject":
    //     return <h1>{error.message}</h1>;
    //   default:
    //     return (
    //       <>
    //         {status === "pending" && <h1>Loading...</h1>}
    //         <NewsList news={news} openModal={toggleModal} />
    //         {news.length > 0 && news.length < totalNews && (
    //           <Button handleMoreNews={this.handleMoreNews} />
    //         )}
    //       </>
    //     );
    // }
  }
}

export default News;
