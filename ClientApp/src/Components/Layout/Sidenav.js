import React, { Component } from "react";
import PropTypes from 'prop-types';
import {withStyles, Typography, Drawer, Divider, List} from '@material-ui/core';

const drawerWidth = 240;
const styles = {
    root: {
        flexGrow: 1
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    }
};

class Sidenav extends Component {
    render() {
        return (
            <React.Fragment>
                <Drawer
                    variant="permanent"
                    style={styles.drawerPaper}
                >
                    <div />
                    <List>test1</List>
                    <Divider />
                    <List> test 2</List>
                </Drawer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Sidenav);
