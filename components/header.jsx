import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  //faEnvelope,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";

const Header = () => {
  const [iconList, setIconList] = useState([
    faLinkedin,
    faGithub,
    //faEnvelope,
  ]);
  return (
    <>
      <header className="App-header">
        <div>
          {iconList.map((icon, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              size="2x"
              style={{ margin: "0 1rem" }}
            />
          ))}
        </div>
        <div>
          <menu>
            <a href="/">Projects</a>
            <a href="/">Contact Me</a>
          </menu>
        </div>
      </header>
    </>
  );
};

export default Header;
