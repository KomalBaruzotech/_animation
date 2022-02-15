import React, { Component } from "react";
import logo from "./logo.svg";
import Animation from "./animation";

const options = {
  max: 10,
  perspective: 1000,
  scale: 1,
};
class App extends Component {
  render() {
    return (
      <div className="bg-black h-screen w-screen">
        <div className="flex justify-center  pt-10 container mx-auto space-x-5">
          <Animation options={options}>
            <div className="text-white w-full h-auto bg-purple p-5 rounded-xl space-y-5 shadow-2xl shadow-purple ">
              <div className=" text-4xl font-black">Keepar Text</div>
              <p className="text-white text-16px">
                Keeper Tax is secured using SSL 256-bit encryption—the same
                security protocol that
              </p>
              <div className="underline decoration-white hover:no-underline">
                <a href="https://pixer.io/project/keeper-tax-mobile-app">
                  Read Case Study
                </a>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </Animation>

          <Animation options={options}>
            <div className="text-white w-full h-auto bg-green p-5 rounded-xl space-y-5 shadow-2xl shadow-green ">
              <div className=" text-4xl font-black">Keepar Text</div>
              <p className="text-white text-16px">
                Keeper Tax is secured using SSL 256-bit encryption—the same
                security protocol that
              </p>
              <div className="underline decoration-white hover:no-underline">
                <a href="https://pixer.io/project/trykarat">Read Case Study</a>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </Animation>

          <Animation options={options}>
            <div className="text-white w-full h-auto bg-brown p-5 rounded-xl space-y-5 shadow-2xl shadow-brown ">
              <div className=" text-4xl font-black">Keepar Text</div>
              <p className="text-white text-16px">
                Keeper Tax is secured using SSL 256-bit encryption—the same
                security protocol that
              </p>
              <div className="underline decoration-white hover:no-underline">
                <a href="https://pixer.io/project/sticky">Read Case Study</a>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </Animation>

          <Animation options={options}>
            <div className="text-white w-full h-auto bg-orange p-5 rounded-xl space-y-5 shadow-2xl shadow-orange ">
              <div className=" text-4xl font-black">Keepar Text</div>
              <p className="text-white text-16px">
                Keeper Tax is secured using SSL 256-bit encryption—the same
                security protocol that
              </p>
              <div className="underline decoration-white hover:no-underline">
                <a href="https://pixer.io/project/miniacfilms">
                  Read Case Study
                </a>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </Animation>
        </div>
      </div>
    );
  }
}
export default App;
