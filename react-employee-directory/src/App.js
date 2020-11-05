import React, { Component } from "react";
import API from "../src/utils/API";
import Banner from "../src/components/Banner"
import Container from "../src/components/Container"
import SearchResults from "../src/components/SearchResults"
import SearchBox from "../src/components/SearchBox"
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

class App extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // API.getDogsOfBreed(this.state.search)
    //   .then(res => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
         <Banner backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <h1>Employee Directory</h1>
        </Banner>
        <Container>
          <SearchBox>
          </SearchBox>
          <SearchResults results={this.state.employees}>
          </SearchResults>
        </Container>
      </div>
    );
  }
}

export default App;
