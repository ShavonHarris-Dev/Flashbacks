import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSubmit: {
    margin: 10,
    width: "8rem",
  },
}));
