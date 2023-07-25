import React from 'react';
import './aboutme.css';

export const AboutMe = () => {
  return (
   
    <div className="AboutMe">
    <div className="profile-area">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-4">
                      <div className="card">
                          <div className="img1">
                              <img src="images/286-2866496_purple-and-orange-banner.png" alt=""/>
                          </div>
                          <div className="img2">
                              <img src="images/fotoperfil.jpg" alt=""/>
                          </div>
                          <div className="main-text">
                              <h2 >Virginia Romero</h2>
                              <b>Fullstack Developer</b>
                              <p className="parrafo1"> <img src="images/marcador-de-posicion.png" alt=""/> Corrientes - Argentina</p>
                              <p className="parrafo2">Tuve la oportunidad de desarrollar diferentes proyectos personales como asi tambien la incorporación a un grupo de trabajo como desarrolladora trainee. Desde el año 2021 he agregado a mis saberes distintos lenguajes y herramientas.
                                  Algunos de mis conocimientos son: </p>
                                  <ul className="ico">
                                      <li > <img  src="images/logoHtml.png" alt=""/> Html</li>
                                      <li> <img src="images/logo-css.png" alt=""/> Css</li>
                                      <li> <img src="images/java.png" alt=""/> Java</li>
                                      <li> <img src="images/logo-JS.png" alt=""/> Js</li>
                                      <li> <img src="images/Bootstrap_logo.png" alt=""/> Bootstrap</li>
                                      <li> <img src="images/nodejs-logo.png" alt=""/> NodeJs</li>
                                      <li> <img src="images/react.png" alt=""/> React</li>
                                      <li> <img src="images/php.png" alt=""/>PHP</li>
                                      <li> <img src="images/Magento.png" alt=""/> Magento</li>
                                      <li> <img src="images/Wordpress.png" alt=""/> Wordpress</li>
                                  </ul>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    </div>
  );
}

