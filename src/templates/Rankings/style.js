import styled from 'styled-components';
import * as colors from '../../assets/colors';

export const RankingsComponent = styled.section`
  grid-column: 2 / 3;
  grid-row: 6 / 7;
  padding: 80px 0px;
  position: relative;

  img.elipses {
      position: absolute;
      z-index: -2;
      width: 40px;
      left: 23%;
      bottom: 33%;
    }

  h2 {
    font-size: 2rem;
    color: ${colors.MAIN_COLOR};
    margin-bottom: 80px;
  }

  .ranking-wrapper {
    display: grid;
    place-content: center;
    place-items: center;
  }

  .other-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 4rem 0;

    img {
      max-width: 80px;
    }
  }

  h3.find-other-members {
    text-align: center;
    color: ${colors.MAIN_COLOR};
  }
`;
