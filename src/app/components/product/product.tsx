import React from "react";
import "./product.scss";
import img from "../../../shared/assets/images/mouse2.webp";
import img2 from "../../../shared/assets/images/mouse.webp";
import img3 from "../../../shared/assets/images/mouse4.webp";
import img4 from "../../../shared/assets/images/mice.webp";
import img5 from "../../../shared/assets/images/mouse3.webp";

export default function product() {
  return (
    <section className="section">
      <h2 className="main-title">Product</h2>
      <div className="container">
        <div className="timeline">
          <div className="timeline-body">
            <div className="timeline-item">
              <img className="time" src={img2} alt="img" />
              <div className="content">
                <h2 className="title">15 programmable controls</h2>
                <p>
                  Lorem ipsum dolor, sit amen consectetur
                  <br />
                  adipisicing elite. Error, nuts? Lorem ipsum dolor sit amen
                  consectetur <br />
                  adipisicing elite. Ex consectetur isth militia?
                </p>
              </div>
            </div>
            {/*  */}
            <div className="timeline-item">
              <img className="time" src={img} alt="img" />
              <div className="content">
                <h2 className="title">Dual connectivity with lightsome</h2>
                <p>
                  Lorem ipsum dolor, sit amen consectetur
                  <br />
                  adipisicing elite. Error, nuts? Lorem ipsum dolor sit amen
                  consectetur <br />
                  adipisicing elite. Ex consectetur isth militia?
                </p>
              </div>
            </div>
            {/*  */}
            <div className="timeline-item">
              <img className="time" src={img5} alt="img" />
              <div className="content">
                <h2 className="title">Hero 16K Sensor</h2>
                <p>
                  Lorem ipsum dolor, sit amen consectetur
                  <br />
                  adipisicing elite. Error, nuts? Lorem ipsum dolor sit amen
                  consectetur <br />
                  adipisicing elite. Ex consectetur isth militia?
                </p>
              </div>
            </div>
            {/*  */}
            <div className="timeline-item">
              <img className="time" src={img3} alt="img" />
              <div className="content">
                <h2 className="title">Spin. Ratchet. Switch </h2>
                <p>
                  Lorem ipsum dolor, sit amen consectetur
                  <br />
                  adipisicing elite. Error, nuts? Lorem ipsum dolor sit amen
                  consectetur <br />
                  adipisicing elite. Ex consectetur isth militia?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn">Buy NOW</button>
    </section>
  );
}
