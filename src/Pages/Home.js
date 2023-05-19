import hea1 from '../component/img/hd2.png'
import hea2 from '../component/img/hd2.png'
import hea3 from '../component/img/hd2.png'
import rick from '../component/img/rick.jpg'
import morty from '../component/img/morty.jpg'
import summer from '../component/img/summer.jpg'
import beth from '../component/img/beth.jpg'
import jerry from '../component/img/jerry.jpg'


import React, { Fragment, useState, useEffect } from 'react';
import Character from '../component/characters/index.jsx';
import Buscador from '../component/buscador';




const Home = () => {
  let urlCharacters = `https://rickandmortyapi.com/api/character/`;
  let dataURL = {
    info: {},
    character: [],
    error: '',
  };

  const [characters, setCharacters] = useState(dataURL);
  const [ulr, setURL] = useState(urlCharacters);
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      const fetchAPI = () => {
        fetch(ulr)
          .then(res => res.json())
          .then(data => setCharacters({ character: data.results, info: data.info, error: data.error }))
          .catch(error => console.log(error));
      };
      fetchAPI();
    },
    [ulr]
  );

  const nextPage = () => {
    setURL(characters.info.next);
    setPage(page + 1);
    scroll();
  };

  const prevPage = () => {
    if (characters.info.prev != null) {
      setURL(characters.info.prev);
      setPage(page - 1);
      scroll();
    }
  };

  const scroll = () => {
    const elemento = document.querySelector('.container');
    elemento.scrollIntoView('auto', 'start');
  };

  const searchData = data => {
    urlCharacters = `https://rickandmortyapi.com/api/character/?name=${data}`;
    setURL(urlCharacters);
    setPage(1);
  };


  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <br/>
                      <br/>
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "250px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Wireframe</b>
                          <b className="is-hidden">Rick y Morty</b>
                          <b className="is-visible">React js</b>
                        </span>
                      </h1>

       



                      <div className="maini-titles text-center wow fadeIn">
                        <h3>Bienvenido a mi proyecto Turing IA</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <h3>
                          Donde el reto consiste Pasar un frimeware a codigo para demostrar mis habilidades de desarrollo web demostrando habilidades con HTML, CSS , JS  la manipulacion de objetos DOM y la llamada a API´S
                        </h3>
                      </div>


                      <div className="images">
                        <img className="hea1" src={hea1} alt="" />
                        <img className="hea2" src={hea2} alt="" />
                        <img className="hea3" src={hea3} alt="" /></div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>



        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">

          <div className="about-content">
            <div className="love-grid text-center">

              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>¿Quien es Rick y Morty?</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
                      </p>
                      <br/>
                      <br/>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/mb-XCaA2HZs?autoplay=1?rel=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <h3>Mejores frases Rick Sanchez</h3>

                      <img className="rick" src={rick} width={130} alt="" />

                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/smzC9aRm2-0?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <p>

                        Rick y Morty | Las mejores frases de Rick en la serie animada</p>
                    </div>
                  </div>

                  
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">

                      <h3>Mejores momentos Morty Smith</h3>
                      <img className="morty" src={morty} width={115} alt="" />

                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/bJME2TZ5ZrY?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <p>Rick y Morty - Mejores momentos - Necesitamos vacaciones
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">

                      <h3> Mejores momentos Jerry Smith</h3>
                      <img className="jerry" src={jerry} width={100} height={95} alt="" />

                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/y4PioLYb8D0?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <p>
                        Jerry Smith: Pasado, Traumas y momentos divertidos.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <h3>Mejores Momentos Beth Smitht</h3>
                      <img className="beth" src={beth} width={100} height={100} alt="" />

                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/mb-XCaA2HZs?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                      <p>Rick y Morty | ABC de Beth | ¿Beth es igual a Rick?¿Padre e Hija?
                        .</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>

            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                      <i
                          className="fa fa-bolt stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3> Morty Malvado 1</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/O5n6_pa2_Wo?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className="underline1"></div>
                        <div className="underline2"></div>

                        <p>Morty malvado español latino Primera Aparición</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-crop stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">Morty Malvado</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XXiYFdeYEds?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Morty Malvado Destruye la Curva Finita Central</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-bolt stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">Pepinillo Rick</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XdkAe2BFCZw?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Rick y Morty | Pepinillo Rick | La Masacre de Rick</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-coffee stat-icon"
                          aria-hidden="true"
                        ></i>

                        <h3 className="Count">Mejores Momentos</h3>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KKtCDndUrMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Mejores momentos de la serie Rick y Morty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>Llamado a la Api de Rick and Morty</h3>
                    <div className="imagess">
                      <img className="hea1" src={hea1} alt="" />
                      <img className="hea2" src={hea2} alt="" />
                      <img className="hea3" src={hea3} alt="" />
                    </div>
                    <div className="underline1"></div>
                    <div className="underline2"></div>

                    <p>
                      El llamado funciona escribiendo el nombre de uno de los personajes el cual nos
                      arrojara el nombre del personaje su origen o línea de tiempo real, si es humano,
                      demonio, robot, alienígena, además de saber si está vivo o muerto.
                    </p>
                  </div>
                </div>
              </div>

            </div>


            <div className="container">
              <center>
                <h1 className="title">Rick and Morty</h1>
              </center>
              <Buscador searchData={searchData} />
              <Character character={characters} prevPage={prevPage} nextPage={nextPage} page={page} />
            </div>

          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">











                <div className="testimonial">
                  <div className="testimonial-content">
                    <div className="testimonial-grid">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="main-title text-center wow fadeIn">
                              <h3>Personajes Principales</h3>
                              <div className="underline1"></div>
                              <div className="underline2"></div>
                              <div className="imagess">
                                <img className="hea1" src={hea1} alt="" />
                                <img className="hea2" src={hea2} alt="" />
                                <img className="hea3" src={hea3} alt="" />
                              </div>
                              <p>
                                Acontinuación podremos observar a los personajes principales y más queridos por todos los fans d Rick y Morty.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-details">
                        <section id="carousel">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-8 col-md-offset-2">
                                <div className="quote">
                                  <i className="fa fa-quote-left fa-4x"></i>
                                </div>
                                <div
                                  className="carousel slide"
                                  id="fade-quote-carousel"
                                  data-ride="carousel"
                                  data-interval="2000"
                                >
                                  <ol className="carousel-indicators">
                                    <li
                                      data-target="#fade-quote-carousel"
                                      data-slide-to="0"
                                      className="active"
                                    ></li>
                                    <li
                                      data-target="#fade-quote-carousel"
                                      data-slide-to="1"
                                      className="active"

                                    ></li>
                                    <li
                                      data-target="#fade-quote-carousel"
                                      data-slide-to="2"
                                      className="active"

                                    ></li>
                                    <li
                                      data-target="#fade-quote-carousel"
                                      data-slide-to="3"
                                      className="active"
                                    ></li>
                                    <li
                                      data-target="#fade-quote-carousel"
                                      data-slide-to="4" className="active"

                                    ></li>
                                  </ol>
                                  <div className="carousel-inner">
                                    <div className="active item">
                                      <blockquote>
                                        <h1>Rick Sanchez</h1>
                                        <br />
                                        <br />

                                        <img className="rick" width={150} height={150}
                                         src={rick} alt="" />
                                        <p>
                                          “Richard «Rick» Sánchez​ es uno de los dos protagonistas homónimos de la serie de televisión animada de Adult Swim, Rick y Morty.”
                                          <br />
                                        </p>
                                      </blockquote>
                                    </div>
                                    <div className="item">
                                      <blockquote>
                                        <h1>Morty Smith</h1>
                                        <br />
                                        <br />

                                        <img className="morty" width={150} height={150} src={morty} alt="" />

                                        <p>
                                          “Morty Smith es uno de los personajes principales de la serie animada Rick y Morty, del canal de televisión Adult Swim. Creado por Justin Roiland y Dan Harmon, Morty es un nervioso adolescente basado en Marty McFly de Regreso al Futuro.​.”
                                          <br />
                                        </p>
                                      </blockquote>
                                    </div>
                                    <div className="item">
                                      <blockquote>
                                        <h1>Summer Smith</h1>
                                        <br />
                                        <br />

                                        <img className="summer" width={150} height={150} src={summer} alt="" />

                                        <p>
                                          “Summer Smith es uno de los personajes principales de la serie animada de televisión estadounidense Rick y Morty. Creada por Justin Roiland y Dan Harmon, Summer es una adolescente convencional y, a menudo, superficial e inicialmente de 17 años, que está obsesionada con mejorar su estatus social entre sus compañeros.”
                                          <br />
                                        </p>
                                      </blockquote>
                                    </div>
                                    <div className="item">
                                      <blockquote>
                                        <h1>Jerry Smith</h1>
                                        <br />
                                        <br />
                                        <img className="jerry" width={150} height={150}src={jerry} alt="" />

                                        <p>
                                          “Jerry Smith es uno de los personajes principales de la serie animada de televisión estadounidense Rick y Morty. Creada por Justin Roiland y Dan Harmon
                                          <br />
                                        </p>
                                      </blockquote>
                                    </div>
                                    <div className="item">
                                      <blockquote>
                                        <h1>Beth Smith</h1>
                                        <br />
                                        <br />


                                        <img className="beth" width={100} height={150} src={beth} alt="" />

                                        <p>
                                          “Beth es uno de los personajes principales de la serie animada de televisión estadounidense Rick y Morty. Creada por Justin Roiland y Dan Harmon, ”
                                          <br />
                                        </p>
                                      </blockquote>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
















                <div className="row love-row">



                  {/* <div className="col-md-4 col-sm-4">
                    <div className="exp-details" data-wow-delay=".4s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-cogs exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Supreme Company</h3>
                        <h4>Designer &amp; Developer</h4>
                        <h2>2013-2016</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div> */}
                </div>




              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ WORK =============================== --> */}

        {/* <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Work Portfolio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Here are a few design projects I've worked on recently.
                        Want to see more?{" "}
                        <a className="underline2" href="#contact">
                          contact me.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="gallery" style={{ paddingTop: "80px" }}>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                      alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                    />
                  </div>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                        alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                        alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                        alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Parte Back-end</h3>
                      <div className="imagess">
                        <img className="hea4" width={5} height={20} src={hea1} alt="" />
                        <img className="hea5" width={5} height={20} src={hea2} alt="" />
                        <img className="hea6" width={5} height={20} src={hea3} alt="" />
                      </div>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        FUNCIONALIDADES BÁSICAS BACKEND
                        <br />
                        • Crear un CRUD
                        <br />
                        • Poder hacer llamadas mediante el método Post, Get, Put y Delete
                        <br />
                        • Crear un login con dos tipos de usuarios: admin y user
                        <br />
                        <br />
                        •Podremos acceder al login con crud dando click en (Administrador / Usario)

                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">


                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <div className="service-head">
                          <img
                            src="assets/img/service/analytics.jpg"
                            alt="analytics"
                          />
                        </div>

                        <h3>
                          <a
                            href="https://sportbums.000webhostapp.com/includes/login.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#4d4d4d" }}
                          >
                            Administrador
                          </a>
                        </h3>
                        <h4>Emanuel</h4>
                        <h2>Rol:Administrador</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Usuario:Emanuel
                          Contraseña:12345
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <div className="service-head">
                          <img
                            src="assets/img/service/content-management.jpg"
                            alt="content-management"
                          />
                        </div>
                        <h3>
                          <a
                            href="https://sportbums.000webhostapp.com/includes/login.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#4d4d4d" }}
                          >
                            Usuario
                          </a>
                        </h3>
                        <h4>Maria</h4>
                        <h2>Rol:Usuario</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Usuario:Maria
                          Contraseña:12345
                        </p>
                      </div>
                    </div>
                  </div>







                  <div className="col-md-4 col-sm-6">

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- ================================ BLOG ========================== --> */}

        <div id="contact">
          <div className="blog-content">
            <div className="blog-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Acerca de mi</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Aqui podras encontrar información acerca de mi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details wow fadeIn text-left">
                <div className="container">
                  <div className="row">
                    <div className="me-grid">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                            <div className="about-image">
                              <img
                                src="assets/img/as.png"
                                alt="cesar flores"
                                className="about-img wow fadeIn"
                              />
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                            <div className="about-details wow fadeIn">
                              <div className="main-title left-title text-left wow fadeIn">
                                <center>
                                  <h3>Hola! Soy César Flores</h3>
                                </center>
                              </div>
                              <p className="wow fadeIn">
                                ⚡ Mi nombre es César Flores Gutiérrez, soy un estudiante trabajador en busca de un lugar el cual me ayude a desarrollar más habilidades tanto individuales como colectivas. 🧔‍♂️ 🧑🏽‍🎓

                                ⚡ Preparado para utilizar mis habilidades y pasión para impulsar la misión de una empresa. 🏢 🏬

                                ⚡ Aporto una actitud positiva, la voluntad y motivación para aprender el uso de nuevos programas , lenguajes y más. 👦{" "}
                                <a className="underline2" href="#contact">
                                  {" "}

                                </a>{" "}

                                <br />
                                <br />
                                Mis pasatiempos
                                ⚡En mis tiempos libres me gusta interactuar y manipular con código 👨🏽‍💻

                                ⚡ Me encanta salir a caminar en las mañanas ☀️ 🚶🏽

                                ⚡ Experimentar nuevas aventuras y experiencias 🌇 🏴‍☠️

                                ⚡ En mis tiempos libres me gusta leer 📔 📖
                              </p>




                              <a
                                className="about-link-1"
                                href="https://drive.google.com/file/d/1aCToX4tloZz41Ye7FblXJd98BcJvy6Em/view"
                                target="_blank"
                              >
                                CV
                              </a>
                              <a className="about-link-2" href="http://cesar421.epizy.com/#/">
                                Página Web
                              </a>







                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ================================ CONTACT ========================== --> */}






    </React.StrictMode>
  );
};

export default Home;