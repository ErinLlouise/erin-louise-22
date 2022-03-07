import React from "react";
import navDark from "./navDark";

function Home() {
  return (
    <>
      <div className="darkSection">
        <section>
          <h1>ERIN LOUISE</h1>
          <div className="container container_solid">
            <div className="title_wrapper">
              <navDark />
            </div>
          </div>
        </section>
        <section>
          <h1>ERIN LOUISE</h1>
          {/* <h1>PRODUCT DESIGNER/</h1>
          <h1>FRONT END DEVELOPER/</h1>
          <h1>CREATIVE TECHNOLOGIST</h1> */}
          <div className="container container_image" aria-hidden="true">
            <div className="title_wrapper">
              <navDark />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
