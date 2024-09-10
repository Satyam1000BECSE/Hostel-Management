import React from 'react';
import Header from './Header';
import Home from './Home';
import Rooms from './Rooms';
import BookingForm from './BookingForm';
import Students from './Students';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Rooms />
        <Students />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;