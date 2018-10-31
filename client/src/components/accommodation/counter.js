import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  handleCounterUpClick = () => this.props.upCounter();
  handleCounterDownClick = () => this.props.downCounter();

  render() {
    return (
      <div>
        <button
          onClick={this.handleCounterUpClick}
          type="button"
          className="btn btn-light mr-1"
        >
          <i className="text-primary fas fa-thumbs-up" />
          <span className="badge badge-light"> {this.props.counter} </span>
        </button>
        <button
          onClick={this.handleCounterDownClick}
          type="button"
          className="btn btn-light mr-1"
        >
          <i className="text-default fas fa-thumbs-down" />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter,
    downCounter: state.downCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    upCounter: () => {
      dispatch({ type: "INCREMENT" });
    },
    downCounter: () => {
      dispatch({ type: "DECREMENT" });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
