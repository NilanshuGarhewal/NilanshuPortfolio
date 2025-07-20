import "./Navbar.css";

// import Menu from "../../components/navbar/Menu";
import Text from "../../components/Layout/Text/Text";

import { useIsMobile } from "../../Logic/Mobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="m-navbar">
        <div className="m-nav-logo">
          <Text text={"ng"} height={28} size={2} coin={1} />
        </div>
      </div>
    );
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Text text={"ng"} height={37} size={3} coin={1} />
      </div>

      {/* <Menu /> */}
    </div>
  );
}
