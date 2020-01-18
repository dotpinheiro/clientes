import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as customerActions from "../../store/modules/customer/actions";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";
import {
  Container,
  Button,
  Typography,
  withStyles,
  Box
} from "@material-ui/core";
import Header from "../../components/Header";
import AddModal from "./components/AddModal";
import styles from "./styles";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getCustomersRequest();
  }

  openModal = () => {
    this.props.handleCustomerModal();
    // this.setState({ modalOpened: !this.state.modalOpened });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container>
          <Box component="div" className={classes.titleContainer}>
            <Typography className={classes.mainTitle}>Meus clientes</Typography>
            <Button
              onClick={this.openModal}
              variant="contained"
              color="primary"
            >
              Adicionar Cliente
            </Button>
          </Box>
          <UserList />
        </Container>
        <AddModal
          open={this.state.modalOpened}
          onClose={this.onClose}
          handleModal={this.openModal}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(customerActions, dispatch);

const Page = connect(null, mapDispatchToProps)(HomePage);

export default withStyles(styles, { withTheme: true })(Page);
