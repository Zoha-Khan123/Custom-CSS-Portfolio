import React from "react";
import "./style.css";
import Nav from "../componant/Nav";
const porfolio = () => {
  return (
    <div className="mainCards">
      <Nav />
      <h2>A Shining Portfolio</h2>
      <p className="des">My Projects are here</p>
      <div className="grid">
        <div>
          <iframe src="https://milestone-01-two.vercel.app/"></iframe>
        </div>

        <div>
          <iframe src="https://dynamic-editable-shareable-pdf-resumes.vercel.app/"></iframe>
        </div>
        <div>
          <iframe src="https://express-nature-beauty-grid-layout.netlify.app/"></iframe>
        </div>
        <div>
          <iframe src="https://foresty-website.vercel.app/"></iframe>
        </div>

        <div>
          <iframe src="https://saylani-hackathon-six.vercel.app/"></iframe>
        </div>

        <div>
          <iframe src="https://uses-grid-make-mini-project.netlify.app/"></iframe>
        </div>
      </div>
    </div>
  );
};

export default porfolio;
