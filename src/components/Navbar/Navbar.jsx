import { useState } from "react";
import { links, social } from "../../data";
import logo from "../../img/TheBlaiseCodewhite.png";
import "../Navbar/NavbarStyle.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setActivePage] = useState(links[0].url);

  function showMobileMenu() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  return (
    <nav>
      <div className="container">
        <div className="navContent">
          <a href={activePage} className="logo" aria-label={links[0].aria}>
            <img src={logo} alt="TheBlaiseCode Logo" />
          </a>

          <div className={isMobile ? "navLinks active" : "navLinks"}>
            <ul className="pages">
              {links.map((pageLink) => {
                const { id, url, text, aria } = pageLink;
                return (
                  <li key={id}>
                    <a
                      href={url}
                      aria-label={aria}
                      className={url === activePage ? "active" : ""}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="socials">
              {social.map((socialLinks) => {
                const { id, url, aria, icon } = socialLinks;
                return (
                  <li key={id}>
                    <a href={url} aria-label={aria} target="_blank">
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button className="mobileNav" onClick={showMobileMenu}>
            <i
              className={
                isMobile
                  ? "fa-solid fa-xmark fa-lg active"
                  : "fa-solid fa-bars fa-lg "
              }
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
