import styled from 'styled-components';
import * as colors from '../../assets/colors';

export const LatestClassComponent = styled.section`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  padding: 80px 0 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  .video-container {
    flex: 1;
    width: 50%;

    h2 {
      font-size: 2rem;
      color: ${colors.MAIN_COLOR};
      margin-bottom: 60px;
      font-weight: 100;
    }


    .wrapper {
      min-width: 480px;
      min-height: 340px;
      position: relative;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .infos-container {
    flex: 1;
    min-width: 400px;

    h3 {
      color: ${colors.MAIN_COLOR};
      margin-bottom: 1rem;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 340px;
  }

  .circular-progress {
          margin-top: 1.5rem;
          height: 150px;
          width: 150px;
          position: relative;
          border-radius: 50%;
          background: conic-gradient(#0B6EE6 ${(props) => props.percent * 3.6}deg, #053166 0deg);
          padding: 15px;

          @media screen and (max-width: 1200px) {
            height: 100px;
            width: 100px;
            padding: 10px;
          }
        }

        .circular-progress::before {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: white;

          @media screen and (max-width: 1200px) {
            height: 80px;
            width: 80px;
          }
        }

        .inner {
          position: relative;
          font-size: 2rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.SHADOW_COLOR};
          font-weight: bold;
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
    transition: box-shadow .3s ease;

    &:hover {
      box-shadow: 0px 0px 5px 2px #82B8E4;
    }
  }

`;
