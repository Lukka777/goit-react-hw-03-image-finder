import ImageGallery from "./Components/ImageGallery";
import SearchBar from "./Components/Searchbar";
import Button from "./Components/Button";
import React from "react";
import { fetchImage } from "./services/api";

class App extends React.Component {
  state = { filterValue: "", page: 1, images: [] };
  render() {
    return (
      <>
        <SearchBar
          value={this.state.filterValue}
          onChange={this.onChangeInput}
          onClick={this.onSearchClick}
        />
        <ImageGallery images={this.state.images} />
        {this.state.images.length !== 0 && (
          <Button onClick={this.onLoadClick} title="Load more" />
        )}
      </>
    );
  }
  onChangeInput = (event) => {
    this.setState({ ...this.state, filterValue: event.target.value });
  };
  onSearchClick = async (event) => {
    event.preventDefault();
    const images = await fetchImage(this.state.filterValue, this.state.page);
    this.setState({ ...this.state, images: images });
    console.log(images);
  };
  onLoadClick = async () => {
    const newImages = await fetchImage(this.state.pages + 1);
    this.setState({ images: [...this.state.images, ...newImages] });
  };
}
export default App;
