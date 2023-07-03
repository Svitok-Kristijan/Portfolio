import React, {useEffect} from "react";
import shopPhoto from "./shop.png";
import "./shop.scss";

const Shop = () => {
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
    <div className="projects-holderShop animate">
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
