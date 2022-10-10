import React from 'react';
import { Nav, Notification } from './style';
import user from '../../assets/imgs/user.png';

export default function NavBar() {
  return (
    <Nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Library</a></li>
        <li><a href="/">Experts</a></li>
      </ul>
      <Notification />
      <img src={user} alt="" />
    </Nav>
  );
}
