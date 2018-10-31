import React from "react";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import Counter from "./counter";
import Avatar from "../../img/avatar.png";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      text: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="post-form mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white">
              Say Somthing...
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Create a post"
                    name="text"
                    value={this.state.newItem}
                    onChange={this.handleChange}
                    error={errors.newItem}
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    this.props.add(this.state.newItem);
                    this.setState({ newItem: "" });
                  }}
                  className="btn btn-dark"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <ul className="PostComments">
          {this.props.list.map((item, index) => (
            <li key={index} className="BorderBottom">
              <img
                src={Avatar}
                alt=""
                style={{
                  maxWidth: "80px",
                  width: "80px",
                  height: "60px"
                }}
                className="ImagePaddingRight"
              />
              {item}

              <button
                onClick={() => this.props.remove(index)}
                type="button"
                className="btn btn-danger marginLeft"
              >
                <i className="fas fa-times" />
              </button>
              <div className="LikeCounter">
                <Counter key={index} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: value => {
      dispatch({ type: "ADD", payload: value });
    },
    remove: index => {
      dispatch({ type: "REMOVE", payload: index });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
