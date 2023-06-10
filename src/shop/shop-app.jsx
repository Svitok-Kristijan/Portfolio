import React from "react";
import shopPhoto from "./shop.png";
import "./shop.scss";

const Shop = () => {
  return (
    <div className="projects-holder2">
      <p>
        The shopping website I created during my learning process with the help
        of paid courses incorporates all the functionality of a typical shopping
        site.
      </p>
      <a
        className="git-forky"
        href="https://github.com/Svitok-Kristijan/MY-SHOP/tree/main"
      >
        GitHub
      </a>
      <a
        className="live-forky"
        href="https://main--steady-gumdrop-614990.netlify.app/"
      >
        Live site
      </a>
      <img className="forky" src={shopPhoto} alt="forkyfy photo" />
    </div>
  );
};

export default Shop;
