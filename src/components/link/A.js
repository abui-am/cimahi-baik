import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  a: {
    transition: "color .4s ease-out",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "color .3s ease-in",
    },
  },
}));
const A = ({ href, as, children, base }) => {
  const classes = useStyles();

  return (
    <Link href={href} as={as} passHref>
      <a className={!base ? classes.a : null}>{children}</a>
    </Link>
  );
};

A.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
};

export default A;
