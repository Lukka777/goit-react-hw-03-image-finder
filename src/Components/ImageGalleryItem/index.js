import React from "react";
import { StyledGalleryItemImage, StyledImageGalleryItem } from "./styles";
class ImageGalleryItem extends React.Component {
  render() {
    return (
      <StyledImageGalleryItem>
        <StyledGalleryItemImage src={this.props.src} alt={this.props.alt} />
      </StyledImageGalleryItem>
    );
  }
}
export default ImageGalleryItem;
