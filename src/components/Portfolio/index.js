import React, { useState } from "react"
import pawfect from "../../assets/images/pawfect-homepage.png";
import techBlog from "../../assets/images/mayfield-tech-blog-screenshot.png";
import textEditor from "../../assets/images/text-editor-demo.gif";
import weatherDash from "../../assets/images/weather-dash.png";
import noteTaker from "../../assets/images/Mayfield-Note-Taker-Demo.gif";
import dayPlanner from "../../assets/images/day-planner.gif";
import reactPortfolio from "../../assets/images/mayfield-react-portfolio-screenshot.png"
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
      description: "A secure pet social media site that allows users to create a pet profile, post text and images, and make comments on all content."
    },
    {
      src: reactPortfolio,
      title: "Mayfield React Portfolio",
      tools:
        "HTML, CSS, JavaScript/JSX, React.js",
      deploy: "https://mayfieldmel.github.io/Mayfield-React-Portfolio/",
      github: "https://github.com/Mayfieldmel/Mayfield-React-Portfolio",
      description: "My portfolio offers a brief overview of who I am and what I can do. Explore the many projects I have developed at the UNC Chapel Hill Coding Bootcamp and reach out to get to know me better."
    },
    {
      src: techBlog,
      title: "Mayfield Tech Blog",
      tools:
        "HTML/Handlebars, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize",
      deploy: "https://mayfield-tech-blog.herokuapp.com/home",
      github: "https://github.com/Mayfieldmel/Mayfield-Tech-Blog",
      description: "Provides a secure platform for users to blog about the latests trends in technology. Users can sign-up, login, post blog entries, comment on blog entries, and maintain their own personal dashboard."
    },
    {
      src: textEditor,
      title: "Mayfield Text Editor(PWA)",
      tools: "Node.js, Express.js, Webpack, IndexedDB",
      deploy: "https://mayfield-text-editor.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/Mayfield-Text-Editor-PWA",
      description: "A single-page Progressive Web App that allows users to create notes or code snippets with or without an internet connection."
    },
    {
      src: weatherDash,
      title: "Weather Dash",
      tools: "HTML, CSS, JavaScript",
      deploy: "https://mayfieldmel.github.io/Weather-Dash/",
      github: "https://github.com/Mayfieldmel/Weather-Dash",
      description: "A weather app that allows users to check weather forecasts by city. Users can enter city names and weather data is fetched from openweathermap api."
    },
    {
      src: noteTaker,
      title: "Mayfield Note Taker",
      tools: "Express.js, Node.js",
      deploy: "https://mayfield-note-taker.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/Mayfield-Note-Taker",
      decription: "A dynamic platform for users to take and store notes. Notes are saved to a remote server hosted by Heroku. Front-end code provided to me. I worked on the backend."
    },
    {
      src: dayPlanner,
      title: "Mayfield Day Planner",
      tools: "HTML, CSS, JQuery",
      deploy: "https://mayfieldmel.github.io/Mayfield-Day-Plannner/",
      github: "https://github.com/Mayfieldmel/Mayfield-Day-Plannner",
      description: "A work-day scheduling app that allows users to create, monitor, and edits tasks for each hour of the 9-5 workday."
    },
  ];
  const [projectCard, setProjectCard] = useState(projects[0]);
  const [hover, setHover] = useState(false);

  return (
    <div id="projects" className="projects">
      <div className="col-sm-12 section-header mx-5">
        <h3>Projects</h3>
      </div>
      <div className="col-sm-12 col-md-10 flex-shrink-1">
        <div className="card-deck row cards">
          {projects.map(project => (
            <div className='card' onMouseEnter={() => {
              setHover(true);
              setProjectCard(project);
            }}
              onMouseLeave={() => {
                setHover(false);
                setProjectCard(project);
              }}>
              <img
                className="card-img-top card-img-fluid"
                src={project.src}
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title card-title-font">{project.title}</h5>
                <h6 className="card-subtitle mb-2 card-font">{project.tools}</h6>
                <p className="card-text card-text-box card-font">
                  {project.description}
                </p>
                <div className={`card-body list-group-item ${hover && projectCard.title === project.title && 'card-hover'}`}>
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
}
export default Portfolio;
