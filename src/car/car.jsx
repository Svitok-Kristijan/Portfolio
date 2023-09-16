import React, {useEffect} from "react";
import CarPhoto from "./car.png";
import "./car.scss";

const Car = () => {
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
      <p>This is my first exercises with Mobx and CRUD functionalities.</p>
      <a className="git-car" href="https://github.com/Svitok-Kristijan/mono">
        GitHub
      </a>
      <a className="live-car" href="https://dreamy-dodol-451876.netlify.app">
        Live site
      </a>
      <img className="car" src={CarPhoto} alt="car photo" />
    </div>
  );
};

export default Car;
