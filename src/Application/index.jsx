import React from "react";

import GlobalStyles from "./GlobalStyles";
import pic from "../assets/flower3-1600.jpg";

const Application = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Hello from the Dubé React App Starter Template</h1>
        <p>
          Donec sed odio dui. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Donec sed odio dui. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur blandit tempus porttitor. Fusce
          dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus.
        </p>
        <img src={pic} alt="" style={{ maxWidth: "100%" }} />
      </div>
    </>
  );
};

export default Application;
