import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class extends React.Component {
  render() {
    return (
      <div id="layout">
        <Header />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}
