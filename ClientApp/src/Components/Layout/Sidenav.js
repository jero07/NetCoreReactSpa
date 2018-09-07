import React, { Component } from 'react';
import { withStyles, Typography, List, Divider, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  leftnav: {
    width: 240,
    backgroundColor: '#fff'
  },
  sidelist: {
    padding: 10
  }
}
class SideNav extends Component {
  constructor() {
    super();
  }
  render() {

    const sideList = (
      <div style={styles.leftnav}>
        <div style={styles.sidelist}>
          <List>
            <Link to='/'>Home</Link>
          </List>
          <Divider />
          <List>
            <Link to='/dash'>Dash</Link>
          </List>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {sideList}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(SideNav);

