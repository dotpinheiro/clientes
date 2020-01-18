import React, { useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@material-ui/core";
import cepService from "../../../../services/cep";
import SearchIcon from "@material-ui/icons/Search";
import * as customerActions from "../../../../store/modules/customer/actions";
import { bindActionCreators } from "redux";
import styles from "./styles";
import { connect } from "react-redux";

const AddModal = props => {
  const classes = styles();
  const {
    onClose,
    handleModal,
    addCustomerRequest,
    updateCustomerRequest,
    data
  } = props;
  const [addForm, setAddForm] = useState({
    cep: "",
    address: { bairro: "", localidade: "", uf: "", logradouro: "", numero: "" }
  });

  const handleFormChanges = event => {
    const { target } = event;
    setAddForm({ ...addForm, [target.name]: target.value });
  };

  const getAddress = async () => {
    if (addForm.cep.trim() != "") {
      const { data } = await cepService.searchAddress(addForm.cep);
      const { erro } = data;
      const address = data;
      if (erro) {
        alert("CEP inválido");
        return false;
      }
      setAddForm({ ...addForm, address });
    }
  };

  const submit = async () => {
    addCustomerRequest(addForm);
    handleModal();
  };

  const editCustomer = async () => {
    const mergedData = { ...editData, ...addForm };
    updateCustomerRequest(mergedData);
    handleModal();
  };

  const { address } = addForm;
  const { open, edit, editData } = data;
  return (
    <Modal open={open} onClose={handleModal}>
      <Box component="div" className={classes.modalContainer}>
        <Typography className={classes.mainTitle}>
          Cadastro de Clientes
        </Typography>

        <Box component="div" className={classes.inputContainer}>
          <TextField
            label="Nome"
            className={classes.nameInput}
            defaultValue={editData.name}
            onChange={handleFormChanges}
            name="name"
          />
        </Box>
        <Box component="div" className={classes.inputContainer}>
          <TextField
            label="Email"
            onChange={handleFormChanges}
            className={classes.nameInput}
            defaultValue={editData.email}
            name="email"
          />
        </Box>
        <Box component="div" className={classes.inputContainer}>
          <TextField
            label="Telefone"
            onChange={handleFormChanges}
            defaultValue={editData.phone}
            className={classes.nameInput}
            name="phone"
          />
        </Box>
        <Box component="div" className={classes.cepContainer}>
          <TextField
            label="CEP"
            onChange={handleFormChanges}
            name="cep"
            defaultValue={editData.cep}
          />
          <Button color="primary" aria-label="search" onClick={getAddress}>
            <SearchIcon />
          </Button>
        </Box>
        <Box component="div" className={classes.addressContainer}>
          <TextField
            label="Rua"
            disabled
            value={address.logradouro}
            name="logradouro"
          />
          <TextField
            label="Bairro"
            disabled
            value={address.bairro}
            name="bairro"
          />
        </Box>
        <Box component="div" className={classes.addressContainer}>
          <TextField
            label="Cidade"
            value={address.localidade}
            disabled
            name="municipio"
          />
          <TextField label="Estado" value={address.uf} disabled name="uf" />
          <TextField
            label="Numero"
            onChange={event =>
              setAddForm({
                ...addForm,
                [addForm.address.numero]: event.target.value
              })
            }
            defaultValue={editData.address.numero}
            name="numero"
          />
        </Box>
        <Box component="div" className={classes.btnContainer}>
          {edit ? (
            <Button variant="contained" color="primary" onClick={editCustomer}>
              Editar
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={submit}>
              Cadastrar
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(customerActions, dispatch);

const mapStateToProps = state => ({
  data: state.customer
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
