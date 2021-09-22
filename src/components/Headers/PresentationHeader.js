/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg")
                  .default +
                ")",
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-buildings.png")
                  .default +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo h2-seo" data-rellax-speed="-1">
            Blackline Studio
          </h1>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          Best Value for Furniture
        </h3>
        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >
          Designed by{" "}
          <a href="http://github.com/gns088" target="_blank">
            Ganesh Kumar
          </a>
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
