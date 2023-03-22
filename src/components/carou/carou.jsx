import Carousel from 'react-bootstrap/Carousel';
import './carou.css'

function Carou() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={require('./rin_goodend_base.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={require('./emi_parkback.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={require('./shizu_shanghai_smirklaugh.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={require('./hanako_park_away.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={require('./lilly_touch_cheong.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carou;