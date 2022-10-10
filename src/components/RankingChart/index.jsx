import { RankingComponent } from './style';
import user from '../../assets/imgs/user.png';

export default function RankingChart() {
  return (
    <RankingComponent>
      <div className="infos-container">
        <img src={user} alt="" />

        <div className="progress-container">
          <p>
            Your progress:
            {' '}
            <span>70%</span>
          </p>
          <p>
            You have
            {' '}
            <span>20</span>
            {' '}
            certificates!
          </p>

          <h3>Your are 5th of 73!</h3>
          <h4>
            Congratulations!
            {' '}
            <br />
            {' '}
            And never stop learning!
          </h4>
        </div>
      </div>
    </RankingComponent>
  );
}
