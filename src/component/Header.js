import React from "react";
import Vector1 from '../component/img/header.PNG'


function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3> <img className="hea" src={Vector1}  alt="" /></h3>
                     
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          Inicio 
                        </a>
                      </li>
                      <li>
                        <a href="/#about">Acerca de</a>
                      </li>
                      <li>
                        <a href="/#skill">Llamado Api</a>
                      </li>
                      <li>
                        <a href="/#resume">Protagonistas</a>
                      </li>
                      <li>
                        <a href="/#service">Back-end</a>
                      </li>
                      {/*
                      <li>
                        <a href="/#blog">Aliados</a>
  </li> */}
                      <li>
                        <a href="/#contact">Contacto</a>
                      </li>
                      {/*
                      <li>
                        <a href="../../Crud/includes/index.php">Login con Crud</a>
                      </li>
*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
