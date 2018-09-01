import React, {Component} from 'react';
import { withStyles,AppBar,Toolbar,Typography,Drawer,IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded';
import SideNav from './SideNav';

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

const Appheader = (props) => {
  const {name, onPress, onDown} = props;
  return (
    <AppBar position="static">
      <Toolbar variant="dense" color="inherit">
        <IconButton
          style={styles.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onPress}
          onKeyDown={onDown}>
          {name === "main" ? <MenuIcon/> : <ArrowBackIcon/>}
        </IconButton>
        <Typography variant="title" color="inherit" style={styles.flex}>
          App
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Appheader
          name="main"
          onPress={this.toggleDrawer("left", true)}
          onDown={this.toggleDrawer("left", false)}/>
        <Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)}>
          <Appheader
            name="side"
            onPress={this.toggleDrawer("left", false)}
            onDown={this.toggleDrawer("left", false)}/>
          <SideNav/>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header);
