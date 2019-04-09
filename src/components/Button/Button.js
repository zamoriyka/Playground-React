import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: 10
  }
});

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true,
      disable: true,
      name: this.props.defaultName,
      button: this.props.defaultButton,
      clicked: true
    };
  }

  updateEchangeHeader = () => {
    this.setState({
      isOn: !this.state.isOn
      //   name: this.props.changedName,
      //   button: this.props.changedButton
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Button
        color="secondary"
        className={classes.button}
        onClick={this.updateEchangeHeader}
      >
        {this.state.isOn ? "Click to change the button" : "Go Back"}
      </Button>
    );
  }
}
Buttons.defaultProps = {
  //   defaultName: "Exchange",
  //   changedName: "You did it",
  //   defaultButton: "Click to change the button",
  //   changedButton: "Go Back"
};

export default withStyles(styles)(Buttons);
