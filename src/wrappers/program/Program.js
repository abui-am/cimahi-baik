import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import OutlinedButton from "~/components/button/OutlinedButton";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: 24,
    marginLeft: -100,
    marginRight: -100,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 24,
    },
  },
  base: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  left: {
    flex: "1 1",
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  image: {
    width: "100%",
    paddingTop: "49.1%",
    position: "relative",
  },
  imageInner: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  contentWrapper: {
    marginTop: theme.spacing(2),
  },
  textTitle: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "42px",
    marginBlockEnd: 0,
    marginBlockStart: "16px",
    color: "#121212",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      lineHeight: 1.2,
      marginTop: 16,
    },
  },
  textDesc: {
    fontFamily: "'PT Sans',sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: "150%",
    /* or 27px */

    color: "rgba(18, 18, 18, 0.8)",
    marginBlockStart: "16px",
    marginBlockEnd: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  right: {
    flex: "0 0 511px",
  },
}));
const Program = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.base}>
        <div className={classes.left}>
          <div className={classes.image}>
            {/* <div className={classes.imageInner}> */}
            <Image
              src="/program/program1.jpg"
              layout="fill"
              className={classes.imageInner}
              style={{ objectFit: "cover" }}
              loader="text.."
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                height: "100%",
                zIndex: 2,
                background:
                  "linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(42, 86, 147, 0.17) 66.67%, rgba(42, 86, 147, 0.63) 100%)",

                borderRadius: "0px 0px 8px 8px",
              }}
            />
            {/* </div> */}
          </div>
          <div className={classes.contentWrapper}>
            <h1 className={classes.textTitle}>
              Ayo Bantu Pak Harun dan Emak Een
            </h1>
            <p className={classes.textDesc}>
              Pak Harun (72 tahun) adalah seorang sopir angkuran umum jurusan ST
              Hall-Cimahi, Ema Een (67 tahun) istrinya setia di samping abah
              selalu menemani disaat mencari penumpang. Kisah Abah dan Ema cukup
              menginspirasi kita tentang kesetiaan. Tapi, di saat masa pandemi
              covid-19 saat ini Abah Harun harus bekerja keras untuk mencari
              penumpang angkot yang semakin sepi, penghasilan tidak menentu
              setiap harinya kadang tidak dapat penghasilan, paling besar hanya
              Rp20.000 setiap harinya, untuk bayar bensin, setoran angkot,
              kontrakan dan kebutuhan sehari-hari kadang tidak mencukupi.
            </p>
          </div>
        </div>

        <div className={classes.right}>
          <DonationCard />
        </div>
      </div>
    </section>
  );
};

const donationCardStyle = makeStyles((theme) => ({
  base: {
    border: "1px solid #E4E4E4",
    boxSizing: "border-box",
    borderRadius: 8,
    padding: theme.spacing(6),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(3),
    },
  },
  head: {
    paddingBottom: theme.spacing(1),
    borderBottom: "1px solid #e4e4e4",
  },
  titleHead: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px",

    color: "#121212",
    marginBlockStart: 0,
    marginBlockEnd: "16px",
  },
  descHead: {
    fontFamily: "'PT Sans',sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    /* or 27px */
    marginBlockStart: 0,
    marginBlockEnd: "16px",
    color: "rgba(18, 18, 18, 0.8)",
  },
  body: {
    paddingTop: theme.spacing(3),
  },
  count: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px",

    color: "#121212",
    marginBlockEnd: 0,
    marginBlockStart: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      lineHeight: 1.3,
    },
  },
  countName: {
    fontFamily: "'PT Sans',sans-serif",
    flex: "1 1",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "150%",
    /* identical to box height, or 21px */

    color: "rgba(35, 35, 35, 0.7)",
  },
  textDonasiSekarang: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: "0.01em",
    marginBlockEnd: "16px",
    marginBlockStart: 0,
    color: "#121212",
  },
  textNoRek: {
    fontFamily: "'Raleway',sans-serif",
    flex: "1 1",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "28px",
    letterSpacing: "0.01em",
    marginBlockEnd: 0,
    marginBlockStart: 0,
    color: "#121212",
  },
  textAN: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: "0.01em",
    color: "rgba(42, 86, 147, 0.8)",
    marginBlockEnd: 0,
    marginBlockStart: 0,
    paddingLeft: 8,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingTop: 8,
    },
  },
  whatsappDiv: {
    marginTop: theme.spacing(1),
  },
  textNaraHubung: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    letterSpacing: "0.01em",

    color: "#121212",
  },
  whatsappButton: {
    width: "100% !important",
    border: "4px solid #4CAF50  !important",
    color: "#4CAF50 ",
    "&:hover": {
      background: "#4CAF50 ",
    },
  },
  textDuration: {
    fontFamily: "'PT Sans',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "150%",
    /* identical to box height, or 21px */
    marginBlockEnd: 0,
    marginBlockStart: 0,
    textAlign: "center",

    color: "rgba(18, 18, 18, 0.6)",
  },
  donasiWrapper: {
    background: "#E1F1F1",
    borderRadius: 15,
    padding: 16,
    marginTop: 8,
  },
  donasiInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "left",
    },
  },
}));

const DonationCard = () => {
  const classes = donationCardStyle();

  return (
    <div className={classes.base}>
      <div style={{ marginBottom: 40 }}>
        <div className={classes.head}>
          <h5 className={classes.titleHead}>
            Donasi untuk Abah Harun dan Emak Een
          </h5>
          <p className={classes.descHead}>
            Salurkan donasi terbaik yang kamu punya untuk Abah Harun dan Emak
            Een
          </p>
        </div>
        <div className={classes.body}>
          <Count name="Donasi Terkumpul" value={5178267} prefix="Rp" />
          <Count name="Donasi Tersalurkan" value={0} prefix="Rp" />

          <div className={classes.donasiWrapper}>
            <div className={classes.textDonasiSekarang}>
              Donasi sekarang dapat disalurkan melalui
            </div>
            <div className={classes.donasiInner}>
              <h6 className={classes.textNoRek}>13 90 46 78 14</h6>
              <span className={classes.textAN}>Bank BCA a/n Nita Maryam</span>
            </div>
          </div>
          <div
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 18,
              lineHeight: "21px",
              letterSpacing: "0.01em",

              color: "#121212",
              paddingTop: 16,
              marginBottom: 8,
            }}
          >
            Nara hubung
          </div>
          <OutlinedButton
            className={classes.whatsappButton}
            propsLink={{ target: "_blank", rel: "noreferrer" }}
            href="https://wa.me/6289689368296"
            text="Whatsapp (Nita)"
          />
        </div>
      </div>
      <div className={classes.textDuration}>
        Donasi terakhir kali terdupdate pada Senin, 9 November 2020 pukul 21:00
        WIB. Donasi akan ditutup pada hari Rabu, 11 November 2020 pukul 21:00
        WIB
      </div>
    </div>
  );
};

const Count = ({ name, value, prefix }) => {
  const classes = donationCardStyle();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [counted, setCounted] = useState(false);
  const { countUp, start } = useCountUp({
    start: 0,
    end: value,
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
    <div
      ref={ref}
      style={{ display: "flex", paddingBottom: 16, alignItems: "center" }}
    >
      <span className={classes.countName}>{name}</span>
      <h6 className={classes.count}> {countUp}</h6>
    </div>
  );
};

export default Program;
