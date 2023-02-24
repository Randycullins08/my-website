export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project-header">
        <h1>Projects</h1>
      </div>

      <div className="project-content">
        <div className="project">
          <div className="project-image">
            <a href="https://www.philyanzick.com/" target="_blank">
              <img src="/images/phil-yanzick.png" alt="Phil Yanzicks website" />
            </a>
          </div>
          <div>
            <a href="https://www.philyanzick.com/" target="_blank">
              <h3>Phil Yanzick</h3>
            </a>
            <p>
              I’m a music and sound producer operating from the great state of
              Montana. I have a background in engineering, mixing, and mastering
              bands from the Midwest, and Pacific Northwest. I have a passion
              for helping bands and artists realize their goals and the sounds
              they are trying to capture.
            </p>
            <p>Site built with nextjs and scss</p>
          </div>
        </div>
      </div>
    </div>
  );
}
