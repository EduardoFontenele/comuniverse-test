import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import certificates from '../../assets/imgs/certificate.png';

export default function CarouselSlider() {
  return (
    <Carousel>
      <div>
        <img src={certificates} alt="Opa" />
        <p className="legend">Certificado de Sales and business</p>
      </div>
      <div>
        <img src={certificates} alt="Opa" />
        <p className="legend">Certificado de PMP</p>
      </div>
      <div>
        <img src={certificates} alt="Opa" />
        <p className="legend">Certificado de web designer</p>
      </div>
    </Carousel>
  );
}
