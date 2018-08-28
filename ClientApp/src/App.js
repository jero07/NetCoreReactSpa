import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Header, Main, Footer} from './Components/Layout';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 5, 
    textAlign: 'center',
    color: '#eaeaea',
  },
  paperMain: {
    padding: 20,
    Margin:20, 
    textAlign: 'center',
    color: '#eaeaea',
  },
});
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   // const { classes } = props;

    return (
      <React.Fragment>
       <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper><Header/></Paper>
        </Grid>
        <Grid item xs={12}> 
          <Paper styles={styles.paperMain}><Main/></Paper>
        </Grid>  
        <Grid item xs={12}>
         <Paper> <Footer/></Paper>
         </Grid>
       </Grid> 
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);