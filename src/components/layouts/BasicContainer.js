import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  wrapper: {
    width: "100%",
    paddingLeft: 180,
    paddingRight: 180,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 24,
      paddingLeft: 24,
    },
  },
}));
const BasicContainer = ({ children, style, className }) => {
  const classes = useStyles();
  return (
    <section className={clsx(classes.base, className)} style={style}>
      <div className={classes.wrapper}>{children}</div>
    </section>
  );
};

export default BasicContainer;
