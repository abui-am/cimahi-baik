import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
    textAlign: "left",
  },
}));
const ErrorText = ({ children, className, style }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.error, className)} style={style}>
      {children}
    </div>
  );
};

export default ErrorText;
