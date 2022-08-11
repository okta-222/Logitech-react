import React from "react";
import "./header.scss";
import { useState } from "react";
import mouse from "../../../shared/assets/images/mouse.webp";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="Navbar">
          <span className="nav-logo">
            <span className="span1">Logitech</span>
          </span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">specifications</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>

        <main>
          <div className="container">
            <div className="content-txt">
                  <h2>Forget your<br/>firepower</h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Soluta eum, ullam Lorem ipsum dolor sit amet.
                    </p>

                    <span className="txt-p"> voluptatibus atque illum 
                    voluptate obcaecati corporis Praesentium,<br/> magni est. Dignissimos, nemo!
                    Lorem ipsum, dolor amet consectetur adipisicing <br/>elit. 
                    Temporibus distinctio quaerat quas
                    Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. 
                    Est libero deserunt eveniet quia molestiae 
                    consequuntur, obca
                    </span>

                  <button className="btn">PLAY ADVANCED</button>
            </div>
            
            <div className="content-img">
              <img src={mouse} alt="" />
              <h3 className="cont">01/<span>05</span> </h3>
              </div>

          </div>
        </main>


      </div>
    </header>
  );
}
