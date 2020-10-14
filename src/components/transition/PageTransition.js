/* eslint-disable react/react-in-jsx-scope */
import { AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
};

export default PageTransition;
