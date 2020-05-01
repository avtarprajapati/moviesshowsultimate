import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  render() {
    console.log(this.props.state);
    return <div>MovieDetails</div>;
  }
}

function mapStateToProps(state) {
  return { state: state };
}

export default connect(mapStateToProps)(MovieDetails);
