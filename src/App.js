import Kristijan from "./ja2.jpg";
import forky from "./forkyfy.png";
import "./App.scss";
import Shop from "./shop/shop-app";
import Football from "./football/football";
import Bank from "./bank/bank";
import Monster from "./monster/monster";
import Facebook from "./facebook.png";

function App() {
  return (
    <div className="App">
      <h1 className="cropped-image">Welcome</h1>
      <div className="aboutMe">
        <h3>About me</h3>
        <img src={Kristijan} className="photo" alt="logo" />
        <p>
          My name is Kristijan Svitok. <br></br> I live and work in Germany.
          <br></br>I am of Croatian nationality and I am 26 years old.
          <br></br>I am a self-taught front-end developer.
          <br></br> Coding is my passion, and I have been learning for a year
          now.
          <br></br>In my learning journey, I have acquired knowledge of HTML,
          CSS/SASS, JavaScript/React, Git/GitHub. <br></br>I am proficient in
          both spoken and written English and I have good speaking skills in
          German, although my writing skills in German are somewhat weaker.
          Additionally, I am fluent in the Croatian language.
        </p>
      </div>
      <div className="projects">
        <h2>Some of my projects and exercises</h2>
        <div className="projects-holder">
          <p>
            This is one of the first exercises I did, copying the Forkyfy
            webpage.
          </p>
          <a
            className="git-forky"
            href="https://github.com/Svitok-Kristijan/Forky/tree/ca07d4384f40125bbb0337f416b7db277628e56d/starter"
          >
            GitHub
          </a>

          <img className="forky" src={forky} alt="forkyfy photo" />
        </div>
        <Shop />
        <Football />
        <Bank />
        <Monster />
      </div>
      <footer class="footer">
        <p className="expl">
          This portfolio is designed to be mobile responsive. Other pages are
          not, but for the optimal experience, please view them on a larger
          screen resolution.
        </p>
        <div class="footer-content">
          <h3>My Information</h3>
          <p>Email: svile007@gmail.com</p>
          <p>Phone: 015112387624</p>
        </div>
        <div class="footer-contents">
          <p>Follow me on social media</p>
          <a href="https://www.facebook.com/kristijankyko.svitok">
            <img src={Facebook} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
