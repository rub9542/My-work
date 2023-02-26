import React from "react";
import { PopOver, PopOverSpan } from "./headerStyle";

function PopUp() {
  return (
    <div>
      <PopOverSpan>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="30"
          height="30"
        >
          <path
            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
            fill="#fff"
          />
        </svg>
      </PopOverSpan>
      <PopOver>
        <p> +91 8448170041</p>
        <h5>Helpline Number</h5>
      </PopOver>
    </div>
  );
}

export default PopUp;
