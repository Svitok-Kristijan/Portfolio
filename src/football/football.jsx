import React, {useEffect} from "react";
import FootballPic from "./football.png";
import "./football.scss";

const Football = () => {
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
    <div className="projects-holderFootball animate">
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
