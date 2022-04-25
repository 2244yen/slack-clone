import { Link } from 'react-router-dom';
import React from 'react';

function MainNav() {
  return (
    <nav>
      <ul>
        <li><Link to= "/">All Meetup</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/new">New</Link></li>
      </ul>
    </nav>
  );
}

export default MainNav;
