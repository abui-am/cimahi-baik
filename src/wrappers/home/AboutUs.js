import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import propTypes from "prop-types";
import { Fade, Zoom } from "react-awesome-reveal";
const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: 120,
    paddingBottom: 120,
  },
  title: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: "56px",
    textAlign: "center",

    color: "#121212",
    marginBlockStart: 0,
    marginBlockEnd: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      lineHeight: "1.3",
    },
  },
  image: {
    borderRadius: 16,
    objectFit: "cover",
  },
}));

const aboutUsContent = [
  {
    title: "Wadah Penebar kebaikan",
    icon: "/icon1.svg",
    desc:
      "Cimahi Baik adalah program sosial dibawah naungan Info Cimahi yang dibentuk dengan tujuan sebagai wadah  masyarakat Kota Cimahi dan sekitarnya untuk menebarkan kebaikan secara bersama-sama. ",
  },
  {
    title: "Dibentuk untuk berbagi kebaikan",
    icon: "/icon2.svg",
    desc:
      "Cimahi Baik dibentuk pada bulan Juni tahun 2019, Cimahi Baik saat ini memiliki 55 orang relawan dari 365 pendaftar batch pertama yang terpilih bergabung bersama relawan Cimahi Baik, antusias untuk berbagi kebaikan secara bersama-sama cukup banyak.",
  },
];
const AboutUs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <section className={classes.section}>
      <div>
        <Fade direction="up" triggerOnce>
          <h1 className={classes.title}>Sebenarnya apasih Cimahi Baik itu?</h1>
        </Fade>

        <div>
          <Grid container>
            <Grid
              item
              lg={6}
              style={{
                paddingRight: isSm ? null : 80,
                paddingBottom: isSm ? 32 : 80,
              }}
            >
              <DescBox
                title={aboutUsContent[0].title}
                icon={aboutUsContent[0].icon}
                desc={aboutUsContent[0].desc}
              />
            </Grid>
            <Grid item lg={6} style={{ paddingBottom: 80 }}>
              <Zoom delay={500} triggerOnce>
                <Image
                  height={327}
                  width={483}
                  src="/image2.jpg"
                  className={classes.image}
                  // layout="fill"
                />
              </Zoom>
            </Grid>
          </Grid>
          <Grid container direction={isSm ? "column-reverse" : null}>
            <Grid
              item
              lg={6}
              style={{
                paddingRight: isSm ? null : 80,
                paddingBottom: isSm ? 32 : 0,
              }}
            >
              <Zoom delay={isSm ? 500 : 1000} triggerOnce>
                <Image
                  height={382}
                  width={411}
                  src="/image1.jpg"
                  className={classes.image}
                  // layout="fill"
                />
              </Zoom>
            </Grid>
            <Grid
              item
              lg={6}
              style={{ paddingRight: 0, paddingBottom: isSm ? 32 : 0 }}
            >
              <DescBox
                delay={isSm ? 1000 : 500}
                title={aboutUsContent[1].title}
                icon={aboutUsContent[1].icon}
                desc={aboutUsContent[1].desc}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

const descBoxStyles = makeStyles((theme) => ({
  titleBox: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "42px",
    color: "#121212",
    marginBlockStart: 0,
    marginBlockEnd: "40px",
    textAlign: "left",
    paddingLeft: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      lineHeight: "1.3",
      textAlign: "center",
    },
  },

  icon: {
    height: 52,

    flex: "0 0 52px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 24,
    },
  },
  desc: {
    fontFamily: "'PT Sans',sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: "150%",
    textAlign: "left",
    color: "#232323",
    marginBlockEnd: 0,
    marginBlockStart: 0,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const DescBox = ({ desc, title, icon, delay = 0 }) => {
  const classes = descBoxStyles();
  return (
    <Fade direction="top" delay={delay} triggerOnce>
      <div className={classes.titleBox}>
        <img
          width={52}
          height={52}
          src={icon}
          alt={icon}
          className={classes.icon}
        />
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div>
        <p className={classes.desc}>{desc}</p>
      </div>
    </Fade>
  );
};

DescBox.propTypes = {
  desc: propTypes.string,
  title: propTypes.string,
  icon: propTypes.string,
};

export default AboutUs;
