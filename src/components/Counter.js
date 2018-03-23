import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends React.Component {

  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }

  render(){
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

//what you return here gets fed to component props
function mapStateToProps(state){
  return {
    count: state.count
  }
}

//connect hooks into Redux, grabs state, and passes it through mapStateToProps
export default connect(mapStateToProps)(Counter);
