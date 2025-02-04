import React from "react";
import "../../css-styles/ProjectCard.css";
import { useTheme } from "../../Theme/ThemeProvider";

function ProjectCard() {
  const theme = useTheme();
  console.log(theme);
  return (
    <div>
      {/* <div className="shuffle-wrapper">
        <div className="about-project">Project Name</div>
        <div className="project-image"></div>
      </div> */}
      <div class="work">
        {/* <div class="work-header">
          <span>
            <svg
              width="16"
              height="40"
              viewBox="0 0 8 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99999 18C6.46955 18 5.96085 17.7893 5.58577 17.4142C5.2107 17.0391 4.99999 16.5304 4.99999 16V13.61C5.00042 12.9513 4.83816 12.3027 4.52764 11.7218C4.21712 11.1408 3.76793 10.6456 3.21999 10.28L2.79999 10L3.21999 9.72C3.76793 9.35442 4.21712 8.85917 4.52764 8.27825C4.83816 7.69733 5.00042 7.04871 4.99999 6.39V4C4.99999 3.46957 5.2107 2.96086 5.58577 2.58579C5.96085 2.21071 6.46955 2 6.99999 2C7.2652 2 7.51956 1.89464 7.70709 1.70711C7.89463 1.51957 7.99999 1.26522 7.99999 1C7.99999 0.734784 7.89463 0.48043 7.70709 0.292893C7.51956 0.105357 7.2652 0 6.99999 0C5.93912 0 4.92171 0.421427 4.17156 1.17157C3.42142 1.92172 2.99999 2.93913 2.99999 4V6.39C3.00103 6.7202 2.92029 7.04552 2.765 7.33692C2.6097 7.62832 2.38467 7.87674 2.10999 8.06L0.449988 9.17C0.313865 9.26148 0.202329 9.38503 0.125209 9.52977C0.0480885 9.67451 0.00775146 9.836 0.00775146 10C0.00775146 10.164 0.0480885 10.3255 0.125209 10.4702C0.202329 10.615 0.313865 10.7385 0.449988 10.83L2.10999 11.94C2.38467 12.1233 2.6097 12.3717 2.765 12.6631C2.92029 12.9545 3.00103 13.2798 2.99999 13.61V16C2.99999 17.0609 3.42142 18.0783 4.17156 18.8284C4.92171 19.5786 5.93912 20 6.99999 20C7.2652 20 7.51956 19.8946 7.70709 19.7071C7.89463 19.5196 7.99999 19.2652 7.99999 19C7.99999 18.7348 7.89463 18.4804 7.70709 18.2929C7.51956 18.1054 7.2652 18 6.99999 18Z"
                fill="#14E956"
              ></path>
            </svg>
            <h2>All Works</h2>
            <svg
              width="16"
              height="40"
              viewBox="0 0 8 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55 9.17L5.89 8.06C5.61532 7.87674 5.39029 7.62832 5.23499 7.33692C5.07969 7.04552 4.99896 6.7202 5 6.39V4C5 2.93913 4.57857 1.92172 3.82843 1.17157C3.07828 0.421427 2.06087 0 1 0C0.734784 0 0.480429 0.105357 0.292892 0.292893C0.105356 0.48043 0 0.734784 0 1C0 1.26522 0.105356 1.51957 0.292892 1.70711C0.480429 1.89464 0.734784 2 1 2C1.53043 2 2.03914 2.21071 2.41421 2.58579C2.78929 2.96086 3 3.46957 3 4V6.39C2.99957 7.04871 3.16183 7.69733 3.47235 8.27825C3.78287 8.85917 4.23205 9.35442 4.78 9.72L5.2 10L4.78 10.28C4.23205 10.6456 3.78287 11.1408 3.47235 11.7218C3.16183 12.3027 2.99957 12.9513 3 13.61V16C3 16.5304 2.78929 17.0391 2.41421 17.4142C2.03914 17.7893 1.53043 18 1 18C0.734784 18 0.480429 18.1054 0.292892 18.2929C0.105356 18.4804 0 18.7348 0 19C0 19.2652 0.105356 19.5196 0.292892 19.7071C0.480429 19.8946 0.734784 20 1 20C2.06087 20 3.07828 19.5786 3.82843 18.8284C4.57857 18.0783 5 17.0609 5 16V13.61C4.99896 13.2798 5.07969 12.9545 5.23499 12.6631C5.39029 12.3717 5.61532 12.1233 5.89 11.94L7.55 10.83C7.68612 10.7385 7.79766 10.615 7.87478 10.4702C7.9519 10.3255 7.99224 10.164 7.99224 10C7.99224 9.836 7.9519 9.67451 7.87478 9.52977C7.79766 9.38503 7.68612 9.26148 7.55 9.17Z"
                fill="#14E956"
              ></path>
            </svg>
          </span>
        </div> */}
        <div class="projects">
          <div class="single">
            <div class="single-img">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div class="single-detail">
              {/* <h4>Company Calender</h4>
              <p>
                <span>Problem:</span> Nigerian businesses across all sectors
                especially SME's struggle to comply with company legal
                regulations. <br />
                <span>Solution:</span> Built a platform that will enable these
                companies at the tap of a button know what regulations apply to
                their incorporated company without having to afford a lawyer.
              </p>
              <div class="button-wrap">
                <button class="button">Visit →</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
