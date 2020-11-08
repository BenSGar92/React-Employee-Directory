import React, { Component } from "react";
import API from "../src/utils/API";
import Banner from "../src/components/Banner"
import Container from "../src/components/Container"
import SearchResults from "../src/components/SearchResults"
import SearchBox from "../src/components/SearchBox"


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
      .then(res => this.setState({ employees: res.data.results, results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const filteredUsers = this.state.employees.filter((employee) => {
      const fullName = [employee.name.first, employee.name.last].join(" ").toLowerCase()
      return fullName.includes(this.state.search.toLowerCase())
      
    })
    this.setState({
      results: filteredUsers
    })
  };
  render() {
    return (
      <div>
         <Banner backgroundImage="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?cs=srgb&dl=pexels-fauxels-3184396.jpg&fm=jpg">
          <h1>Employee Directory</h1>
        </Banner>
        <Container>
          <SearchBox onChange={this.handleInputChange} onSubmit={this.handleFormSubmit}>
          </SearchBox>
          <SearchResults results={this.state.results}>
          </SearchResults>
        </Container>
      </div>
    );
  }
}

export default App;
