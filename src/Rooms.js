import React from 'react';
import './Rooms.css';

function Rooms() {
  const rooms = [
    { id: 1, type: 'Single', available: true },
    { id: 2, type: 'Double', available: false },
    { id: 3, type: 'Suite', available: true }
  ];

  return (
    <section id="rooms" className="rooms-section">
      <h2>Available Rooms</h2>
      <div className="room-list">
        {rooms.map(room => (
          <div key={room.id} className={`room-card ${room.available ? 'available' : 'unavailable'}`}>
            <h3>{room.type} Room</h3>
            <p>{room.available ? 'Available' : 'Booked'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;