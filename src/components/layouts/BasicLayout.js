import { motion } from "framer-motion";
import React from "react";
import AppBar from "~/components/appbar/AppBar";

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
    </motion.div>
  );
};

export default BasicLayout;
