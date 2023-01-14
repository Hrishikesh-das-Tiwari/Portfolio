import { memo } from 'react';
import { Link } from 'react-scroll';
import classes from './Css Modules/Navbar.module.css';
import logo from '../images/favicon.png';

export default memo(function Navbar() {
  return (
    <nav id={classes.navbar} className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className={`navbar-brand ${classes.brand}`} href='/'>
          <img
            src={logo}
            className="d-inline-block align-text-top me-2"
            alt="Bootstrap"
            style={{ width: '1.9rem' }}
          />
          Hrishikesh
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-2" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
                className={`nav-link active ${classes['nav-link']}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`nav-link ${classes['nav-link']}`}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="tools"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className={`nav-link ${classes['nav-link']}`}
              >
                Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={150}
                duration={500}
                className={`nav-link ${classes['nav-link']}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});
