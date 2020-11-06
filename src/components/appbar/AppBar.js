import { AppBar, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import OutlinedButton from "../button/OutlinedButton";
import A from "../link/A";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  base: {
    height: 94,
    marginLeft: 80,
    marginRight: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.5s all",
  },
  baseInner: {
    width: "100%",
    height: "100%",
  },
  logo: {
    float: "left",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  link: {
    float: "right",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  menuText: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: "0.01em",
    marginRight: 60,
    color: theme.palette.text.primary,
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
}));
const AppBarDesktop = ({ isStatic }) => {
  const classes = useStyles();
  const [isSticky, setIsSticky] = useState(isStatic);
  const handleScroll = () => {
    if (window.scrollY < 1) setIsSticky(false);
    else setIsSticky(true);
  };

  useEffect(() => {
    !isStatic && window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      style={{
        boxShadow: "none",
        background: !isSticky ? "none" : "#fff",
        transition: "0.5s all",
        zIndex: 200,
      }}
    >
      <div
        className={classes.base}
        style={{
          height: isSticky ? 80 : null,
        }}
      >
        <div className={classes.baseInner}>
          <div className={classes.logo}>
            {!isSticky ? (
              <A href="/">
                <img src="/logo-putih.svg" width={175} height={32} alt="logo" />
              </A>
            ) : (
              <A href="/">
                <img src="/logo-hitam.svg" width={175} height={32} alt="logo" />
              </A>
            )}
          </div>
          <div className={classes.link}>
            <A href="/" component="span">
              <h5
                className={classes.menuText}
                style={{ color: !isSticky ? "#FFF" : null }}
              >
                Siapa Kita?
              </h5>
            </A>
            <OutlinedButton
              text="Relawan Batch#2"
              href="/register"
              style={{
                color: !isSticky ? "#FFF" : null,
                fontSize: 18,
                padding: "8px 16px",
              }}
            />
          </div>
        </div>
      </div>
    </AppBar>
  );
};

const AppBarMobileStyle = makeStyles((theme) => ({
  base: {
    // height: 80,
    padding: "16px 24px",
    background: "white",
  },
  baseInner: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flex: "1 1",
  },
  menu: {
    flex: "0 0",
  },
  boxMenu: {
    height: 48,
    width: 64,
    display: "flex",
    justifyContent: "center",
    border: "1px solid #e4e4e4",
    borderRadius: 8,
    padding: 4,
    cursor: "pointer",
  },
}));

const AppBarMobile = () => {
  const classes = AppBarMobileStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.base}>
      <div className={classes.baseInner}>
        <div className={classes.logo}>
          <A href="/" component="div">
            <Image src="/cimahi-baik.png" width={175} height={32} alt="logo" />
          </A>
        </div>
        <div className={classes.menu}>
          <div className={classes.boxMenu}>
            <MenuIcon
              style={{ width: "100%", height: "100%" }}
              onClick={() => setOpen((open) => !open)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          transition: "all 0.5s",
          background: "white",
          maxHeight: open ? 600 : 0,
          opacity: open ? 1 : 0,
          transform: !open ? "translateY(100%)" : "translateY(0)",
          paddingTop: open ? 24 : 0,
        }}
      >
        <ListNav text="Siapa Kita?" href="/" />
        <ListNav text="Relawan Batch#2" href="/register" />
      </div>
    </div>
  );
};

const ListNav = ({ text, href }) => {
  return (
    <div
      style={{
        padding: "16px 16px",
        borderTop: "1px solid #e4e4e4",
      }}
    >
      <A href={href} component="div">
        <h5
          style={{
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 18,
            lineHeight: "21px",
            marginBlockStart: 0,
            marginBlockEnd: 0,
            color: "#121212",
          }}
        >
          {text}
        </h5>
      </A>
    </div>
  );
};

const AppBarComponent = ({ isStatic }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return isSm ? <AppBarMobile /> : <AppBarDesktop isStatic={isStatic} />;
};

export default AppBarComponent;
