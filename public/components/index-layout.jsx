import React from 'react';

import "../stylesheets/style.scss";

export default class IndexLayout extends React.Component {
  render() {
    return pug`
      section(id="title-container", className="hero")
        h1 SMHS
          span codervscoder
    `;
  }
}
