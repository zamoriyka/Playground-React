import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./App.css";
import ShowText from "../components/ShowText/ShowText.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 150,
    textAlign: "center"
  },
  paper: {
    width: 550,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: 15
  },
  // title: {
  //   padding: 15
  // },
  row: { padding: theme.spacing.unit * 0.5 }
});

class App extends Component {
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
      isOn: !this.state.isOn,
      name: this.props.changedName
    });
  };

  handleChange = name => event => {
    this.getState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="title" className="title">
            {this.state.updateEchangeHeader}
            {this.state.isOn
              ? "Playground"
              : "Here goes some magic! Click on 'Overview'"}
          </Typography>
          <div>
            <Button
              color="secondary"
              className={classes.button}
              onClick={this.updateEchangeHeader}
            >
              {this.state.isOn ? "Click to change the Title" : "Go Back"}
            </Button>
            <div className="note">
              <ShowText />
            </div>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
