import Kristijan from "./ja2.jpg";
import forky from "./forkyfy.png";
import "./App.scss";
import Shop from "./shop/shop-app";
import Football from "./football/football";

function App() {
  return (
    <div className="App">
      <h1 className="cropped-image">Welcome</h1>
      <div className="aboutMe">
        <h3>About me</h3>
        <img src={Kristijan} className="photo" alt="logo" />
        <p>
          My name is Kristijan Svitok. <br></br> I am living and working in
          Germany.<br></br>I am Croatian by nationality.<br></br> I am 26 years
          old.<br></br>I am a self-taught front-end developer.
          <br></br>My passion is coding and I have been learning for a year now.
          <br></br>In my learning, I have knowledge of HTML, CSS/SASS,
          JavaScript/React, Git/GitHub.<br></br>I possess knowledge of English
          language in speaking and writing, as well as proficiency in German
          language in speaking and somewhat weaker in writing. Additionally, I
          am fluent in Croatian language.
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
          <a className="live-forky" href="#">
            Live site
          </a>
          <img className="forky" src={forky} alt="forkyfy photo" />
        </div>
        <Shop />
        <Football />
      </div>
    </div>
  );
}

export default App;
