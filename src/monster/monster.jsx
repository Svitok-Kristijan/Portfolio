import React from "react";
import MonsterPic from "./monster.png";
import "./monster.scss";

const Monster = () => {
  return (
    <div className="projects-holderMonster">
      <p>This is one of the first React pages I created as an exercise.</p>
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
