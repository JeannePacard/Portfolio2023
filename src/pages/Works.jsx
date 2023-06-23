import React, { useEffect, useRef } from "react";
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";

function Slider() {
  const flickingRef = useRef(null);

  useEffect(() => {
    if (flickingRef.current) {
      flickingRef.current.addPlugins(new Perspective({ rotate: 0.5 }));
    }
  }, []);

  return (
    <div id="flick" className="flicking-viewport">
      <div className="flicking-camera">
        <Flicking ref={flickingRef} circular={true}>
          <div className="card-panel">
            <img src="./assets/Works/assurever.png" alt="site web" />
            <h1>assurever</h1>
            <p>
              techno : React <br /> role : developer
            </p>
            <a
              href="https://test-site-assurever-git-master-jeannepacard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/cattravel.png" alt="site web" />
            <h1>around the world</h1>
            <p>
              techno : HTML / CSS / JS <br /> role : designer, developer
            </p>
            <a
              href="https://jeannepacard.github.io/cattravel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/sisi.png" alt="site web" />
            <h1>portfolio</h1>
            <p>
              techno : HTML / CSS <br /> role : developer
            </p>
            <a
              href="https://sirinebenamour.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/seo.png" alt="site web" />
            <h1>escape game</h1>
            <p>
              techno : HTML / CSS / JS <br /> role : designer, developer
            </p>
            <a
              href="https://jeannepacard.github.io/cattravel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/zurg.png" alt="site web" />
            <h1>
              zurg<span>'</span>s revenge
            </h1>
            <p>
              techno : JS <br /> role : designer, animator, developer
            </p>
            <a
              href="https://jeannepacard.github.io/LaRevancheDeZurg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/isis.png" alt="site web" />
            <h1>isis</h1>
            <p>
              techno : HTML / CSS / JS <br /> role : designer, developer
            </p>
            <a
              href="https://jeannepacard.github.io/SiteIsis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/krunks.png" alt="site web" />
            <h1>portfolio</h1>
            <p>
              techno : HTML / CSS <br /> role : developer
            </p>
            <a
              href="https://kylian-brun.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
          <div className="card-panel">
            <img src="./assets/Works/lena.png" alt="site web" />
            <h1>portfolio</h1>
            <p>
              techno : HTML / CSS <br /> role : developer
            </p>
            <a
              href="https://lenabrincat.github.io/lenabrincatportfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit project
            </a>
          </div>
        </Flicking>
      </div>
    </div>
  );
}

export default Slider;
