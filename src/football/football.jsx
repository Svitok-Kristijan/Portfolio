import React from "react";
import FootballPic from "./football.png";
import "./football.scss";

const Football = () => {
  return (
    <div className="projects-holderFootball">
      <p>
        This is my first independent webpage that I have designed, a football
        website that features some soccer news, its own shop, and user
        registration.
      </p>
      <a className="git-forky" href="https://github.com/svile7/Football">
        GitHub
      </a>
      <a
        className="live-forky"
        href="https://main--fastidious-bavarois-cc635a.netlify.app/"
      >
        Live site
      </a>
      <img className="forky" src={FootballPic} alt="forkyfy photo" />
    </div>
  );
};

export default Football;
