import React from "react";

import Header from "./header.js";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        }}
      >
        <Header />
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
