import React from 'react'
import './intro.scss'
import { init } from "ityped";
import { useEffect, useRef } from "react";
function Intro() {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Developer", "Designer", "Content Creator"],
      });
    }, []);

    return (
        <div className="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/atul2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Atul Singh</h1>
                    <h3>
                        Programmer <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>

    )
}

export default Intro
