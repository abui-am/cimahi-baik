import { makeStyles } from "@material-ui/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  base: {
    padding: "120px 180px 80px 180px",
    marginLeft: -180,
    marginRight: -180,
    background: "#f8f8f8",

    [theme.breakpoints.down("sm")]: {
      marginLeft: -24,
      marginRight: -24,
      padding: "80px 24px",
    },
  },
  baseInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 88,
    marginRight: 88,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  text: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: "56px",
    textAlign: "center",

    color: "#121212",
    maxWidth: 740,
    marginBlockStart: 0,
    marginBlockEnd: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      lineHeight: "1.3",
    },
  },
  video: {
    paddingTop: "56.25%",
    position: "relative",
    width: "100%",
  },
  videoInner: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    "& iframe": {
      borderRadius: 8,
    },
  },
}));
const VideoSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.base} id="start">
      <div className={classes.baseInner}>
        {/* <Image
          width={862}
          height={458}
          src="/video-cover.jpg"
          style={{ borderRadius: 16 }}
        /> */}
        <div className={classes.video}>
          <div className={classes.videoInner}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=7pkF_2SDqb0&t=4s"
              style={{ borderRadius: 8 }}
              width="100%"
              height="100%"
              controls={true}
              loop
            />
          </div>
        </div>

        <div style={{ paddingTop: 57 }}>
          <Fade direction="up" triggerOnce>
            <h5 className={classes.text}>Kebaikan dalah tentang memberi</h5>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
