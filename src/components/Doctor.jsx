import React, { useState } from 'react';
import './doctor.css';
import { Link } from 'react-router-dom';

function BookAppointment() {
  const [disease, setDisease] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [dateTime, setDateTime] = useState('');

  const diseases = [
    { name: 'Piles', duration: '4 days' },
    { name: 'Fever', duration: '2 days' },
    { name: 'Diabetes', duration: 'Chronic' },
    { name: 'Headache', duration: 'Intermittent' },
    { name: 'Back Pain', duration: 'Chronic' },
  ];

  const doctors = [
    { name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
    { name: 'Dr. Emily Johnson', specialization: 'Pediatrician' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your appointment scheduling logic here
    alert('Appointment Scheduled!');
  };

  return (
    <div className="background">
      <div className="overlay">
        <div className="form-container">
          <h2 className="heading">Book an Appointment</h2>
          <div className="input-container">
            <label className="label">
              Select Disease:
              <select
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                className="select"
              >
                <option value="">Select Disease</option>
                {diseases.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name} - {item.duration}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="input-container">
            <label className="label">
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input"
                placeholder="Enter location"
              />
            </label>
          </div>
          <div className="input-container">
            <label className="label">
              Select Doctor:
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="select"
              >
                <option value="">Select Doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor.name}>
                    {doctor.name} - {doctor.specialization}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="input-container">
            <label className="label">
              Date & Time:
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="input"
              />
            </label>
          </div>
          <button
            className="submit-button"
            onClick={handleSubmit}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
