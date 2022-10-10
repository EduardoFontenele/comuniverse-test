import RankingChart from '../../components/RankingChart';
import { RankingsComponent } from './style';
import user from '../../assets/imgs/user.png';
import elipses from '../../assets/imgs/elipses.png';

export default function Rankings() {
  return (
    <RankingsComponent>
      <h2>Rankings</h2>
      <div className="ranking-wrapper">
        <RankingChart />
      </div>
      <img className="elipses" src={elipses} alt="" />

      <div className="other-members">
        <img src={user} alt="" />
        <img src={user} alt="" />
        <img src={user} alt="" />
        <img src={user} alt="" />
        <img src={user} alt="" />
        <img src={user} alt="" />
        <img src={user} alt="" />
      </div>
      <h3 className="find-other-members">Find more members</h3>
    </RankingsComponent>
  );
}
