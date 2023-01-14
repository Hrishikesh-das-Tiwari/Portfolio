import jsImage from '../images/javascript.png';
import { FaJava } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import classes from './Css Modules/Skills.module.css';
import { memo } from 'react';

export default memo(function Section3() {
  return (
    <div id={`${classes.skills}`} className="skills">
      <div className={classes.skill}>SKILLS</div>
      <div className={classes['skill-card']}>
        <div className="container text-center ">
          <div className="row ">
            <div className="col-l-12 col-sm-6 col-md-6">
              <div className="card mb-3 " style={{ maxWidth: 540 }}>
                <div className="row g-0 ">
                  <div className={`col-md-4 ${classes['skill-img-div']}`}>
                    <img
                      src={jsImage}
                      className="img-fluid rounded "
                      alt="JavaScript Logo"
                      style={{ width: '65%' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">JavaScript</h5>
                      <p className="card-text">
                        JavaScript is the world's most popular programming web
                        language.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-l-12 col-sm-6 col-md-6">
              <div className="card mb-3 " style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className={`col-md-4 ${classes['skill-img-div']}`}>
                    <FaJava
                      className="img-fluid p-2"
                      style={{ width: '60%' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Java</h5>
                      <p className="card-text">
                        Java is a high level, object-oriented and secure
                        programming language.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-l-12 col-sm-6 col-md-6">
              <div className="card mb-3 " style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className={`col-md-4 ${classes['skill-img-div']}`}>
                    <SiReact
                      className="img-fluid m-2 p-0"
                      style={{
                        width: '60%',
                        border: 'none',
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Reactjs</h5>
                      <p className="card-text">
                        React is a JavaScript library for building single-page
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-l-12 col-sm-6 col-md-6">
              <div className="card mb-3 " style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className={`col-md-4 ${classes['skill-img-div']}`}>
                    <FaNodeJs
                      className="img-fluid m-2 p-0"
                      style={{
                        width: '60%',
                        border: 'none',
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Nodejs</h5>
                      <p className="card-text">
                        Node.js is an environment that allows you to run
                        JavaScript on the server.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})
