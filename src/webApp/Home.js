import React, { Component } from "react";
import homeImg from "../images/we_creates.svg";
import Animation from "../animation";
import WhoWeAre from "./who_we_are";
import ScrollAnimations from "./scrollAnimation";
import LogoIcon from "../images/icon.svg";
import data from "./data.json";
import { Link } from "react-router-dom";
import Header from "./Header";

const options = {
  max: 10,
  perspective: 1000,
  scale: 1,
};

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-full">
          <div className=" container mx-auto pb-20">
            {/* Header */}
          <Header />
           

            {/* Home */}
            <div className="md:flex md:flex-row justify-between items-center text-white py-10 space-y-10 md:space-y-0">
              <div className="  md:w-2/4 md:space-y-10 space-y-5 textLeftToRight">
                <span className="md:text-7xl text-3xl">
                  We Create value for your business.
                </span>
                <div className="md:text-3xl text-xl">
                  From web design and development to graphic design service,
                  Baruzotech can handle everything!
                </div>
              </div>
              <div className="textRightToLeft">
                <img src={homeImg} alt="home-img" className=" h-2/4" />
              </div>
            </div>
            {/* Section */}
            <div className=" py-20 text-center space-y-10 text-white textBottomToTop">
              <div className="text-7xl">Our Services</div>
              <div className="text-3xl">
                From web design and development to graphic design service, We
                handle everything!
              </div>
            </div>
            <ScrollAnimations>
              <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
                <Animation options={options}>
                  <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                    <div className=" text-xl font-bold">Web Development</div>
                    <div>
                      Web development is the work involved in developing a
                      website for the Internet or an intranet. Web development
                      can range from developing a simple single static page of
                      plain text to complex web applications, electronic
                      businesses, and social network services.
                    </div>
                  </div>
                </Animation>
              </div>
            </ScrollAnimations>
            {/*  */}

            <div className=" py-20 text-center space-y-10 text-white textBottomToTop">
              <div className="text-7xl">Who we are</div>
              <div className="text-3xl">
                From web design and development to graphic design service, We
                handle everything!
              </div>
            </div>

            {/* Who we are */}
            <div>
              {/* <ScrollAnimations> */}
              <WhoWeAre />
              {/* </ScrollAnimations> */}
            </div>

            {/* <div className=" pt-40">
              <ScrollAnimations />
            </div> */}

            <div className="py-10">
              <ScrollAnimations>
                <div className=" py-20 text-center space-y-10 text-white textBottomToTop">
                  <div className="text-7xl">We’ve Worked With</div>
                  <div className="text-3xl">
                    Since opening in 2019, we've had the privilege to help many
                    companies improve their online presence.
                  </div>
                </div>
              </ScrollAnimations>

              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-between items-center md:space-x-10 space-y-5 md:space-y-0">
                {data.map((title) => {
                  return (
                    <>
                      <Link to={`/sub_services/${title.id}`}>
                        <div
                          className="text-xl font-bold bg-lightBlue p-10 "
                          key={title.id}
                        >
                          <div className="zoomOutBox flex items-center justify-center">
                            <img src={LogoIcon} alt="logo" />
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
