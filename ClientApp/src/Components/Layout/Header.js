import React, { Component } from "react";
import {withStyles, AppBar, Toolbar, Typography, Drawer,
  List, Divider, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from './Sidebar';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  app: {
    padding: 4
  }
};

class Header extends Component {
 constructor(){
     super();
     this.state = {
        left: false
      };
 }
   
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
     
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar variant="dense" color="inherit">
            <IconButton
              style={styles.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer("left", true)} 
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
           <Sidebar/>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header);
