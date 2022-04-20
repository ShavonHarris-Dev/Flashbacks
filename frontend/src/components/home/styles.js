import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    padding: "15px",
  },
  image: {
    marginLeft: "15px",
  },
  div: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: "25px 75px",
    width: "300px",
  },
  form: {
    animationDuration: "3s",
    animationName: "slidein",
  },
}));
