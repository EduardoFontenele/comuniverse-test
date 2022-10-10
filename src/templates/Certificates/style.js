import styled from 'styled-components';
import * as colors from '../../assets/colors';
import certificatesBg from '../../assets/imgs/certificatesBg.png';

export const CertificateComponent = styled.section`
  grid-column: 1 / 4;
  grid-row: 5 / 6;
  padding: 80px 50px;
  background: url(${certificatesBg});
  background-position: center;
  background-size: cover;

  h2 {
    font-size: 2rem;
    color: white;
    margin-bottom: 80px;
  }

  p {
    color: white;
    font-weight: 100;
    font-size: 1.4rem;
    margin-bottom: 40px;
  }
`;
