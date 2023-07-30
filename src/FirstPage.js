import React from "react";
import next from "./img/next.png";

export default function FirstPage({ navigatePages }) {
  return (
    <div className="page" id="page1">
      <h3 className="h3-right">First Page</h3>
      <img
        src={next}
        alt="next"
        className="next"
        onClick={navigatePages.nextPages}
      />
      <div className="content-page" id="content-page1">
        <div className="one">
          <h4>Bonjour et bienvenue !</h4>
        </div>
        <div className="two">
          <p>
            Je m'appelle <strong>Uslu Ali</strong> et j'aspire à devenir <strong>développeur full-stack.</strong>
          </p>
        </div>
        <div className="three">
          <p>
            Voici un projet personnel que j'ai déjà réalisé.
          </p>
        </div>
        <div className="four">
          <a
            href="https://collectmanganime.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Collectmanganime
            <div className="img"></div>
          </a>
        </div>
        <div className="five">
          <h5>Designer</h5>
          <div className="five-container">
            <div className="icons">
              <i class="fa-brands fa-figma"></i>
              <p>figma</p>
            </div>
            <div className="icons">
              <i class="fa-solid fa-font-awesome"></i>
              <p id="fa">font-awesome</p>
            </div>
            
          </div>
        </div>
        <div className="six">
          <h5>Développeur front-end</h5>
          <div className="six-container">
            <div className="icons">
              <i class="fa-brands fa-react"></i>
              <p>React</p>
            </div>
            <div className="icons">
              <i class="fa-brands fa-node"></i>
              <p>Node.js</p>
            </div>
            <div className="icons">
            <i class="fa-brands fa-sass"></i>
            <p>sass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
