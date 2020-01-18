import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Fab } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as authActions from "../../../../store/modules/auth/actions";
import cepService from "../../../../services/cep";
import styles from "./styles";

const Form = props => {
  const classes = styles();
  const { auth } = props;
  const [formData, setFormData] = useState({
    cep: "",
    address: { bairro: "", localidade: "", uf: "", logradouro: "", numero: "" }
  });
  const { signUpRequest, history } = props;

  const handleFormChanges = event => {
    const { target } = event;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submit = () => {
    try {
      signUpRequest(formData);
    } catch (err) {}
  };

  useEffect(() => {
    if (auth.loggedIn) history.push("/home");
  }, [auth]);

  const getAddress = async () => {
    if (formData.cep.trim() != "") {
      const { data } = await cepService.searchAddress(formData.cep);
      const { erro } = data;
      const address = data;
      if (erro) {
        alert("CEP inválido");
        return false;
      }
      setFormData({ ...formData, address });
    }
  };
  const { address } = formData;
  return (
    <form className={classes.form}>
      <Box component="div" className={classes.inputContainer}>
        <TextField
          label="Nome"
          className={classes.nameInput}
          name="name"
          onChange={handleFormChanges}
        />
      </Box>
      <Box component="div" className={classes.cepContainer}>
        <TextField label="CEP" name="cep" onChange={handleFormChanges} />
        <Button
          color="primary"
          aria-label="search"
          onClick={() => {
            getAddress();
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
      <Box component="div" className={classes.addressContainer}>
        <TextField
          label="Rua"
          disabled
          name="logradouro"
          value={address.logradouro}
        />
        <TextField
          label="Bairro"
          disabled
          name="bairro"
          value={address.bairro}
        />
      </Box>
      <Box component="div" className={classes.addressContainer}>
        <TextField
          label="Cidade"
          disabled
          name="municipio"
          value={address.localidade}
        />
        <TextField label="Estado" disabled name="uf" value={address.uf} />
        <TextField label="Numero" name="numero" onChange={handleFormChanges} />
      </Box>
      <Box component="div" className={classes.inputContainer}>
        <TextField
          label="Email"
          className={classes.textInput}
          name="email"
          onChange={handleFormChanges}
        />
        <TextField
          label="Senha"
          className={classes.textInput}
          type="password"
          name="password"
          onChange={handleFormChanges}
        />
      </Box>

      <Box component="div" className={classes.btnContainer}>
        <Button
          variant="contained"
          color="primary"
          color="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          color="primary"
          color="primary"
          onClick={() => {
            submit();
          }}
        >
          Criar Conta
        </Button>
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
