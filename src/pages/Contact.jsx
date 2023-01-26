import React from 'react'

function Contact() {
  return (
    <div>

      <div className="row">
        <div className="col-xs-12">
          <div className="section-container-spacer">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>
          </div>
          <div className="section-container-spacer">
            <form action="" className="reveal-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Send</button>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled address-container">
                    <li>
                      <span className="fa-icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </span>
                      + 33 9 07 45 12 65
                    </li>
                    <li>
                      <span className="fa-icon">
                        <i className="fa fa-at" aria-hidden="true"></i>
                      </span>
                      e-mail@mail.io
                    </li>
                    <li>
                      <span className="fa-icon">
                        <i className="fa fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      42 rue Moulbert 75016 Paris
                    </li>
                  </ul>
                  <h3>Follow me on social networks</h3>
                  <a href="https://www.linkedin.com/" title="" className="fa-icon">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/" title="" className="fa-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://dribbble.com/" title="" className="fa-icon">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact