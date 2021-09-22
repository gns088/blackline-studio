/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function IndexHeader() {
    return (
        <>
            <div className="page-header clear-filter" filter-color="orange">
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
                <div className="rellax-text-container">
                    <h1 className="h1-seo rellax-text" data-rellax-speed="-1">
                        Components
                    </h1>
                </div>
                <h3 className="h3-description rellax-text" data-rellax-speed="-1">
                    A beautiful premium Bootstrap 4 UI Kit.
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

export default IndexHeader;
