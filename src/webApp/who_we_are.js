import ScrollAnimation from "react-animate-on-scroll";
import React, { Component } from "react";


export default class WhoWeAre extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-4 gap-5">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              Personalized & Customized IT solutions
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              One stop solution for all your online business need
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              Incorporating the latest technologies
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              Quality work in prescribed time period
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              Highly proficient and experienced developers
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              The most effective After-Sales services
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className=" bg-white px-5 py-10 text-xl font-bold rounded-2xl text-center    ">
              Personalized & Customized IT solutions
            </div>
          </ScrollAnimation>
        </div>
      </>
    );
  }
}
