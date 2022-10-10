import styled from 'styled-components';
import * as colors from '../../assets/colors';
import rankingBg from '../../assets/imgs/rankingBg.png';

export const RankingComponent = styled.div`
  min-width: 600px;
  max-width: 1000px;
  min-height: 400px;
  max-width: 700px;
  background-color: ${colors.MAIN_COLOR};
  background: url(${rankingBg});
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  position: relative;

  .infos-container {
    display: flex;
    gap: 4rem;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    padding: 30px;

    img {
      flex: 1;
      max-width: 180px;
    }

    .progress-container {
      flex: 1;

      p {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      span {
        color: ${colors.SHADOW_COLOR};
        font-weight: bold;
      }

      h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 2rem;
      }
    }
  }
`;
