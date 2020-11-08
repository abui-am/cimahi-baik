import { motion } from "framer-motion";
import React from "react";
import AppBar from "~/components/appbar/AppBar";
import Footer from "~/wrappers/footer/Footer";
const BasicLayout = ({ children, staticAppBar }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar isStatic={staticAppBar} />
      {children}
      <Footer />
    </motion.div>
  );
};

export default BasicLayout;
