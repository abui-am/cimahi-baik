import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import OutlinedButton from "~/components/button/OutlinedButton";
import AboutUs from "./AboutUs";
import FirstProgram from "./FirstProgram";
import Galery from "./Galery";
import JoinUs from "./JoinUs";
import VideoSection from "./VideoSection";

const useStyles = makeStyles((theme) => ({
  image: { objectFit: "cover", width: "100%", height: "100vh" },
  backgroundInner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
  },
  textBox: {
    marginTop: 180,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 120,
      paddingRight: 24,
      paddingLeft: 24,
    },
  },
  title: {
    fontFamily: "'Raleway', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 64,
    lineHeight: "75px",
    textAlign: "center",

    color: "#FFFFFF",
    marginBottom: 8,
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      lineHeight: "1.3",
    },
  },
  subtitle: {
    fontFamily: "'PT Sans',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "23px",
    textAlign: "center",
    maxWidth: 746,
    color: "rgba(255, 255, 255, 0.8)",
    paddingBottom: 24,
  },
  section: {
    marginTop: -94,
    marginLeft: -180,
    marginRight: -180,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginLeft: -24,
      marginRight: -24,
    },
  },
  container: {
    position: "relative",
    height: 768,
    [theme.breakpoints.down("sm")]: {
      height: 600,
    },
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Image
          src="/bg.jpg"
          className={classes.image}
          alt="background"
          layout="fill"
        />
        <div className={classes.backgroundInner}>
          <div className={classes.textBox}>
            <Fade
              direction="bottom"
              cascade
              delay={800}
              duration={500}
              triggerOnce
            >
              <h1 className={classes.title}>Mari Membantu Sesama</h1>
              <div className={classes.subtitle}>
                Ada ribuan orang yang kurang beruntung di kota kita tercinta
                ini, selama kita mampu membantu, kenapa tidak?
              </div>
            </Fade>
            <Zoom delay={1200} duration={300} triggerOnce>
              <OutlinedButton
                text="Saya Tertarik Membantu"
                href="#start"
                style={{ color: "#fff" }}
              />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeComponent = ({}) => {
  return (
    <>
      <Home />
      <VideoSection />
      <AboutUs />
      <FirstProgram />
      <Galery />
      <JoinUs />
    </>
  );
};

export default HomeComponent;
