import React from "react";
import { Container } from "@material-ui/core";
import UserCard from "../UserCard";
import { connect } from "react-redux";
import styles from "./styles";

const UserList = props => {
  const classes = styles();
  const { data } = props;
  const { customers } = data;
  return (
    <Container className={classes.listContainer}>
      {customers &&
        customers.map((user, index) => <UserCard key={index} user={user} />)}
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.customer
});

export default connect(mapStateToProps, null)(UserList);
