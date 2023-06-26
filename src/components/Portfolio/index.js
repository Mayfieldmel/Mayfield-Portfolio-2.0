import React, { useState } from "react"
import javaBlog from "../../assets/images/java-social-media-api.png";
import libraryAPI from "../../assets/images/java-library-api.png";
import pawfect from "../../assets/images/pawfect-homepage.png";
import techBlog from "../../assets/images/mayfield-tech-blog-screenshot.png";
import weatherDash from "../../assets/images/weather-dash.png";
import eCommerce from "../../assets/images/ecommerce-backend-insomnia.png";
import playerUp from "../../assets/images/player-readme.png";
import reactPortfolio from "../../assets/images/mayfield-react-portfolio-screenshot.png"


function Portfolio() {
  // projects & links
  const projects = [
    {
      src: javaBlog,
      title: "Java Social Media API",
      tools: "Java, Maven, Javelin, MySQL, JUnit, Mockito",
      deploy: "https://github.com/Mayfieldmel/JAVA-Social-media-blog-API",
      github: "https://github.com/Mayfieldmel/JAVA-Social-media-blog-API",
      description: "A backend for a social media blog that allows users to create & login to accounts, create and view messages, as well as update and delete messages."
    },
    {
      src: libraryAPI,
      title: "Java Library API",
      tools: "Java, Maven, Javelin, h2database, JUnit, Mockito, Jackson databind",
      deploy: "https://github.com/Mayfieldmel/Mayfieldmel-Library",
      github: "https://github.com/Mayfieldmel/Mayfieldmel-Library",
      description: "A library api that allows users to track and manage library books. Can add books to the library, check books out, query available books"
    },
    {
      src: pawfect,
      title: "Pawfect Friends",
      tools:
        "HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",
      deploy: "https://pawfect-friends-app.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/Pawfect-Friends",
      description: "A secure pet social media site that allows users to create a pet profile, post text and images, and make comments on all content. *Group Project; Role: Team Manager"
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
      src: playerUp,
      title: "Player Up",
      tools:
        "MERN Stack, GraphQL",
      deploy: "https://playerup2022.herokuapp.com/",
      github: "https://github.com/Mayfieldmel/player-up",
      description: "A secure social application that allows users to connect with other gamers and organize group games. Create a profile, post and host events, or rsvp to games happening in your local area. *Group Project; Role: Team Manager"
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
      src: eCommerce,
      title: "Mayfield E-Commerce Backend",
      tools: " MySQL, Node.js, Express.js, Insomnia",
      deploy: "https://watch.screencastify.com/v/OmwUlVLAFiuLAnclghWA",
      github: "https://github.com/Mayfieldmel/Mayfield-Ecommerce-Backend",
      description: "Provides the backend to an e-commerce website. The app configures a working api to use Sequelize to interact with a MySQL database."
    },
  ];
  const challenges = [
    {
      title: "Fibonacci Sequence",
      github: "https://github.com/Mayfieldmel/Mayfieldmel-Fibonacci",
      description: "The fibonacci sequence is calculated by adding the previous two numbers in the sequence to obtain the next number. Return the nth number of fibonacci sequence."
    },
    {
      title: "Palindrome",
      github: "https://github.com/Mayfieldmel/Mayfieldmel-StringIsPalindrome",
      description: "Palindromes are words that are the same forwards as they are backwards - eg, 'bob', 'racecar'. Return true if str is a palindrome, false otherwise."
    },
    {
      title: "Pawfect Friends",
      github: "https://github.com/Mayfieldmel/Pawfect-Friends",
      description: "A secure pet social media site that allows users to create a pet profile, post text and images, and make comments on all content. *Group Project; Role: Team Manager"
    },
    {
      title: "Mayfield React Portfolio",
      github: "https://github.com/Mayfieldmel/Mayfield-React-Portfolio",
      description: "My portfolio offers a brief overview of who I am and what I can do. Explore the many projects I have developed at the UNC Chapel Hill Coding Bootcamp and reach out to get to know me better."
    },
    {
      title: "Mayfield Tech Blog",
      github: "https://github.com/Mayfieldmel/Mayfield-Tech-Blog",
      description: "Provides a secure platform for users to blog about the latests trends in technology. Users can sign-up, login, post blog entries, comment on blog entries, and maintain their own personal dashboard."
    },
    {
      title: "Player Up",
      github: "https://github.com/Mayfieldmel/player-up",
      description: "A secure social application that allows users to connect with other gamers and organize group games. Create a profile, post and host events, or rsvp to games happening in your local area. *Group Project; Role: Team Manager"
    },
    {
      title: "Weather Dash",
      github: "https://github.com/Mayfieldmel/Weather-Dash",
      description: "A weather app that allows users to check weather forecasts by city. Users can enter city names and weather data is fetched from openweathermap api."
    },
    {
      title: "Mayfield E-Commerce Backend",
      github: "https://github.com/Mayfieldmel/Mayfield-Ecommerce-Backend",
      description: "Provides the backend to an e-commerce website. The app configures a working api to use Sequelize to interact with a MySQL database."
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
      <div className="col-sm-12 section-header mx-5">
        <h3>Java Coding Challenges</h3>
      </div>
      <div className="col-sm-12 col-md-10 flex-shrink-1">
        <div className="card-deck row cards">
          {challenges.map(project => (
            <div className='card' onMouseEnter={() => {
              setHover(true);
              setProjectCard(project);
            }}
              onMouseLeave={() => {
                setHover(false);
                setProjectCard(project);
              }}>
              <div className="card-body">
                <h5 className="card-title card-title-font">{project.title}</h5>
                <p className="card-text card-text-box card-font">
                  {project.description}
                </p>
                <div className={`card-body list-group-item ${hover && projectCard.title === project.title && 'card-hover'}`}>
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
