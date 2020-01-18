import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Container,
  Card,
  TextField,
  Button,
  CardContent,
  Typography,
  withStyles,
  Box,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import * as authActions from "../../store/modules/auth/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import Form from "./Form";
import styles from "./styles";

const theme = createMuiTheme({
  palette: {
    background: { default: "#00ff9a" }
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container className={classes.loginContainer}>
          <Card className={classes.loginCard}>
            <Box component="div" className={classes.titleContainer}>
              <Typography className={classes.mainTitle}>
                Gerencie seus clientes
              </Typography>
            </Box>
            <CardContent>
              <Form />
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LoginPage);
