import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
            alt="banner"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/18/10/43/banner-1989514_1280.png"
            alt="banner"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg"
            alt="banner"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
