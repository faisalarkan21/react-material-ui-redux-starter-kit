import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../lib/Counter.action';
import reducers from '../lib/reducers';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    return (
      <div>
        Clicked: {count} times
        {' '}
        <div><button onClick={e => increment()}>Increment</button></div>

        {' '}
        <div><button onClick={e => decrement()}>Decrement</button></div>

        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </div>
    );
  }
}


export default (Counter);
