import React from 'react';

export default class IndexLayout extends React.Component {
  render() {
    return pug`
      div(id="title-container")
        h1 SMHS
          span codervscoder
    `;
  }
}
