import React, { Component } from "react";
import homeImg from "../images/we_creates.svg";
import Animation from "../animation";

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
            <div className="flex flex-row justify-between text-white font-semibold py-10">
              <div className=" w-1/5 text-2xl">Site.com</div>
              <div className="flex flex-row justify-between w-1/4">
                <div>Home</div>
                <div>Services</div>
                <div>About</div>
                <div>Contact Us</div>
              </div>
            </div>

            {/* Home */}
            <div className="flex flex-row justify-between items-center text-white py-10">
              <div className="  w-2/4 space-y-10 textLeftToRight">
                <div className=" text-7xl">
                  We Create value for your business.
                </div>
                <div className="text-3xl">
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

            <div className=" grid grid-cols-4 gap-5 ">
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              <Animation options={options}>
                <div className="bg-white p-10 rounded-2xl space-y-3 shadow-2xl">
                  <div className=" text-xl font-bold">Web Development</div>
                  <div>
                    Web development is the work involved in developing a website
                    for the Internet or an intranet. Web development can range
                    from developing a simple single static page of plain text to
                    complex web applications, electronic businesses, and social
                    network services.
                  </div>
                </div>
              </Animation>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
