import React, { useState } from "react";
// import Creacybg from "../../asset/img/Creacy-Hero-BG.webp";
import home from "../../asset/img/home.jpg";
import ship from "../../asset/img/ship.jpg";
import "./home.css";
import { ChevronRight, Menu, MoveRight, MoveUpRight } from "lucide-react";
import ImgCarousel from "../components/ImgCarousel";
import AwardImg from "../components/AwardImg";


const Home = () => {



  const [awardValue, setawardValue] = useState(2015)


  return (
    <>
      <div className="w-100 d-flex justify-content-center align-content-between position-relative">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          startevent="DOMContentLoaded"
          className="img-container m-2 m-sm-3 m-md-5"></div>

        <div className="position-absolute  ">
          <div className="p-4 p-md-0">
            <div className="d-block my-2 mx-2 d-md-none">
              <Menu />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              startevent="DOMContentLoaded"
              className="d-none d-md-flex justify-content-md-center my-4">
              <div className="navbar my-5">
                <ul className="m-0 p-0">
                  <a href="#" className="text-white text-decoration-none"><li className="mx-4  px-3 my-3">Home</li></a>
                  <div className="vr my-3" style={{ opacity: "1.25" }}></div>
                  <a href="#aboutUs" className="text-white text-decoration-none"><li className="mx-4  px-2 my-3">Service</li></a>
                  <div className="vr my-3" style={{ opacity: "1.25" }}></div>
                  <a href="#project" className="text-white text-decoration-none"><li className="mx-4  px-2 my-3">Projects</li></a>
                  <div className="vr my-3" style={{ opacity: "1.25" }}></div>
                  <a href="#contact" className="text-white text-decoration-none"><li className="mx-4  px-2 my-3">Contact us</li></a>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              startevent="DOMContentLoaded"
              className="img-text py-5 my-5 py-sm-5 ">
              <h1 className="bg-text"  >
                Capturing beautiful <br /> moment inside lens and <br />
                shutterspeed
              </h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              startevent="DOMContentLoaded"
              className="img-bottom d-flex align-items-end ">
              <div className="w-50">
                <div className="d-flex pb-2">
                  <div className="img-bottom-buttons button-img">lanscape</div>
                  <div className="img-bottom-buttons">wildlife</div>
                </div>
                <div className="d-none d-sm-flex">
                  <div className="img-bottom-buttons">architectural</div>
                  <div className="img-bottom-buttons">travel</div>
                  <div className="img-bottom-buttons">protrait</div>
                </div>
              </div>

              <div className="w-50 ">
                {/* <div className="d-flex">
                  <div>01</div>
                  <div>-----------------------</div>
                  <div>03</div>
                </div> */}

                <div className="card-items d-flex align-items-end">
                  <div>
                    <div className="img-bottom-card ">
                      <img src={home} alt="home" width={140} height={120} />
                      <div className="card-content mx-3">
                        <h5 className="img-card-text">
                          Lonely Life at the <br /> Baltimore
                        </h5>
                        <h2 className="img-card-text-bottom">
                          Shoot with Sony a6000
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="img-bottom-card">
                      <img src={ship} alt="home" width={140} height={120} />
                      <div className="card-content mx-3">
                        <h5 className="img-card-text">
                          Lonely Life at the <br /> Baltimore
                        </h5>
                        <h2 className="img-card-text-bottom">
                          Shoot with Sony a6000
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <div className="img-bottom-card">
                      <img src={ship} alt="home" width={140} height={120} />
                      <div className="d-flex flex-column justify-content-between mx-3">
                        <h5 className="img-card-text">
                          Lonely Life at the <br /> Baltimore
                        </h5>
                        <h2 className="img-card-text-bottom">
                          Shoot with Sony a6000
                        </h2>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section two */}
      <div
        id="aboutUs"
        data-aos="fade-up"
        data-aos-duration="1000"
        startevent="scroll"
        className="row row-cols-1 row-cols-xl-2  m-2 m-sm-3 m-md-5 pb-5">
        <div className="d-flex flex-column justify-content-between ">
          <div>
            <div>(01)</div>
            <h5 className="text-white">About us</h5>
          </div>
          <div className="w-75">We Arcently Strive To Encapsulate Life's Most Precious Momentis. Weaving A Tapestry Of Artistry And A Hint Of Enchanting Magic With The Timeless Essence Of The Human Experience</div>
        </div>
        <div className="d-none d-xl-block">
          <div className="">
            <p className="section2_text ">
              <b className="text-white ">Photography</b> is driven by a deep passion for <b className="text-white ">capturing life's</b> most <b className="text-white ">precious moments</b> with artistry and a touch of magic
            </p>
            <button className="text-white text-uppercase bg-transparent border bg-parent rounded-pill py-3 px-4 h6">learn more</button>
            <button className="text-dark text-uppercase border bg-white arrowbtn"><MoveUpRight /></button>
          </div></div>

      </div>

      {/* section three */}
      <div
        className="outer-box m-2 m-sm-3 m-md-5">
        <div
          // className="d-flex flex-column flex-md-row p-3 p-md-4 p-lg-5    
          className="row row-cols-1 row-cols-md-2  p-3 p-md-4 p-lg-5  ">
          <div
            data-aos="fade-right"
            data-aos-duration="1100"
            startevent="scroll"
          >
            <div>
              <div>(02)</div>
              <h6 className="text-white">Our Expertise</h6>
            </div>
            <p className="fst-italic section3_text">When moments captured every dreams crafted into beautiful reality</p>

          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            startevent="scroll"
            className="px-5 d-flex justify-content-center justify-content-md-end">
            <ul className="list-unstyled">
              <li className="h4 pb-3">
                Landscape
              </li>
              <li className="h4 pb-3" style={{ color: "hwb(0 64% 36% / 0.678)" }} >
                Wildlife
              </li>
              <li className="h4 pb-3" style={{ color: "#a4a4a488 " }}>
                Architectural
              </li>
              <li className="h4 pb-3" style={{ color: "#a4a4a46e " }}>
                Travol
              </li>
              <li className="h4 pb-3" style={{ color: "#e5e5e523 " }}>
                Potrait
              </li>
            </ul>
          </div>
        </div>


        <ImgCarousel
        />
      </div>

      {/* section four */}
      <div className="row row-cols-1 row-cols-xl-2 m-2 m-sm-3 m-md-5 pb-5 pt-5">
        <div
          data-aos="fade-right"
          data-aos-duration="1100"
          startevent="scroll"
          className="d-none d-xl-block  ">
          <div>
            <div>(03)</div>
            <h5 className="text-white">Our Work</h5>
          </div>
          <p className="section2_text w-75">
            <b className="text-white">Explore</b> the artistry and precision behind <b className="text-white ">  our portfolio</b> of timeless photography            </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1100"
          startevent="scroll"
          className=" align-content-center">
          <div className="mx-5">
            <div className="w-75 pb-4">Embark On A Visual Journey Through Our Cherished Moments Captured With Creativity And Precision Each Image In Our Portfolio Reflects Our Dedication To Preserving Life's Beauty And Significance</div>

            <button className="text-white text-uppercase border bg-transparent rounded-pill py-3 px-4 h6">learn more</button>
            <button className="text-dark text-uppercase border bg-white arrowbtn"><MoveUpRight /></button>
          </div></div>

      </div>

      {/* section five (projects)*/}
      <div
        data-aos="zoom-out-up"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        startevent="scroll"
        id="project" className="d-flex justify-content-center m-2 m-sm-3 m-md-5 pb-5 gap-4">
        <div className="box1 position-relative box">
          <div className="box1-img "></div>
          <div className="p-4 w-100 bottom-0 position-absolute">
            <h3>Majestic Creatures of the African <br /> Savanna</h3>
            <p>Capturing the Exquisite Patterns and Dynamic Energy of <br /> Afrsals Most Iconic Big Cat</p>
            <button className={`details-btn  w-100  text-uppercase border  rounded-pill py-3 px-4 h5 d-flex justify-content-between align-content-center `}>
              more details  <ChevronRight />
            </button>
          </div>
        </div>

        <div className="box2 position-relative box">
          <div className="box2-img "></div>
          <div className="p-4 w-100 bottom-0 position-absolute">
            <h3>A Temple's Serene Silhouette</h3>
            {/* <p>Capturing the Exquisite Patterns and Dynamic Energy of <br/> Afrsals Most Iconic Big Cat</p> */}
            <button className={`details-btn  w-100  text-uppercase border  rounded-pill py-3 px-4 h5 d-flex justify-content-between align-content-center `}>
              more details  <ChevronRight />
            </button>
          </div>
        </div>

        <div className="box3 position-relative box">
          <div className="box3-img "></div>
          <div className="p-4 w-100 bottom-0 position-absolute">
            <h3>Moments Framed in Portraits</h3>
            {/* <p>Capturing the Exquisite Patterns and Dynamic Energy of <br/> Afrsals Most Iconic Big Cat</p> */}
            <button className={`details-btn  w-100  text-uppercase border  rounded-pill py-3 px-4 h5 d-flex justify-content-between align-content-center `}>
              more details  <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* section six (awards) */}
      <div className="m-2 m-sm-3 m-md-5 pb-5 pt-5">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="900"
          startevent="scroll"
          className="row row-cols-1 row-cols-xl-2 pb-5 ">
          <div className="d-flex flex-column justify-content-between ">
            <div>
              <div>(04)</div>
              <h5 className="text-white">Awards</h5>
            </div>
          </div>
          <div className="d-none d-xl-block">
            <div className="">
              <p className="section2_text ">
                <b className="text-white ">Award</b> is a pixel that <b className="text-white ">reflecting</b> out ongoing <b className="text-white ">dedication</b> to innovation and excellence
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-out-up"
          data-aos-duration="1300"
          startevent="scroll"
          className="row">
          <div className="col-lg-6 ">
            <div className="">
              <div
                onClick={() => setawardValue(2015)}
                className={`d-flex justify-content-between align-items-center py-4 px-3 ${awardValue === 2015 ? 'outer-box' : ""} `}>
                <h5>2015</h5>
                <h5>Sony World Photography Awards</h5>
                <button className={`text-uppercase border ${awardValue === 2015 ? "awards_btn_white" : "awards_btn_transperant"} arrowbtn`}>{awardValue === 2015 ? <MoveUpRight /> : <MoveRight />} </button>
              </div>
              <hr className="m-0" />
              <div
                onClick={() => setawardValue(2017)}
                className={`d-flex justify-content-between align-items-center py-4 px-3 ${awardValue === 2017 ? 'outer-box' : ""} `}>
                <h5>2017</h5>
                <h5>Travel Photography of The Year</h5>
                <button className={`text-uppercase border ${awardValue === 2017 ? "awards_btn_white" : "awards_btn_transperant"} arrowbtn`}>{awardValue === 2017 ? <MoveUpRight /> : <MoveRight />} </button>
              </div>
              <hr className="m-0" />
              <div
                onClick={() => setawardValue(2022)}
                className={`d-flex justify-content-between align-items-center py-4 px-3 ${awardValue === 2022 ? 'outer-box' : ""} `}>
                <h5>2022</h5>
                <h5>Magnum Photography Awards</h5>
                <button className={`text-uppercase border ${awardValue === 2022 ? "awards_btn_white" : "awards_btn_transperant"} arrowbtn`}>{awardValue === 2022 ? <MoveUpRight /> : <MoveRight />} </button>
              </div>
              <hr className="m-0" />
              <div
                onClick={() => setawardValue(2023)}
                className={`d-flex justify-content-between align-items-center py-4 px-3 ${awardValue === 2023 ? 'outer-box' : ""} `}>
                <h5>2023</h5>
                <h5>International Photography Awards</h5>
                <button className={`text-uppercase border ${awardValue === 2023 ? "awards_btn_white" : "awards_btn_transperant"} arrowbtn`}>{awardValue === 2023 ? <MoveUpRight /> : <MoveRight />} </button>
              </div>
              <hr className="m-0" />
            </div>
          </div>



          <div className="col-lg-6 px-4">
            <div className="w-75 h-100">
              <AwardImg awardYear={awardValue} />
            </div>
          </div>
        </div>
      </div>

      {/* section seven (footer) */}
      <div
        id="contact"
        className="outer-box m-2 m-sm-3 m-md-5">
        <div
          // className="d-flex flex-column flex-md-row p-3 p-md-4 p-lg-5    
          className=" p-3 p-md-4 p-lg-5  ">
          <div className="d-flex flex-column  ">
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              startevent="scroll">
              <div>(05)</div>
              <h6 className="text-white">Contact Us</h6>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              startevent="scroll"
              className=" d-flex flex-row justify-content-between  align-items-center">
              <div className=" align-items-center">
                <h1 style={{ fontSize: "78px" }}>Let's discuss your  <br />
                  vision  with us
                  {/* <button className="text-dark text-uppercase fw-bold  border bg-white rounded-pill py-3 px-4 h6 ">learn more</button> */}
                </h1>
              </div>

              <div>
                <address>
                  456, Oak Avenue, <br />
                  Citylight, MA 567507, <br />
                  United States <br />
                  +1 (555) 123-4567 <br />
                  Creacy@gmail.com
                </address>
              </div>
            </div>

            <hr />

            <div
              data-aos="fade-up"
              data-aos-duration="1900"
              startevent="scroll"
              className="d-flex flex-row justify-content-between  align-items-center ">
              <h2>Creacy</h2>
              <div>
                <ul className="m-0 p-0 list-unstyled d-flex">
                  <a href="#" className="text-white text-decoration-none"><li className="px-2">Home</li></a>
                  <a href="#project" className="text-white text-decoration-none"><li className="px-2">Project</li></a>
                  <a href="#aboutUs" className="text-white text-decoration-none"> <li className="px-2">services</li></a>
                  <li className="px-2">Terms & Condition</li>
                </ul>
              </div>
              <div>Reference - <a className="text-white" target="_blank" href="https://dribbble.com/shots/23291447-Creacy-Photography-Agency-Landing-Page">dribbble </a> </div>
            </div>



          </div>


        </div>



      </div>
    </>
  );
};

export default Home;
