import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: this.props.display ? 'inline' : 'none' }}>
        <ReactLoading type={'bars'} color={'#536c79'} height={20} width={20} />
      </div>
    )
  }
}

export default Loading;
