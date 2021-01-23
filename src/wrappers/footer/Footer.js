import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          padding: "22px 24px",
          display: "flex",
          justifyContent: "center",
          background: "#2E3238",
        }}
      >
        <span
          style={{
            fontFamily: "'Raleway',sans-serif",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: "16px",
            textAlign: "center",
            letterSpacing: "0.01em",
            marginBlockEnd: 0,
            marginBlockStart: 0,
            color: "#FFFFFF",
          }}
        >
          Copyright by ©infocimahi.co
        </span>
      </div>
    </footer>
  );
};

export default Footer;
