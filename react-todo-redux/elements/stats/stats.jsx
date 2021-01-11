import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AMOUNT, DONE } from './dict';

function mapStateToProps(state) {
  return { stats: state.stats };
}

class Stats extends Component {
  render() {
    const {
      stats: { amount, done },
    } = this.props;
    return (
      <div className="stats">
        <div className="stats__amount">{`${AMOUNT}: ${amount}`}</div>
        <div className="stats__done">{`${DONE}: ${done}`}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Stats);
