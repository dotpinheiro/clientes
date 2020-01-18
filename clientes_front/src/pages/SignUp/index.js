import React from "react";
import {
  Container,
  Card,
  TextField,
  Button,
  CardContent,
  CardHeader,
  withStyles,
  Box,
  Typography
} from "@material-ui/core";
import Form from "./components/Form";
import styles from "./styles";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.signUpContainer}>
        <Card className={classes.signUpCard}>
          <Box component="div" className={classes.titleContainer}>
            <Typography className={classes.mainTitle}>
              Crie sua conta
            </Typography>
          </Box>
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignUpPage);
