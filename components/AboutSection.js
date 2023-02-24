import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutSection() {
  return (
    <div className="about-section-container">
      <div className="about-wrapper">
        <div className="bio">
          <h3>About Me</h3>
          <div className="bio-content">
            <p>
              Experienced Junior Software Engineer with a demonstrated history
              of working in the computer software industry. Skilled in Front-end
              Development, HTML, Cascading Style Sheets (CSS), Javascript, SCSS,
              Python, React, Github, and Bootstrap. Strong engineering
              professional with a Full Stack Web Development focused in Web
              development from DevPipeline.
            </p>
          </div>
        </div>
      </div>
      <div className="skills-wrapper">
        <h3>Skills</h3>

        <div className="icons-wrapper">
          <div className="icon-names">
            <FontAwesomeIcon icon={faHtml5} />
            <p>HTML 5</p>
          </div>

          <div className="icon-names">
            <FontAwesomeIcon icon={faCss3} />
            <p>CSS 3</p>
          </div>

          <div className="icon-names">
            <FontAwesomeIcon icon={faSass} />
            <p>Sass</p>
          </div>

          <div className="icon-names">
            <FontAwesomeIcon icon={faJsSquare} />
            <p>Javascript</p>
          </div>

          <div className="icon-names">
            <FontAwesomeIcon icon={faReact} />
            <p>React</p>
          </div>

          <div className="icon-names">
            <FontAwesomeIcon icon={faPython} />
            <p>Python</p>
          </div>

          <div className="icon-names">
            <img src="/images/pocoo_flask-icon.svg" alt="flask-icon" />
            <p>Flask</p>
          </div>

          <div className="icon-names">
            <img
              className="sqlalchemy"
              src="/images/sqlalchemy.svg"
              alt="sqlalchemy"
            />
            <p>SqlAlchemy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
