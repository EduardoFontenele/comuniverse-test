import styled from 'styled-components';
import * as colors from '../../assets/colors';
import notifications from '../../assets/imgs/notifications.png';

export const Nav = styled.nav`
  background-color: ${colors.SHADOW_COLOR};
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 60px;
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  width: 100%;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.4);

  ul {
    display: flex;
    width: 100%;
    list-style: none;

    li {
      a {
        margin-right: 1rem;
        color: white;
        font-weight: bold;
        transition: color .4s ease;

        &:hover {
          color: ${colors.LIGHT_COLOR};
        }
      }
    }
  }

  img {
    height: 70%;
    margin-left: 1rem;
  }
`;

export const Notification = styled.a`
  background-image: url(${notifications});
  background-size: cover;
  width: 30px;
  height: 30px;
  background-color: none;
  border: none;
  cursor: pointer;
`;
