import React from "react";
import './Footer.css'
import FT1 from '../component/img/rick-and-morty-rick.gif';
import FT2 from '../component/img/ff.gif';


var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (

    
    
    
    
    
    
    
    
    
  
    <body>
    <footer class="footer-section">
            <div class="container">
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                            <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>                                <div class="cta-text">
                                    <h4>Encuentranos en:</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                            <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                                <div class="cta-text">
                                    <h4>Contáctanos al:</h4>
                                    <a href="tel:+525586011363">
                                    <span>5586011363</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                            <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                                <div class="cta-text">
                                    <h4>Correo electrónico </h4>
                                    <a href="mailto:flores@gmail.com"><span>floresgutierrezcesar124@gmail.com</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index.php">
                                    <img className="img-fluid" src={FT1}  alt="" />
                                   </a>
                                </div>
                                <div class="footer-text">
                                    <p>Ven y observa mi trabajo talves no es el mejor trabajo que vean pero trato de mejorar dia a dia.
                                    <br/>
                                   
                                    <i>«Si puedes diseñar una cosa, entonces puedes diseñarlo todo; si lo haces bien, perdurará para siempre.» — Massimo Vignelli. </i>   
                                    </p>
                                </div>
                            
                       
        <div className="about-social-icon text-center">
        <span>Encuentrame en:</span>

          <ul className="about-social">
      
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a
                href="https://www.linkedin.com/in/cesar-flores-guti%C3%A9rrez-a9a2a5251/"
                target="newtab"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".2s">
              <a href="https://www.facebook.com/cesar.gutierritoz/" target="newtab">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://www.instagram.com/gutierritozcesar/"
                target="newtab"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay="1s">
              <a href="mailto:floresgutierrezcesar124@gmail.com?subject=Cont%C3%A1ctanos&body=Hola%20Saludos!!%0A%0AEl%20motivo%20del%20correo%20es%20por%20que%20nos%20interesa%20contactarte%20por%20favor%20comun%C3%ADcate%20con%20nosotros%20lo%20antes%20posible.....%20%0A%0AGracias!!" target="newtab">
                <i className="fa fa-medium" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay="1.2s">
              <a href="https://github.com/Cesar421FG" target="newtab">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
                            </div>
                        </div>
                        
    
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                               
                            </div>
                        </div>
    
    
    
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Enlaces</h3>
                                </div>
                                <ul>
                                    <li><a href="/#home">Inicio</a></li>
                            
                                    <li><a href="/#skill">Llamando a la Api</a></li>
                                    <li><a href="/#about">Acerca de</a></li>
                                    <li><a href="/#resume">Protagonistas</a></li>
                                    <li><a href="/#service">Back End</a></li>
                                    <li><a href="/#contact">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                       
    
    
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <center>
                            <div class="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved <a href="https://codepen.io/anupkumar92/">
                                <a
                href="mailto:floresgutierrezcesar124@gmail.com?subject=Cont%C3%A1ctanos&body=Hola%20Saludos!!%0A%0AEl%20motivo%20del%20correo%20es%20por%20que%20nos%20interesa%20contactarte%20por%20favor%20comun%C3%ADcate%20con%20nosotros%20lo%20antes%20posible.....%20%0A%0AGraias!!">César Flores Gutiérrez</a></a></p>
                            </div>
                            </center>
                        
                    </div>
                </div>
            </div>
        </footer>
      
    </body>
    
    
      
  );
}

export default Footer;
