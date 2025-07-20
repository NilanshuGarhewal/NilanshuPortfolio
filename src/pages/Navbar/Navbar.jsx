import "./Navbar.css";

import Menu from "../../components/navbar/Menu";
import Text from "../../components/Layout/Text/Text";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Text text={"ng"} height={37} size={3} coin={1} />
      </div>

      {/* <Menu /> */}
    </div>
  );
}
