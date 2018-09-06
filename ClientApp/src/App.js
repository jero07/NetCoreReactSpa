import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Paper } from '@material-ui/core';
import { Header, Main, Footer } from './Components/Layout';

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
        textAlign: 'center',
        height: 400,
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
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={styles.paperMain}><Main /></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={styles.paper}> <Footer /></Paper>
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