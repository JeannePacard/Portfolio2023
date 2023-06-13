import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import Header from "./Navigation";

const Layout = ({ children }) => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const hoverablesRef = useRef([]);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;
    const hoverables = hoverablesRef.current;

    // Move the cursor
    function onMouseMove(e) {
      gsap.to(bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      gsap.to(smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    }

    // Hover an element
    function onMouseHover() {
      gsap.to(bigBall, 0.3, {
        scale: 4,
      });
    }

    function onMouseHoverOut() {
      gsap.to(bigBall, 0.3, {
        scale: 1,
      });
    }

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((element) => {
      element.addEventListener("mouseenter", onMouseHover);
      element.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      // Clean up event listeners
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseHover);
        element.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div>
        <div className="cursor">
          <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
            <svg height="30" width="30">
              <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
            </svg>
          </div>

          <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
            </svg>
          </div>
        </div>

        <div className="child">{children}</div>
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
