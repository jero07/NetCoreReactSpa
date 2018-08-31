import React, {Component} from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  }
};

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              App
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header);
