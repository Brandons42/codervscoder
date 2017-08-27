import React from 'react';

import "../stylesheets/style.scss";

export default class IndexLayout extends React.Component {
  render() {
    return pug`
      div(id="title-container")
        h1 SMHS
          span codervscoder
    `;
  }
}
