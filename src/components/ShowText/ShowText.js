import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ShowText.css";

class ShowText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteShowing: false
    };
  }

  toggleHendler = event => {
    event.preventDefault();
    console.log(this.refs.inner);
    this.setState({
      noteShowing: !this.state.noteShowing
      //   height: this.refs.inner.clientHeight
    });
  };

  render() {
    // const currentGeight = this.state.noteShowing ? this.state.height : 0;
    return (
      <div>
        <div className="note" onClick={this.toggleHendler}>
          <h4>Overview</h4>
        </div>
        {/* {this.state.noteShowing ? "" : this.refs} */}
        {this.state.noteShowing && (
          <div className="show-on" ref="inner">
            <p>
              Here is some overview about your exchange rates. Look at some
              dependancies for the past a few yers. Here you can find some
              important information about economics progressivety of your
              current country
            </p>
          </div>
        )}
      </div>
    );
  }
}

ShowText.propTypes = {
  title: PropTypes.string
};

export default ShowText;
