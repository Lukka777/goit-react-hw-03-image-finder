import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import { StyledImageGallery } from "./styles";
class ImageGallery extends React.Component {
  render() {
    return (
      <StyledImageGallery>
        {this.props.images.map((elem) => (
          <ImageGalleryItem src={elem.previewURL} alt={elem.id} key={elem.id}/>
        ))}
      </StyledImageGallery>
    );
  }
}
export default ImageGallery;
