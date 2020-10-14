import { motion } from "framer-motion";
import React from "react";
import AppBar from "~/components/appbar/AppBar";

const BasicLayout = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar />
      {children}
    </motion.div>
  );
};

export default BasicLayout;
