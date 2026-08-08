import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <Link to="/" className={classes.title}>
          Blog
        </Link>
        <nav className={classes.nav}>
          <Link to="/contact" className={classes.navLink}>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
};