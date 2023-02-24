import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <h3>Randy Cullins</h3>
      <div className="social-links">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/randy-cullins-270926194"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a target="_blank" href="https://github.com/Randycullins08">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
