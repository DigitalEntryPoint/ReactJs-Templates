import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from "../assets/images/img-12.jpg"
import Image2 from "../assets/images/img-13.jpg"
import Image3 from "../assets/images/img-14.jpg"


function Services() {
  return (
    <>

      <div className="row">
        <div className="col-xs-12 section-container-spacer">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
        </div>

        <div className="col-xs-12 col-md-4 section-container-spacer">
          <img className="img-responsive" alt="" src={Image1} />
          <h2>Consectetur</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/contact" className="btn btn-primary" title=""> Get in touch</Link>
        </div>

        <div className="col-xs-12 col-md-4 section-container-spacer">
          <img className="img-responsive" alt="" src={Image2}/>
          <h2>Adipiscing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="/contact" className="btn btn-primary" title=""> Get in touch</Link>
        </div>

        <div className="col-xs-12 col-md-4 section-container-spacer">
          <img className="img-responsive" alt="" src={Image3} />
          <h2>Dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/contact" className="btn btn-primary" title=""> Get in touch</Link>
        </div>

      </div>

    </>
  )
}

export default Services