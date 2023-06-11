import React from "react";
import BankPic from "./bank.png";
import "./bank.scss";

const Bank = () => {
  return (
    <div className="projects-holderBank">
      <p>
        This is my banking website created with the help of paid courses. Only
        HTML, CSS, and JS were used.
      </p>
      <a className="git-forky" href="https://github.com/Svitok-Kristijan/Bank">
        GitHub
      </a>
      <a
        className="live-forky"
        href="https://main--profound-syrniki-b92fca.netlify.app/"
      >
        Live site
      </a>
      <img className="forky" src={BankPic} alt="forkyfy photo" />
    </div>
  );
};

export default Bank;
