import "./Footer.css";

import { motion } from "framer-motion";
import { useIsMobile } from "../../Logic/Mobile";

import Instagram from "../../assets/images/instagram_logo.png";
import Github from "../../assets/images/github_logo.png";
import Linkedin from "../../assets/images/linkedin_logo.png";
import UpArrow from "../../assets/images/up_arrow.png";

import Text from "../../components/Layout/Text/Text";
import CircleLink from "../../components/Layout/CircleLink/CircleLink";

const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="m-footer">
        <div className="m-footer-box-1 m-footer-box">
          <span>thanks for visiting</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("hero");
              if (el && window.lenis) {
                window.lenis.scrollTo(el, {
                  offset: 0,
                  duration: 2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              }
            }}
          >
            <div className="m-footer-circle">
              <img src={UpArrow} alt="" />
            </div>
          </a>
        </div>

        <div className="m-divide-2"></div>

        <div className="m-footer-box-2 m-footer-box">
          <a href="https://www.linkedin.com/in/nilanshugarhewal/">
            <div className="m-footer-circle">
              <img src={Linkedin} alt="" />
            </div>
          </a>

          <a href="https://github.com/NilanshuGarhewal">
            <div className="m-footer-circle">
              <img src={Github} alt="" />
            </div>
          </a>

          <a href="">
            <div className="m-footer-circle">
              <img src={Instagram} alt="" />
            </div>
          </a>
        </div>


        <div className="m-footer-box-3 m-footer-box">get in touch</div>

        <div className="m-divide-2"></div>

        <div className="m-footer-box-4 m-footer-box">
          <p>© all rights reserved</p>
          <p>nilanshugarhewal1@gmail.com</p>
        </div>
      </div>
    );
  }

  return (
    <div className="footer">
      <div className="greeting">
        <Text text={"thanks for visiting"} coin={1} size={12} height={150} />

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("hero");
            if (el && window.lenis) {
              window.lenis.scrollTo(el, {
                offset: 0,
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            }
          }}
        >
          <CircleLink image={UpArrow} link={"#"} a={"yes"} />
        </a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-box-1">
        <div className="footer-links">
          <CircleLink link={"#"} image={Instagram} />
          <CircleLink
            link={"https://github.com/NilanshuGarhewal"}
            image={Github}
          />
          <CircleLink
            link={"https://www.linkedin.com/in/nilanshugarhewal/"}
            image={Linkedin}
          />
        </div>

        <div className="get-in-touch">
          <Text text={"get in touch"} height={150} size={12} coin={0} />
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-box-2">
        <p>© all rights reserved</p>
        <p>nilanshugarhewal1@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
