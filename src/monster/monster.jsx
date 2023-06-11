import React from "react";
import MonsterPic from "./monster.png";
import "./monster.scss";

const Monster = () => {
  return (
    <div className="projects-holderMonster">
      <p>
        This is my banking website created with the help of paid courses. Only
        HTML, CSS, and JS were used.
      </p>
      <a
        className="git-forky"
        href="https://github.com/Svitok-Kristijan/Monster"
      >
        GitHub
      </a>

      <img className="forky" src={MonsterPic} alt="forkyfy photo" />
    </div>
  );
};

export default Monster;
