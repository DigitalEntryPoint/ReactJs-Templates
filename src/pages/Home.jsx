import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/img-12.jpg'
import image2 from '../assets/images/img-05.jpg'
import image3 from '../assets/images/img-13.jpg'
import image4 from '../assets/images/img-04.jpg'
import image5 from '../assets/images/img-07.jpg'
import image6 from '../assets/images/img-11.jpg'
import image7 from '../assets/images/img-10.jpg'
import image8 from '../assets/images/img-03.jpg'


function Home() {
  return (
    <>

      <div className="hero-full-wrapper">
        <div className="grid">
          <div className="gutter-sizer"></div>
          <div className="grid-sizer"></div>

          <div className="grid-item">
            <img className="img-responsive" alt="" src={image1} />
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>


          <div className="grid-item">
            <img className="img-responsive" alt="" src={image2} />
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid-item">
            <img className="img-responsive" alt="" src={image3}/>
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid-item">
            <img className="img-responsive" alt="" src={image4} />
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid-item">
            <img className="img-responsive" alt="" src={image5} />
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid-item">
            <img className="img-responsive" alt="" src={image6} />
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid-item">
            <img className="img-responsive" alt="" src={image7}/>
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid-item">
            <img className="img-responsive" alt="" src={image8} />
            <Link to="/project" className="project-description">
              <div className="project-text-holder">
                <div className="project-text-inner">
                  <h3>Vivamus vestibulum</h3>
                  <p>Discover more</p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>

    </>
  )
}

export default Home