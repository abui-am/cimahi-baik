import { makeStyles } from "@material-ui/core";
import React from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import A from "../link/A";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
const useStyles = makeStyles({
  outline: {
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 24,
    paddingTop: 16,
    paddingBottom: 17,
    lineHeight: "27px",
    cursor: "pointer",
    textAlign: "center",
    letterSpacing: "0.01em",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "4px solid #2A5693",
    boxSizing: "border-box",
    borderRadius: 4,
    background: "transparent",
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    transition: "0.5s all",
    position: "relative",
    "& #icon": {
      transition: " 0.5s all",
      position: "absolute",
      right: 8,
      top: "0%",
      bottom: 0,
      opacity: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    "&:hover": {
      background: "#2A5693",
      color: "white",
      transition: "0.3s all",
      paddingRight: "32px !important",
      boxShadow: "0px 12px 20px -4px rgba(49, 107, 137, 0.60)",
    },
    "&:hover #icon": {
      transition: " 0.5s all",
      opacity: 1,
    },
  },
});
function OutlinedButton({
  text,
  onClick,
  href = "#",
  className,
  style,
  props,
  propsLink,
}) {
  const classes = useStyles();
  return (
    <A href={href} props={propsLink}>
      <button
        className={clsx(classes.outline, className)}
        onClick={onClick}
        style={style}
        {...props}
      >
        {text}
        <div id="icon">
          <ArrowForwardIosRoundedIcon />
        </div>
      </button>
    </A>
  );
}

OutlinedButton.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func,
  props: propTypes.object,
  href: propTypes.string,
};

export default OutlinedButton;
