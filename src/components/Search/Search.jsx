import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { SearchContainer } from "./SearchStyle.Styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { withRouter } from "react-router";

class Search extends React.Component {
  state = {
    tmdbData: null,
    searchTerm: "",
    searchResults: [],
    placeholder: "Search for..",
    moviesResults: null,
    isClean: true,
    text: "go",
  };

  handleClick = (e) => {
    this.props.history.push({
      pathname: `/search/q=${this.state.searchTerm}/page/1`,
      state: {
        type: "search",
        searchTerm: this.state.searchTerm,
      },
    });
  };

  updateSearchTerm = (value) => {
    this.setState({ searchTerm: value }, () => {
      this.props.setPathType("search", value);
    });
  };

  render() {
    return (
      <>
        <SearchContainer primary>
          <CustomButton value={this.state.searchTerm}></CustomButton>
          <Input
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.searchTerm}
            onChangeFunction={this.updateSearchTerm}
          />

          <Button handleClick={this.handleClick} content={this.state.text} />
        </SearchContainer>
      </>
    );
  }
}

export default withRouter(Search);
