import React, { useState } from "react"
import pawfect from "../../assets/images/pawfect-homepage.png";
import techBlog from "../../assets/images/mayfield-tech-blog-screenshot.png";
import textEditor from "../../assets/images/text-editor-demo.gif";
import weatherDash from "../../assets/images/weather-dash.png";
import noteTaker from "../../assets/images/Mayfield-Note-Taker-Demo.gif";
import dayPlanner from "../../assets/images/day-planner.gif";
import github from "../../assets/images/GitHub-Mark-32px.png";

function Portfolio() {
  // projects & links
  const projects = [
    {
      src: pawfect,
      title: "Pawfect Friends",
      tools:
        "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
      deploy: "https://pawfect-friends-app.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/Pawfect-Friends",
    },
    {
      src: techBlog,
      title: "Mayfield Tech Blog",
      tools:
        "HTML/Handlebars, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize",
      deploy: "https://mayfield-tech-blog.herokuapp.com/home",
      github: "https://github.com/Mayfieldmel/Mayfield-Tech-Blog",
    },
    {
      src: textEditor,
      title: "Mayfield Text Editor",
      tools: "Node.js, Express.js, Webpack, IndexedDB",
      deploy: "https://mayfield-text-editor.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/Mayfield-Text-Editor-PWA",
    },
    {
      src: weatherDash,
      title: "Weather Dash",
      tools: "HTML, CSS, JavaScript",
      deploy: "https://mayfieldmel.github.io/Weather-Dash/",
      github: "https://github.com/Mayfieldmel/Weather-Dash",
    },
    {
      src: noteTaker,
      title: "Mayfield Note Taker",
      tools: "Express.js, Node.js",
      deploy: "https://mayfield-note-taker.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/Mayfield-Note-Taker"
    },
    {
      src: dayPlanner,
      title: "Mayfield Day Planner",
      tools: "HTML, CSS, JQuery",
      deploy: "https://mayfieldmel.github.io/Mayfield-Day-Plannner/",
      github: "https://github.com/Mayfieldmel/Mayfield-Day-Plannner"
    },
  ];

  return (
    <div id="projects" className="projects">
      <div className="col-sm-12 section-header mx-5">
        <h3>Projects</h3>
      </div>
      <div className="col-sm-12 col-md-10 flex-shrink-1">
        <div className="card-deck row cards">
          {projects.map(project => (
            <div className="card">
                <img
                  className="card-img-top card-img-fluid"
                  src={project.src}
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle mb-2">{project.tools}</h6>
                  <p className="card-text card-text-box">
                    A secure pet social media site that allows users to create a pet profile, post text and images, and make comments on all content.
                  </p>
                  <div className="card-body list-group-item">
                    <a
                      href={project.deploy}
                      className="card-link text-white"
                      target="_blank"
                      rel="noreferrer"
                    >Deployed Link</a>
                    <a
                      href={project.github}
                      className="card-link text-white"
                      target="_blank"
                      rel="noreferrer"
                    >Github Link</a>
                  </div>
                </div>
                </div>
                ))}
        </div>
      </div>
    </div>
  )
  {/* const [projectCard, setProjectCard] = useState(projects[0]);
  const [hover, setHover] = useState(false);

  //jsx
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-section">
        {projects.map((project) => (
          <div
            key={project.title}
            className="container"
            onMouseEnter={() => {
              setHover(true);
              setProjectCard(project);
            }}
            onMouseLeave={() => {
              setHover(false);
              setProjectCard(project);
            }}
          >
            {hover && projectCard.title === project.title ? (
              <>
                <img
                  src={`${project.src}`}
                  alt="Pawfect Friends Homepage"
                  className="img"
                ></img>
                <div className="project-details">
                <span className="flex-row">
                  <a href={`${project.deploy}`} className="deployed">
                    {project.title}   
                  </a>
                    <a href={`${project.github}`}>
                    <img
                      className="github-icon"
                      alt="github icon"
                      src={`${github}`}
                    />
                    </a>
                  </span>
                  <p className="tools">{project.tools}</p>
                </div>
              </>
            ) : (
              <img
                src={`${project.src}`}
                alt={`${project.title}`}
                className="image"
              ></img>
            )}
          </div>
        ))}
      </div>
    </section>
            ); */}
}

export default Portfolio;
