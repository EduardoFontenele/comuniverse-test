import CarouselSlider from '../../components/Carousel';
import { CertificateComponent } from './style';

export default function Certificates() {
  return (
    <CertificateComponent>
      <h2>Certificates</h2>
      <p>Here are some of your certificates</p>
      <CarouselSlider />
    </CertificateComponent>
  );
}
