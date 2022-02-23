import React, { Component } from "react";

const textArray = ["Hi", "Hello", "How are you..."];

export default class textAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIdx: 0,
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      <>
        <div className="bg-orange h-2 w-full"></div>
        <div className="container mx-auto mt-20">
          {/* text flipper carousel */}
          <h1>
            <span>Website : </span>
            <div className="message">
              <div className="word1">close close close close close close close</div>
              <div className="word2">code</div>
              <div className="word3">creating</div>
            </div>
          </h1>
          <div className="w-full h-0.5 bg-black opacity-50"></div>

          {/* Text Changes Animation */}
          <div className="text-4xl mt-10 font-bold ml-10">
            {textThatChanges}
          </div>
          <div className="w-full h-0.5 bg-black opacity-50"></div>

          {/* Text Left to Right animation */}
          <div className=" text-4xl textLeftToRight mt-10 ml-10">
            Text left to right
          </div>
          <div className="w-full h-0.5 bg-black opacity-50"></div>

          {/* Text Right to left animation */}
          <div className=" text-4xl textRightToLeft mt-10 ml-10">
            Text Right to left
          </div>
          <div className="w-full h-0.5 bg-black opacity-50"></div>

          {/* Text bottom to top animation */}

          <div className="text-4xl mt-10  textBottomToTop">
            <div className="ml-10">Bottom to top animation</div> 
          <div className="w-full h-0.5 bg-black opacity-50"></div>
          </div>

        </div>
      </>
    );
  }
}
