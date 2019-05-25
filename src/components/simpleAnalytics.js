import React from "react";

class SimpleAnalytics extends React.Component {
  render() {
    return (
      <div>
        <script async defer src="https://cdn.simpleanalytics.io/hello.js" />
        <noscript>
          <img src="https://api.simpleanalytics.io/hello.gif" alt="" />
        </noscript>
      </div>
    );
  }
}

export default SimpleAnalytics;
