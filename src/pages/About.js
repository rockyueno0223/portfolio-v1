import React from "react";
import Label from "../components/Label";

import { IoIosSchool } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

import SampleIcon from "../img/sample/sample-icon.png";

const About = () => {
  return (
    <div>
      <Label title="About" />
      <div className="container">
        <div className="profile">
          <div className="about-text">
            I'm Rocky.<br />
            I'm a front-end engineer and a passionate learner who have fun for learning!
          </div>
          <div className="about-img">
            <img src={SampleIcon} alt=""/>
          </div>
        </div>
        <div className="history">
          <div className="history-content">
            <div className="history-header">
              <IoIosSchool size={45}/>
              <div className="history-title">
                My university life
              </div>
            </div>
            <div className="history-text">
              This is a content about university.
            </div>
          </div>
          <div className="history-content">
            <div className="history-header">
              <FaLaptop size={45}/>
              <div className="history-title">
                My Work in Japan
              </div>
            </div>
            <div className="history-text">
              This is a content about work.
            </div>
          </div>
          <div className="history-content">
            <div className="history-header">
              <FaSchool size={45}/>
              <div className="history-title">
                Now in Vancouver
              </div>
            </div>
            <div className="history-text">
              This is a content about Vancouver.
            </div>
          </div>
        </div>
      </div>
      <Label title="Skills" />
    </div>
  )
}
export default About;
