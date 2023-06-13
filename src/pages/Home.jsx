import React from "react";

export default function Home() {
  return (
    <>
      <div className="background-wave">
        <div className="title">
          <h1>
            fontend <br />
            developer
          </h1>
        </div>
        <div className="description">
          <hr />
          <p>
            Hi, I’m <span>Jeanne</span>, a web development student with a
            passion for graphic design, cinema, video games and sport. <br />I
            am looking for an apprenticeship for 2023-2024.
          </p>
        </div>
      </div>
      <div className="social-networks">
        <a
          href="https://www.instagram.com/jeanneflammini.pro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/home/insta.png" alt="logo Instagram" />
        </a>
        <a
          href="https://github.com/JeannePacard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/home/github.png" alt="logo Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jeanne-pacard-flammini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/home/linkedin.png" alt="logo LinkedIn" />
        </a>
      </div>
    </>
  );
}
