import React from "react";
import { Card, Button, CardContent, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as customerActions from "../../../../store/modules/customer/actions";
import styles from "./styles";

const UserCard = props => {
  const classes = styles();
  const { user, deleteCustomerRequest, editCustomerModal } = props;
  const { name, id } = user;

  const deleteCustomer = () => {
    deleteCustomerRequest(id);
    console.log("delete");
  };

  const editCustomer = () => {
    editCustomerModal(user);
  };

  return (
    <Card className={classes.cardWrapper}>
      <CardContent className={classes.cardContainer}>
        <Typography className={classes.userName}>{name}</Typography>
        <Button onClick={editCustomer}>
          <EditIcon />
        </Button>
        <Button onClick={deleteCustomer}>
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(customerActions, dispatch);

export default connect(null, mapDispatchToProps)(UserCard);
