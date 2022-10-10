import styled from 'styled-components';
import * as colors from '../../assets/colors';
import salesMan from '../../assets/imgs/salesMan.webp';

export const OtherClassesComponent = styled.section`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  padding: 80px 0;

  h2 {
    font-size: 2rem;
    color: ${colors.MAIN_COLOR};
    margin-bottom: 80px;
  }
`;

export const ClassesContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  .class-card {
    flex: 1;
    min-width: 300px;

    img {
      width: 100%;
      margin-bottom: 1rem;
    }

    h3 {
      color: rgba(0,0,0,0.7);
      font-weight: 100;
      margin-bottom: 12px;
      font-weight: bold;
    }

    p {
      font-weight: 100;
      font-size: 12px;
      margin-bottom: 12px;
    }

    .progress-bar {
      height: 15px;
      width: 100%;
      background-color: ${colors.SHADOW_COLOR};
      border-radius: 20px;

      .inner {
        height: 15px;
        width: 80%;
        background-color: ${colors.MAIN_COLOR};
        border-radius: 20px;
      }
    }

    button {
    height: 50px;
    padding: 0 20px;
    border: none;
    border-radius: 30px;
    background-color: #0B6EE6;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
      box-shadow: 0px 0px 5px 2px #82B8E4;
    }
  }
  }
`;
