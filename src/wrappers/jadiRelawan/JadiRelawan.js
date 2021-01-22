import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import OutlinedButton from "~/components/button/OutlinedButton";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
const division = [
  {
    name: "Divisi Program",
    tupoksi: ["Membuat Suatu Program  jangka pendek dan jangka panjang"],
  },
  {
    name: "Divisi Surveyor",
    tupoksi: [
      "Mengatur titik penyaluran, sasaran donasi dan survey ke lapangan sasaran donasi ",
    ],
  },
  {
    name: "Divisi Humas",
    tupoksi: [
      "Mencari Donatur",
      "Menghubungkan dengan sistem sumber yang ada",
      "Menjalin kerjasama dengqn pihak internal",
    ],
  },
  {
    name: "Kreatif Pubdok",
    tupoksi: [
      "Mendokumentasikan kegiatan penyaluran",
      "Membuat desain yang diperlukan",
      "Sebagai Admin Media Sosial Cimahi Baik",
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "'Raleway',sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: "56px",
    textAlign: "center",

    color: "#121212",
    marginBlockStart: 0,
    marginBlockEnd: "36px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      lineHeight: "1.3",
    },
  },
  textBody: {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: "150%",
    textAlign: "center",
    marginBlockStart: 0,
    marginBlockEnd: "80px",

    marginRight: "auto",
    marginLeft: "auto",
    color: "#232323",
  },
}));
const JadiRelawan = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 80, paddingBottom: 80 }}>
      <h1 className={classes.title}>Divisi yang terbuka</h1>
      <div className={classes.textBody}>
        Kami membutuhkan beberapa orang untuk membantu divisi yang tersedia,
        silahkan lihat terlebih dulu tupoksinya sebelum memilih
      </div>

      {division.map((div, index) => (
        <List
          name={div.name}
          index={index}
          tupoksi={div.tupoksi}
          key={div.name}
        />
      ))}
      <OutlinedButton
        href="https://forms.gle/vMCN27SH614noH4N7"
        propsLink={{ target: "_blank", rel: "noreferrer" }}
        text="Lanjut Isi Formulir"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 80,
          width: "100%",
        }}
      />
    </div>
  );
};

const ListStyle = makeStyles(() => ({
  base: {
    padding: 36,
    marginBottom: 40,
    background: "#FFFFFF",
    boxShadow: "0px 4px 20px 20px rgba(49, 107, 137, 0.05)",
    borderRadius: 8,
    transition: "all 0.5s",
  },
  number: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,

    marginBlockEnd: 0,
    marginBlockStart: 0,
    lineHeight: "28px",

    color: "#316B89",
  },
  textDivision: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,

    marginBlockEnd: 0,
    marginBlockStart: 0,
    lineHeight: "21px",
    paddingLeft: 44,

    color: "#131313",
  },
  seeTupoksi: {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "23px",
    marginBlockEnd: 0,
    marginBlockStart: 0,
    cursor: "pointer",
    color: "rgba(54, 54, 54, 0.6)",
    transition: "all 0.5s",
    display: "flex",
    "&:hover": {
      color: "#2A5693",
      transition: "all 0.5s",
    },
  },
  listItem: {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: "180%",
    /* or 32px */

    color: "#000000",
    textAlign: "left",
    opacity: 0.6,
  },
  listOuter: {
    transition: "all 0.5s",
    overflow: "hidden",
    height: "100%",
    transform: "translateY(-100%)",
  },
  list: {
    borderTop: "1px solid #e4e4e4",
    paddingTop: 24,
    marginTop: 36,
    transition: "all 0.5s",
  },
}));

const List = ({ index, name, tupoksi = [] }) => {
  const classes = ListStyle();
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.base}>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => setShow((show) => !show)}
      >
        <div style={{ display: "flex", flex: "1 1" }}>
          <span className={classes.number}>{index + 1}</span>
          <h6 className={classes.textDivision}>{name}</h6>
        </div>
        <div style={{ flex: "0 0 " }}>
          <div
            className={classes.seeTupoksi}
            style={{ color: show ? "#2A5693" : null }}
          >
            {!isSm ? (
              <span style={{ flex: "1 1", whiteSpace: "nowrap" }}>
                Lihat Tupoksi
              </span>
            ) : null}
            {show ? (
              <ExpandLessRoundedIcon style={{ marginLeft: 16 }} />
            ) : (
              <ExpandMoreRoundedIcon style={{ marginLeft: 16 }} />
            )}
          </div>
        </div>
      </div>

      <div
        className={classes.listOuter}
        style={{
          transform: show ? "translateY(0)" : null,
          opacity: show ? 1 : 0,
          maxHeight: show ? 500 : 0,
        }}
      >
        <ul className={classes.list}>
          {tupoksi.map((item) => (
            <li className={classes.listItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JadiRelawan;
