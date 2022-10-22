import React from "react";


function ContactForm() {
  return (
    <div id="contact-me" className="card-body p-3 rounded">
      <h2 className="card-title about-title">Contact Me</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Phone:
          <a href="tel:919.449.5523" className="card-link a-dark">919.449.5523</a>
        </li>
        <li className="list-group-item">
          Email:
          <a
            href="mailto://mayfieldmel@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="card-link a-dark"
          >mayfieldmel@gmail.com</a>
        </li>
        <li className="list-group-item">
          <a
            href="https://github.com/Mayfieldmel"
            target="_blank"
            rel="noreferrer"
            className="btn button"
          >Github</a>
          <a
            href="https://www.linkedin.com/in/mjmayfield95/"
            className="btn button"
          >linkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactForm;
