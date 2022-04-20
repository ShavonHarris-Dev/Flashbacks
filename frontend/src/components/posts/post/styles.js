import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    // height: "auto",
    // width: "45vw",
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  time: {
    paddingBottom: "5px",
  },
  detailContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "1rem",
  },
  cardcontent: {
    width: "50%",
    height: "100%",
    background: "#eeeeee",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    boxSizing: "border-box",
  },
  cardmedia: {
    height: "100%",
    width: "50%",
  },
});
