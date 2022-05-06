import { Component } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import News from "./components/News/News";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    query: "",
    isModalOpen: false,
    modalNews: null,
  };

  changeSearch = (query) => {
    this.setState({ query: query });
  };

  toggleModal = (modalNews = null) => {
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen, // true || false
      modalNews: modalNews, // value || null
    }));
  };

  render() {
    const { query, isModalOpen, modalNews } = this.state;
    return (
      <div className="App">
        <SearchForm changeSearch={this.changeSearch} />
        <News query={query} toggleModal={this.toggleModal} />
        {isModalOpen && (
          <Modal modalNews={modalNews} closeModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
