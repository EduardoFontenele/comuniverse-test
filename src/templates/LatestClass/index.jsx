import { useContext } from 'react';
import { DefaultContext } from '../../contexts/GlobalContext';
import { LatestClassComponent } from './style';
import linesBg from '../../assets/imgs/linesBg.png';

export default function LatestClass() {
  const userContext = useContext(DefaultContext);
  const { state: { percent, name }, dispatch } = userContext;

  return (
    <LatestClassComponent percent={percent}>

      <div className="video-container">
        <h2>
          Welcome,
          {' '}
          {name}
          !
        </h2>
        <div className="wrapper">
          <iframe src="https://www.youtube.com/watch?v=adV8-_hgL4g" title="Opa" frameBorder="0" />
        </div>
      </div>

      <div className="infos-container">
        <h3>Latest class</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="progress">
          <div className="circular-progress">
            <div className="inner">
              {percent}
              %
            </div>
          </div>
          <button type="button" onClick={() => dispatch({ type: 'PERCENT_PLUS_ONE' })}>Continue learning</button>
        </div>
      </div>

    </LatestClassComponent>
  );
}
