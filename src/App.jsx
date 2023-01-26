import React, { useRef, useState,useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import './css/main.82cfd66e.css'
import Logo from './assets/images/mashup-logo.svg'


function App() {
  // const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">


      <header className="">
        <div className="navbar navbar-default visible-xs">
          <button type="button" className="navbar-toggle collapsed" onClick={handleMenuToggle}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Mashup Template</Link>
        </div>

        <nav className={`sidebar  ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <div className="navbar-collapse" id="navbar-collapse">
            <div className="site-header hidden-xs">
              <Link className="site-brand" href="./index.html" title="">
                <img className="img-responsive site-logo" alt="" src={Logo} />
                Mashup Template
              </Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.</p>
            </div>
         
            <ul className="nav">
              <li><Link to="/" title="">Home</Link></li>
              <li><Link to="/about" title="">About</Link></li>
              <li><Link to="/services" title="">Services</Link></li>
              <li><Link to="/contact" title="">Contact</Link></li>
              <li><Link to="/components" title="">Components</Link></li>
            </ul>

            <nav className="nav-footer">
              <p className="nav-footer-social-buttons">
                <a className="fa-icon" href="https://www.instagram.com/" title="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a className="fa-icon" href="https://dribbble.com/" title="">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a className="fa-icon" href="https://twitter.com/" title="">
                  <i className="fa fa-twitter"></i>
                </a>
              </p>
              <p>© Mojtaba Mehrara | Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></p>
            </nav>
          </div>
        </nav>
      </header>

      <main id="main-collapse">
        <Outlet />
      </main>


    </div>
  )
}

export default App
