import React from 'react';
import './Students.css';

function Students() {
  const students = [
    { id: 1, name: 'John Doe', room: 'Single' },
    { id: 2, name: 'Jane Smith', room: 'Double' }
  ];

  return (
    <section id="students" className="students-section">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Room Type</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Students;