import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import * as authActions from "../../../store/modules/auth/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import styles from "./styles";

const Form = props => {
  const classes = styles();
  const { history, loginRequest, auth } = props;
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleFormChanges = event => {
    const { target } = event;
    setLoginForm({ ...loginForm, [target.name]: target.value });
  };

  useEffect(() => {
    if (auth.loggedIn) history.push("/home");
  }, [auth]);

  const login = async () => {
    try {
      await loginRequest(loginForm);
    } catch (err) {}
  };

  return (
    <form noValidate className={classes.formContainer}>
      <Box component="div" className={classes.inputContainer}>
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={handleFormChanges}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          onChange={handleFormChanges}
        />
      </Box>

      <Button variant="contained" color="primary" onClick={login}>
        Entrar
      </Button>
      <Box component="div" className={classes.signUpContainer}>
        <Link to="/signup">
          <div>Ainda não tem uma conta?</div>
        </Link>
      </Box>
    </form>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(authActions, dispatch);

const mapStateToProps = state => ({
  auth: state.auth
});

const FormComponent = connect(mapStateToProps, mapDispatchToProps)(Form);

export default withRouter(FormComponent);
