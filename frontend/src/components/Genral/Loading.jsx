import React from 'react';
import Loading from 'react-fullscreen-loading';

class Loader extends React.Component {
  render() {
    return(
      <Loading loading background="tranparent" loaderColor="white" />
    )
  }
}

export default Loader;