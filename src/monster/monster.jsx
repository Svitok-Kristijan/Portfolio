import React, {useEffect} from "react";
import MonsterPic from "./monster.png";
import "./monster.scss";

const Monster = () => {
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
    <div className="projects-holderMonster animate">
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
