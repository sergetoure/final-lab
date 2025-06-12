import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faSlack,
  faReddit,
  faMedium,
  faStackOverflow,
  //faEnvelope,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [iconList, setIconList] = useState([
    faLinkedin,
    faGithub,
    faFacebook,
    faSlack,
    faReddit,
    faMedium,
    faStackOverflow,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleClick = (icon) => {
    let url = "";
    switch (icon.iconName) {
      case "linkedin":
        url = "https://www.linkedin.com/in/serge-toure";
        break;
      case "github":
        url = "https://github.com/serge-toure";
        break;
      case "facebook":
        url = "https://www.facebook.com/serge.toure";
        break;
      case "slack":
        url = "https://slack.com/your-profile";
        break;
      case "reddit":
        url = "https://www.reddit.com/user/your-profile";
        break;
      case "medium":
        url = "https://medium.com/@your-profile";
        break;
      case "stackoverflow":
        url = "https://stackoverflow.com/users/your-profile";
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <header className={`App-header ${visible ? "" : "header-hidden"}`}>
      <div className="icon-list">
        {iconList.map((icon, index) => (
          <div key={index} className="icon-container">
            <FontAwesomeIcon
              key={index}
              icon={icon}
              size="2x"
              color="#fff"
              onClick={() => {
                handleClick(icon);
              }}
            />
          </div>
        ))}
      </div>

      <div>
        <menu>
          <a href="#landing">Home</a>
          <a href="#project">Projects</a>
          <a href="#contact-me">Contact Me</a>
        </menu>
      </div>
    </header>
  );
};

export default Header;
