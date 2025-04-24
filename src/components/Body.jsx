import React from "react";
import { useState } from "react";

function Body(props) {
  const [background, setBackground] = useState(false);

  //  change background color and icon
  function changeicon() {
    setBackground((preValue) => {
      return !preValue;
    });

    props.changeListColor(background);
  }

  return (
    // Background Images and Colors
    <div className="divs">
      {/* top background */}
      <div
        className="topdiv"
        style={{
          backgroundImage: background
            ? 'url("./images/bg-desktop-light.jpg")'
            : 'url("./images/bg-desktop-dark.jpg")',
        }}
      >
        {/* todo word, mun and sun logo div */}
        <div className="topdivflex">
          {/* todo word */}
          <div>
            <p className="todo">TODO</p>
          </div>

          {/* moon and sun logo */}
          <div onClick={changeicon}>
            {background ? (
              <img src="./images/icon-moon.svg" alt="" />
            ) : (
              <img src="./images/icon-sun.svg" alt="" />
            )}
          </div>
        </div>
      </div>
      {/* Bottom background */}
      <div
        className="bottomdiv"
        style={{
          backgroundColor: background
            ? "hsl(233, 11%, 84%)"
            : "hsl(235, 21%, 11%)",
        }}
      >
        {/* Footer */}
        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="www.twitter.com/aladejanaamajid">Abdul-Majid Aladejana</a>.
        </div>
      </div>
      {/* <p>Drag and drop to reorder list</p> */}
    </div>
  );
}

export default Body;
