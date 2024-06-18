import React from "react";
import Label from "../components/Label";

import ProjectDetail from "../components/ProjectDetail";

import Work1Img from "../img/sample/sample-work1.png"
import Work2Img from "../img/sample/sample-work2.png"
import Work3Img from "../img/sample/sample-work3.png"

const workObj = [
  { img: Work1Img, text: "This is an explanation of work1. Explain about this work such as when, how I made it." },
  { img: Work2Img, text: "This is an explanation of work2. Explain about this work such as when, how I made it." },
  { img: Work3Img, text: "This is an explanation of work3. Explain about this work such as when, how I made it." }
]

const Work = () => {
  return (
    <div>
      <Label title="Work" />
      <div className="project-detail-wrapper">
        <ProjectDetail img={workObj[0].img} text={workObj[0].text} />
        <ProjectDetail img={workObj[1].img} text={workObj[1].text} />
        <ProjectDetail img={workObj[2].img} text={workObj[2].text} />
      </div>
    </div>
  )
}
export default Work;
