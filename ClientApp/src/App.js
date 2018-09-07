import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Header, Sidenav, Main, Footer} from './Components/Layout';

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 5,
    textAlign: 'center',
    color: '#eaeaea'
  },
  paperSide: {
    padding: 10,
    marginTop: 5,
    marginLeft: 10,
    height: 500,
    textAlign: 'center'
  },
  paperMain: {
    padding: 10,
    marginTop: 5,
    //marginRight: 10,
    height: 500,
    textAlign: 'center'
  }
};
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const { classes } = props;

    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={3}>
            side
          </Grid>
          <Grid item xs={9}>
            <Paper style={styles.paperMain}><Main/></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Footer/></Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);