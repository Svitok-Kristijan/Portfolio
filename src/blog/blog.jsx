import React, {useEffect} from "react";
import BlogPic from "./blog.png";
import "./blog.scss";

const Blog = () => {
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
    <div className="projects-holderBlog animate">
      <p>This is a simple blog website built in React and Redux.</p>
      <a
        className="git-forky"
        href="https://github.com/Svitok-Kristijan/BlogNew"
      >
        GitHub
      </a>
      <a
        className="live-forky"
        href="https://main--inspiring-monstera-218daa.netlify.app/"
      >
        Live site
      </a>
      <img className="forky" src={BlogPic} alt="forkyfy photo" />
    </div>
  );
};

export default Blog;
