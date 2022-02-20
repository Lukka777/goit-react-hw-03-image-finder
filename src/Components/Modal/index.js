import React from "react";
import { ModalContent, ModalWindow } from "./styles";
class Modal extends React.Component {
  render() {
    return (
      <ModalWindow onClick={this.props.onClick}>
        <ModalContent>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalContent>
      </ModalWindow>
    );
  }
}
export default Modal;
