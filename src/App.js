import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>

      <div  style={{backgroundColor: 'grey', marginBottom: '100px' }}>
        {/* navbar header */}
        <section id="header">
          <header role="banner">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
              <div className="container">
                <a className="navbar-brand" href="index.html">CRISTINA SG</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample05">
                  <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Recipes</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                      <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <a className="dropdown-item" href="#">Food Catering</a>
                        <a className="dropdown-item" href="#">Drink &amp; Beverages</a>
                        <a className="dropdown-item" href="#">Wedding &amp; Birthday</a>
                      </div>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">News</a>
                    </li>
                  </ul>
                  {/* <ul className="navbar-nav ml-auto">
                  <li className="nav-item cta-btn">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul> */}
                </div>
              </div>
            </nav>
          </header>

        </section>

<container>


</container>
        {/* Home Section */}

        <section id="home" className="parallax-section" style={{ backgroundPosition: '50% 0px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="home-img" />
              </div>
              <div className="col-md-6 col-sm-6" style={{marginTop: '150px'}}>
                <div className="home-thumb">
                  <div className="section-title">
                    <h4 className="wow fadeInUp animated" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>en desarrollo</h4>
                    <h1 className="wow fadeInUp animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>Programador <strong>Web Full Stack</strong> con bases en UX/UI</h1>
                    <p className="wow fadeInUp animated" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp' }}>Con un bootcamp de Web Full Stack mi enfoque inicial es en Front End y conocimientos básicos en Back End para desarrollar proyectos integrales. </p>
                    <a href="#about" className="wow fadeInUp smoothScroll section-btn btn btn-success animated" data-wow-delay="1.4s" style={{ visibility: 'visible', animationDelay: '1.4s', animationName: 'fadeInUp' }}>BAJAR CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="parallax-section" style={{ backgroundPosition: '50% 423px', marginBottom: '50px'}}>
          <div className="Container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="about-thumb">
                  <div className="wow fadeInUp section-title animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <h1>Perfil General</h1>
                    <p className="color-yellow">Ing. Industrial y de Sistemas</p>
                  </div>
                  <div className="wow fadeInUp animated" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                    <p>Soy Ing. Industrial con maestria en Innovación para el Desarrollo Empresarial buscando un cambio drástico en su actual actividad. </p>
                    <p>Siendo encargada de producción de la cervecería artesanal Maltalab combino esta actividad con el aprendizaje de programación.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="background-image about-img" />
              </div>
              <div className="bg-yellow col-md-3 col-sm-6">
                <div className="skill-thumb">
                  <div className="wow fadeInUp section-title color-white animated" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                    <h1>My Skills</h1>
                    <p className="color-white">REACT, HTML, CSS, JS, Git, Github, Node, MongoDB . Web Design, UX/UI, Figma</p>
                  </div>
                  <div className=" wow fadeInUp skills-thumb animated" data-wow-delay="1.6s" style={{ visibility: 'visible', animationDelay: '1.6s', animationName: 'fadeInUp' }}>
                    <strong>Frontend Design</strong>
                    <span className="color-white pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                    </div>
                    <strong>Backend processing</strong>
                    <span className="color-white pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                    </div>
                    <strong>HTML5 &amp; CSS3</strong>
                    <span className="color-white pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                    </div>
                    <strong>Web Design</strong>
                    <span className="color-white pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                    </div>
                    <strong>Figma</strong>
                    <span className="color-white pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section */}
        <section id="service" className="parallax-section" style={{ backgroundPosition: '50% 343px' }}>
          <div className="container">
            <div className="row">
              <div className="bg-yellow col-md-3 col-sm-6">
                <div className="wow fadeInUp color-white service-thumb animated" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                  <i className="fa fa-desktop" />
                  <h3>Landing de Venta</h3>
                  <p className="color-white">Maltalab webpage</p>
                  
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="wow fadeInUp color-white service-thumb animated" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                  <i className="fa fa-paper-plane" />
                  <h3>Media Strategy</h3>
                  <p className="color-white">Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
                </div>
              </div>
              <div className="bg-dark col-md-3 col-sm-6">
                <div className="wow fadeInUp color-white service-thumb animated" data-wow-delay="1.6s" style={{ visibility: 'visible', animationDelay: '1.6s', animationName: 'fadeInUp' }}>
                  <i className="fa fa-table" />
                  <h3>Mobile App</h3>
                  <p className="color-white">Mauris convallis eros massa, vitae euismod arcu tempus ut. Quisque viverra iaculis.</p>
                </div>
              </div>
              <div className="bg-white col-md-3 col-sm-6">
                <div className="wow fadeInUp service-thumb animated" data-wow-delay="1.8s" style={{ visibility: 'visible', animationDelay: '1.8s', animationName: 'fadeInUp' }}>
                  <i className="fa fa-html5" />
                  <h3>Coding</h3>
                  <p>Mauris convallis eros massa, vitae euismod arcu tempus ut. Quisque viverra iaculis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="parallax-section" style={{ backgroundPosition: '50% 419px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="background-image experience-img" />
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="color-white experience-thumb">
                  <div className="wow fadeInUp section-title animated" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                    <h1>My Experiences</h1>
                    <p className="color-white">Previous companies and my tasks</p>
                  </div>
                  <div className="wow fadeInUp color-white media animated" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                    <div className="media-object media-left">
                      <i className="fa fa-laptop" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading">Graphic Designer <small>2014 Jul - 2015 Sep</small></h3>
                      <p className="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="wow fadeInUp color-white media animated" data-wow-delay="1.6s" style={{ visibility: 'visible', animationDelay: '1.6s', animationName: 'fadeInUp' }}>
                    <div className="media-object media-left">
                      <i className="fa fa-laptop" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading">Web Designer <small>2015 Oct - 2017 Jan</small></h3>
                      <p className="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="parallax-section" style={{ backgroundPosition: '50% 392px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="color-white education-thumb">
                  <div className="wow fadeInUp section-title animated" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                    <h1>My Education</h1>
                    <p className="color-white">In cursus orci non ipsum gravida dignissim</p>
                  </div>
                  <div className="wow fadeInUp color-white media animated" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                    <div className="media-object media-left">
                      <i className="fa fa-laptop" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading">Master in Design <small>2012 Jan - 2014 May</small></h3>
                      <p className="color-white">Etiam iaculis elit in mauris ullamcorper auctor. Proin a sapien id orci ullamcorper dignissim eu in neque. </p>
                    </div>
                  </div>
                  <div className="wow fadeInUp color-white media animated" data-wow-delay="1.6s" style={{ visibility: 'visible', animationDelay: '1.6s', animationName: 'fadeInUp' }}>
                    <div className="media-object media-left">
                      <i className="fa fa-laptop" />
                    </div>
                    <div className="media-body">
                      <h3 className="media-heading">Bachelor of Arts <small>2008 May - 2011 Dec</small></h3>
                      <p className="color-white">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="background-image education-img" />
              </div>
            </div>
          </div>
        </section>
        {/* Quotes Section */}
        <section id="quotes" className="parallax-section" style={{ backgroundPosition: '50% 421px' }}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-offset-1 col-md-10 col-sm-12">
                <i className="wow fadeInUp fa fa-star animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }} />
                <h2 className="wow fadeInUp animated" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>Proin lobortis eu diam et facilisis. Fusce nisi nibh, molestie in vestibulum quis, auctor et orci.</h2>
                <p className="wow fadeInUp animated" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp' }}>Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="parallax-section" style={{ backgroundPosition: '50% 392px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="contact-form">
                  <div className="wow fadeInUp section-title animated" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                    <h1 className="color-white">Say hello..</h1>
                    <p className="color-white">Integer ut consectetur est. In cursus orci non ipsum gravida dignissim.</p>
                  </div>
                  <div id="contact-form">
                    <form action="#template-mo" method="post">
                      <div className="wow fadeInUp animated" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp' }}>
                        <input name="fullname" type="text" className="form-control" id="fullname" placeholder="Your Name" />
                      </div>
                      <div className="wow fadeInUp animated" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                        <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" />
                      </div>
                      <div className="wow fadeInUp animated" data-wow-delay="1.4s" style={{ visibility: 'visible', animationDelay: '1.4s', animationName: 'fadeInUp' }}>
                        <textarea name="message" rows={5} className="form-control" id="message" placeholder="Write your message..." defaultValue={""} />
                      </div>
                      <div className="wow fadeInUp col-md-6 col-sm-8 animated" data-wow-delay="1.6s" style={{ visibility: 'visible', animationDelay: '1.6s', animationName: 'fadeInUp' }}>
                        <input name="submit" type="submit" className="form-control" id="submit" defaultValue="Send" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="background-image contact-img" />
              </div>
              <div className="bg-dark col-md-3 col-sm-6">
                <div className="contact-thumb">
                  <div className="wow fadeInUp contact-info animated" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                    <h3 className="color-white">Visit my office</h3>
                    <p>456 New Street 22000, New York City, USA</p>
                  </div>
                  <div className="wow fadeInUp contact-info animated" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                    <h3 className="color-white">Contact.</h3>
                    <p><i className="fa fa-phone" /> 01-0110-0220</p>
                    <p><i className="fa fa-envelope-o" /> <a href="mailto:hello@company.co">hello@company.co</a></p>
                    <p><i className="fa fa-globe" /> <a href="#">company.co</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer style={{ backgroundPosition: '50% 395px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="wow fadeInUp footer-copyright animated" data-wow-delay="1.8s" style={{ visibility: 'visible', animationDelay: '1.8s', animationName: 'fadeInUp' }}>
                  <p>Copyright © 2016 Your Company
                    | Design: <a href="http://www.google.com/+templatemo" target="_parent">templatemo</a></p>
                </div>

              </div>
            </div>
          </div>
        </footer>
        {/* SCRIPTS */}
      </div>

    </>
  );
}


export default App;
