import Tilt from "react-parallax-tilt"
import image from "../assets/CardC.jpg"

const ParallaxEffect = () => (
  <Tilt className="parallax-effect" perspective={500}>
    <div className="inner-element">
      <div>React</div>
      <div >Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffect;
