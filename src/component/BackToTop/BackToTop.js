import React from "react";
import "./BackToTop.css";
import { useState ,  } from "react";


function BackToTop() {
  function handleBackToTop(e) {
    e.stopPropagation();
    window.scrollTo(0, 0);
  }


  const [BackToTop, setBackToTop] = useState(
    <div className="back-to-top" style={{ visibility: "hidden" }}>
      <i className="fa fa-chevron-up" aria-hidden="true"></i>
    </div>
  );

  window.onscroll = () => {
  
    if (window.pageYOffset !== 0) {
      setBackToTop(
        <div
          className="back-to-top"
          style={{ visibility: "visible" }}
          onClick={handleBackToTop}
        >
          <i
            className="fa fa-chevron-up"
            aria-hidden="true"
            onClick={handleBackToTop}
          ></i>
        </div>
      );
    } else {
      setBackToTop(
        <div className="back-to-top" style={{ visibility: "hidden" }}>
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </div>
      );
    }
  };

  return BackToTop;
}

export default BackToTop;
