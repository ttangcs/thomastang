import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header}>
      <nav>
        <h1>
          <Link className={headerStyles.title} to="/">
            Thomas Tang
          </Link>
        </h1>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeClassName}
              to="/resume"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
