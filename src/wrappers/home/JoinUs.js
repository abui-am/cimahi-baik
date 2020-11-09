import { makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import OutlinedButton from "~/components/button/OutlinedButton";
import A from "~/components/link/A";

const useStyles = makeStyles((theme) => ({
  base: {
    marginLeft: -180,
    marginRight: -180,
    padding: "80px 180px",
    background: "#e4e4e4",
    [theme.breakpoints.down("sm")]: {
      marginLeft: -24,
      marginRight: -24,
      padding: "80px 24px",
    },
  },
  text: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "42px",
    textAlign: "center",
    marginBlockEnd: "64px",
    marginBlockStart: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      lineHieght: 1.3,
    },
  },
}));
const JoinUs = () => {
  const classes = useStyles();
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  useEffect(() => {
    if (inView) {
      animation.start("visible2");
    } else {
      animation.start("hidden2");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 },
    },
    hidden: {
      y: 14,
      opacity: 0,
    },
  };

  const variantButton = {
    visible2: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 2,
        variant: "spring",
        staggerChildren: 0.1,
      },
    },
    hidden2: {
      scale: 0.4,
      opacity: 0,
    },
  };
  return (
    <div className={classes.base}>
      <motion.div
        className={classes.text}
        animate={animation}
        initial="hidden"
        variants={variants}
        ref={ref}
      >
        Ini masih langkah awal, masih banyak lagi langkah yang harus dilakukan.
        Kami membutuhkan kamu untuk jadi relawan Cimahi Baik
      </motion.div>
      <motion.div
        animate={animation}
        initial="hidden2"
        variants={variantButton}
      >
        <OutlinedButton
          href="/register"
          text="Jadi Relawan #Batch2"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </motion.div>
    </div>
  );
};

export default JoinUs;
