import React from "react";
import classes from "./header.module.css";
import Timer from "./Timer";

// Define Header props.
type HeaderProps = {
  correctAnswers: number;
};

const Header = ({ correctAnswers }: HeaderProps) => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h3>Trivia</h3>
      </div>
      <ul className={classes.headerInfo}>
        <li>
          <Timer />
        </li>
        <li>
          correct : <span>{correctAnswers}</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
