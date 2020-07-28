import React from "react";

let gatsbyConfig = require('../gatsby-config');

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>斑驳的天空博客</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {process.env.NODE_ENV === 'production' && <link rel="stylesheet" href={`${gatsbyConfig.pathPrefix}/styles.css`}/>}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}