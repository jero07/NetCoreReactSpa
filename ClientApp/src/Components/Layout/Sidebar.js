import React, { Component } from "react";
import {
  withStyles,
  Typography,
  List,
  Divider,
  IconButton
} from "@material-ui/core";

const styles = {
    root: {
      flexGrow: 1
    }
}
class Sidebar extends Component {
  constructor() {
    super();
  }
  render() {
      
   const sideList = (
    <div>
      <List>Test1</List>
      <Divider />
      <List>Test2</List>
    </div>
  );
    return (
     <React.Fragment>
       {sideList}
     </React.Fragment>
    )
  }
}

export default withStyles(styles)(Sidebar);
