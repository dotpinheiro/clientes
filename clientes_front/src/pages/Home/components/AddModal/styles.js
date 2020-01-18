import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  modalContainer: {
    position: "absolute",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifuContent: "center",
    bottom: "25vh",
    left: "25vw",
    width: "50%",
    backgroundColor: "#fff",
    border: "2px solid #000"
  },
  mainTitle: {
    fontSize: "2em",
    padding: "2%"
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
  cepContainer: {
    display: "flex",
    padding: "1%",
    width: "60%",
    flexFlow: "row",
    alignItems: "flex-end"
  },
  btnContainer: {
    padding: "1%",
    margin: "3%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
