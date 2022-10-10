import styled from 'styled-components';
import * as colors from '../../assets/colors';
import bannerImg from '../../assets/imgs/banner-img.png';

export const HeaderComponent = styled.header`
  background-color: ${colors.MAIN_COLOR};
  grid-column: 1 / 4;
  min-height: 300px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;
