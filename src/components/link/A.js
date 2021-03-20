import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";
import { createElement } from "react";

const useStyles = makeStyles((theme) => ({
  a: {
    transition: "color .4s ease-out",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "color .3s ease-in",
    },
  },
}));
const A = ({ href, as, children, base = false, component = "h5", props }) => {
  const classes = useStyles();

  return (
    <Link href={href} as={as} passHref>
      <a className={!base ? classes.a : null} {...props}>
        {createElement(component, {}, children)}
      </a>
    </Link>
  );
};

A.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
  component: PropTypes.string,
  base: PropTypes.bool,
};

export default A;
