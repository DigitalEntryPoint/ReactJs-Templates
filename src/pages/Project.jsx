import React from 'react'
import image1 from '../assets/images/img-12.jpg'
import image2 from '../assets/images/img-13.jpg'
import image3 from '../assets/images/img-14.jpg'

function Project() {
  return (
    <>


      <div className="row">
        <div className="col-xs-12 col-md-8">

          <div className="section-container-spacer">
            <h1>Project</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>
          </div>

          <div className="section-container-spacer">
            <p><img className="img-responsive" alt="" src={image1} /></p>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p><img className="img-responsive" alt="" src={image2} /></p>
              </div>
              <div className="col-xs-12 col-md-6">
                <p><img className="img-responsive" alt="" src={image3} /></p>
              </div>
            </div>
          </div>

          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </div>

    </>
  )
}

export default Project