import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div>
      <Label title="Contact" />
      <p className="contact-me">
        Contact me!
      </p>
      <p className="contact-text">
        I’m looking forward to having a wonderful time with you!<br/>
        Please contact me if you’re even slightly intrested.
      </p>
      <Button title="Contact" pass="mailto:rockyueno@gmail.com"/>
    </div>
  )
}
export default Contact;
