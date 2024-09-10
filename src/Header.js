import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1>Hostel Management</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#students">Students</a></li>
          <li><a href="#booking">Booking</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;