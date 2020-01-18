import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  form: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  cepContainer: {
    display: "flex",
    width: "60%",
    flexFlow: "row",
    alignItems: "flex-end"
  },
  btnContainer: {
    display: "flex",
    flexFlow: "row",
    width: "80%",
    margin: "2%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  addressContainer: {
    width: "60%",
    display: "flex",
    flexFlow: "row",
    alignItems: "flex-start"
  },
  inputContainer: {
    width: "60%",
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start"
  },
  nameInput: {
    width: "80%"
  },
  textInput: {
    width: "60%"
  }
});

export default styles;
