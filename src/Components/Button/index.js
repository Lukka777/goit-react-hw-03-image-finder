import React from "react";
import { LoadMoreButton } from "./styles";

class Button extends React.Component {
  render() {
    return <LoadMoreButton onClick={this.props.onClick}>{this.props.title}</LoadMoreButton>;
  }
}

export default Button;