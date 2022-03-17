import React, {Component} from 'react';
import './slide.css';
import awp from '../../img/awp.png';
import ak from '../../img/ak.png';
class Slide extends Component {
  render() {
    return (
      <div className="slide">
        <div className="grid">
          <div className="wrapper_slide">
            <div className="banner_image"></div>
            <h1
             className="title_web"
            //  className="underline red"
            >CS:GO SKINS</h1>
            <p className="title_description">
              All you wanted to know about skins: <br /> a detailed description
              of all the characteristics and unique system of 3D viewing of
              weapons.
            </p>
            <img
              className="image_slide"
              src={ak}
              alt="ak47"
            />
            <div 
            className="information_web"
            // className ="flex"
            >
              <div className="info weapon">
                <div>53</div>
                <div>weapon</div>
              </div>
              <div className="info skin">
                <div>1390</div>
                <div>unique skins</div>
              </div>
              <div className="info pattern">
                <div>+750K</div>
                <div>different pattern indexes</div>
              </div>
            </div>
            <div className="bottom_slide">
              <div className="container_slide_bottom">
                <h2>for every skin</h2>
                <ul>
                  <li>Description of all characteristics of the skin</li>
                  <li>The view of each pattern</li>
                  <li>Inspection in high quality and 3D</li>
                  <li>All-time price chart</li>
                </ul>
              </div>

              <img
                className="image_bottom"
                src={awp}
                alt="awp"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slide;
