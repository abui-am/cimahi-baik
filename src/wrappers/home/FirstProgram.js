import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

const usesStyles = makeStyles((theme) => ({
  base: {
    marginLeft: -180,
    marginRight: -180,
    padding: "80px 180px",
    background: "#f8f8f8",
    [theme.breakpoints.down("sm")]: {
      marginLeft: -24,
      marginRight: -24,
      padding: "80px 24px",
    },
  },
  textRight: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "42px",
    textAlign: "left",
    color: "#121212",
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      lineHeight: 1.3,
      paddingBottom: 24,
      paddingRight: 0,
      textAlign: "center",
    },
  },
  count: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: "75px",
    textAlign: "end",
    color: "#121212",
    marginBlockEnd: "16px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 48,
    },
  },
  countName: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px",
    textAlign: "end",
    color: "rgba(35, 35, 35, 0.8)",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  textContainer: {
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
}));

const FirstProgram = () => {
  const classes = usesStyles();

  return (
    <div className={classes.base}>
      <Grid container>
        <Grid item lg={5} sm={12} className={classes.textContainer}>
          <div className={classes.textRight}>
            Program pertama Cimahi Baik adalah{" "}
            <span style={{ color: "#2A5693" }}>
              "Berbagi Kebaikan di Bulan Ramadhan"
            </span>{" "}
            tahun 2019, dan kami berhasil menyalurkan
          </div>
        </Grid>
        <Grid item lg={7} sm={12}>
          <Grid container>
            <Grid item lg={4} xs={12} style={{ marginBottom: 54 }}>
              {/* <div className={classes.count}>400</div> */}
              <Counting start={0} end={400} />
              <div className={classes.countName}>Nasi Bungkus</div>
            </Grid>
            <Grid item lg={8} xs={12} style={{ marginBottom: 54 }}>
              {/* <div className={classes.count}>Rp5.482.000</div> */}
              <Counting start={0} end={5482000} prefix="Rp" />

              <div className={classes.countName}>Tunjangan Hari Raya</div>
            </Grid>
            <Grid item lg={12} xs={12} style={{}}>
              {/* <div className={classes.count}>Rp10.914.380</div> */}
              <Counting start={0} end={10914380} prefix="Rp" />

              <div className={classes.countName}>Total Donasi</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstProgram;

const Counting = ({ start: startProps, end, prefix = "" }) => {
  const classes = usesStyles();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [counted, setCounted] = useState(false);
  const { countUp, start } = useCountUp({
    start: startProps,
    end: end,
    duration: 3,
    prefix: prefix,
    separator: ",",
  });

  useEffect(() => {
    if (!counted && inView) {
      start();
      setCounted(true);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <div className={classes.count}> {countUp}</div>
    </div>
  );
};
