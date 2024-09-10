import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Room booked successfully for ${name} in a ${roomType} room.`);
    setName('');
    setRoomType('');
  };

  return (
    <section id="booking" className="booking-section">
      <h2>Book a Room</h2>
      <form onSubmit={handleBooking}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;