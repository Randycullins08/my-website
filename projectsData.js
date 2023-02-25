import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const projectData = [
  {
    id: 0,
    img: "/images/phil-yanzick.png",
    alt: "Phil Yanzicks Website",
    link: "https://www.philyanzick.com/",
    title: <h3>Phil Yanzick</h3>,
    description: <p>Site built for Phil Yanzick to promote his studio</p>,
    builtWith: <p>Site built with nextjs and scss</p>,
    github: (
      <a
        target="_blank"
        href="https://github.com/Randycullins08/phil-yanzick-nextjs"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    ),
  },

  {
    id: 1,
    img: "/images/sky-drftr.png",
    alt: "Sky Drftr Website",
    link: "https://www.skydrftr.com/",
    title: <h3>Sky Drftr</h3>,
    description: <p>Site built for Sky Drftr band to promote their music</p>,
    builtWith: <p>Site built with react and scss</p>,
    github: (
      <a
        target="_blank"
        href="https://github.com/Randycullins08/sky-drftr-react"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    ),
  },

  {
    id: 2,
    img: "/images/e-commerce.png/",
    alt: "E-commerce site",
    link: "https://rdc-ecommerce-app-practice.netlify.app/",
    title: <h3>E-Commerce App</h3>,
    description: <p>E-Commerce practice app</p>,
    builtWith: <p>Site built with react and scss</p>,
    github: (
      <a
        target="_blank"
        href="https://github.com/Randycullins08/e-commmerce-app"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    ),
  },

  {
    id: 3,
    img: "/images/react-widget.png",
    alt: "React Widget App",
    link: "https://rdc-react-widgets.netlify.app/",
    title: <h3>React Widgets App</h3>,
    description: (
      <p>Widgets app built with fun coding challenges like fizzbuzz</p>
    ),
    builtWith: <p>Site built with react and scss</p>,
    github: (
      <a target="_blank" href="https://github.com/Randycullins08/react-widgets">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    ),
  },
];
