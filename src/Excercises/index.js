import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
// import LeftPane from "./LeftPane";
// import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ excercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {excercises.map(([group, excercises]) => (
          <Fragment>
            <Typography
              varient="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="ul">
              {excercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1" component="display1">
          Welcome
        </Typography>
        <Typography variant="subheading" style={{ marginTop: 200 }}>
          Please select an excercise from the list on the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
