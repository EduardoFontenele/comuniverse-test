import { OtherClassesComponent, ClassesContainer } from './style';
import CarouselSlider from '../../components/Carousel';
import salesMan from '../../assets/imgs/salesMan.webp';

export default function OtherClasses() {
  return (
    <OtherClassesComponent>
      <h2>Other classes</h2>

      <ClassesContainer>
        <div className="class-card">
          <img src={salesMan} alt="" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>Professor Ronald McClaren</p>
          <div className="progress-bar">
            <div className="inner" />
          </div>
          <button type="button">Continue learning</button>
        </div>
        <div className="class-card">
          <img src={salesMan} alt="" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>Professor Ronald McClaren</p>
          <div className="progress-bar">
            <div className="inner" />
          </div>
          <button type="button">Continue learning</button>
        </div>
        <div className="class-card">
          <img src={salesMan} alt="" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>Professor Ronald McClaren</p>
          <div className="progress-bar">
            <div className="inner" />
          </div>
          <button type="button">Continue learning</button>
        </div>
      </ClassesContainer>
    </OtherClassesComponent>
  );
}
