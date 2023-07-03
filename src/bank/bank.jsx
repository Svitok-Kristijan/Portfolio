import React, {useEffect} from "react";
import BankPic from "./bank.png";
import "./bank.scss";

const Bank = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 150) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="projects-holderBank animate">
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
