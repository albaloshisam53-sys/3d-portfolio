import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const handleClick = (container: HTMLDivElement) => {
  container.classList.toggle("what-active");
};

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div
            className="what-container what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-front">
              <h3>Web Design</h3>
              <p>Custom websites that look great and convert visitors</p>
            </div>
            <div className="what-back">
              <p>WordPress, Landing Pages, Business Sites, eCommerce</p>
            </div>
          </div>
          <div
            className="what-container what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-front">
              <h3>UI/UX Design</h3>
              <p>User-friendly interfaces with modern aesthetics</p>
            </div>
            <div className="what-back">
              <p>Figma, Wireframes, Prototypes, Design Systems</p>
            </div>
          </div>
          <div
            className="what-container what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-front">
              <h3>React Development</h3>
              <p>Fast, modern web apps built with React.js</p>
            </div>
            <div className="what-back">
              <p>React.js, TypeScript, Node.js, REST APIs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
