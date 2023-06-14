import React from "react";
import TodoPic from "./todo.png";
import "./todo.scss";

const Football = () => {
  return (
    <div className="projects-holderTodo">
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
