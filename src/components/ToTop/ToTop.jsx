import React, { useState } from 'react'
import './ToTop.scss'

const ToTop = () => {
    const [visibility, setVisibility] = useState(false);
    const irArriba = (e) => {
      window.scrollTo(0, 0);
    };
  
    window.onscroll = () => {
      if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };
    return (
      <>
        {visibility && (
          <button className="toTop" onClick={irArriba}>
            <i className="fas fa-angle-up"></i>
          </button>
        )}
      </>
    );
  };
  
  export default ToTop;