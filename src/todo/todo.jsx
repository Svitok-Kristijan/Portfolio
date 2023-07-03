import React, {useEffect} from "react";
import TodoPic from "./todo.png";
import "./todo.scss";

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
    <div className="projects-holderTodo animate">
      <p>This is my todo list built in React.</p>
      <a className="git-forky" href="https://github.com/Svitok-Kristijan/todo">
        GitHub
      </a>
      <a
        className="live-forky"
        href="https://main--gleeful-vacherin-14d08c.netlify.app/"
      >
        Live site
      </a>
      <img className="forky" src={TodoPic} alt="forkyfy photo" />
    </div>
  );
};

export default Football;
