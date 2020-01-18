import React, { Fragment } from "react";
import { Container, Menu, MenuItem, Button, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../store/modules/auth/actions";
import { withRouter } from "react-router-dom";
import styles from "./styles";

const Header = props => {
  const classes = styles();
  const { logoutRequest, history } = props;
  const [menu, setMenu] = React.useState(null);

  const handleMenu = event => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const signOut = async () => {
    await logoutRequest();
    history.push("/");
    setMenu(null);
    localStorage.clear();
  };

  return (
    <Fragment>
      <Box className={classes.headerContainer}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MenuIcon style={{ color: "#fff" }} />
        </Button>
        <Menu
          open={menu}
          anchorEl={menu}
          open={Boolean(menu)}
          onClose={handleClose}
          keepMounted
        >
          <MenuItem onClick={signOut}>Sair</MenuItem>
        </Menu>
      </Box>
      <Box className={classes.divider} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(authActions, dispatch);

const HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

export default withRouter(HeaderComponent);
