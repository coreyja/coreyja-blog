import React, { ReactNode } from "react";

import Header from "./header";
import SimpleAnalytics from "./simpleAnalytics";

class Layout extends React.Component {
  render(): ReactNode {
    const { children } = this.props;

    return (
      <div
        style={{
          // @ts-expect-error 2322: This is a real prop but TS disagrees
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        }}
      >
        <Header />
        <main>{children}</main>
        <SimpleAnalytics />
      </div>
    );
  }
}

export default Layout;
