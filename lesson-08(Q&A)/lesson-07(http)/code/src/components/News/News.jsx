import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
// import news from "../../data/news.json";
import { Component } from "react";
import { getNewsApi } from "../../utils/newsApi";

class News extends Component {
  state = {
    news: [], // [...]
    // page: 0, // 3
    page: 1,
    totalNews: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
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
  }

  //   getNews = () => {
  //     this.setState({ isLoading: true });
  //     getNewsApi({ q: this.props.query, page: this.state.page })
  //       .then((news) => this.setState({ news }))
  //       .catch((error) => this.setState({ error }))
  //       .finally(() => this.setState({ isLoading: false }));
  //   };

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
    const { news, isLoading, error, totalNews } = this.state;
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
  }
}

export default News;
