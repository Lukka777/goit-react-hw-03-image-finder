import React from "react";
import Modal from "../Modal";
import { StyledGalleryItemImage, StyledImageGalleryItem } from "./styles";
class ImageGalleryItem extends React.Component {
  state = { modalOpen: false };
  render() {
    return (
      <>
        <StyledImageGalleryItem>
          <StyledGalleryItemImage
            src={this.props.src}
            alt={this.props.alt}
            onClick={this.onModalOpen}
          />
        </StyledImageGalleryItem>
        {this.state.modalOpen === true && (
          <Modal
            src={this.props.largeImageURL}
            alt={this.props.alt}
            onClick={this.onModalClose}
          />
        )}
      </>
    );
  }
  onModalOpen = () => {
    this.setState({ ...this.state, modalOpen: true });
  };

  onModalClose = () => {
    this.setState({ ...this.state, modalOpen: false });
  };
}

export default ImageGalleryItem;
