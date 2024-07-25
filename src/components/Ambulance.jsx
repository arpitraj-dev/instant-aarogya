import React, { useState } from 'react';
import './Ambulance.css'; // Ensure this is imported
import { Link } from 'react-router-dom';


function Ambulance() {
  const [location, setLocation] = useState('');
  const [ambulanceType, setAmbulanceType] = useState('');
  const [dateTime, setDateTime] = useState('');

  return (
    <div style={styles.background}>
      <video autoPlay loop muted style={styles.video}>
        <source src="amb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <div style={styles.ambulanceContainer} className="ambulance-container">
          <h2 style={styles.heading}>Schedule an Ambulance</h2>
          <div style={styles.dropdownContainer}>
            <label style={styles.label}>
              Location:
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
            </label>
          </div>
          <div style={styles.dropdownContainer}>
            <label style={styles.label}>
              Type of Ambulance:
              <select
                value={ambulanceType}
                onChange={(e) => setAmbulanceType(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Type</option>
                <option value="basic">Basic Life Support</option>
                <option value="advanced">Advanced Life Support</option>
                <option value="neonatal">Neonatal Ambulance</option>
              </select>
            </label>
          </div>
          <div style={styles.dropdownContainer}>
            <label style={styles.label}>
              Date & Time:
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <button
            style={styles.submitButton}
            className="submit-button"
            onClick={() => alert('Ambulance Scheduled!')}
          >
            Schedule Ambulance
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ambulanceContainer: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  dropdownContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
  },
  select: {
    marginTop: '5px',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  input: {
    marginTop: '5px',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    animation: 'pulse 2s infinite',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Ambulance;
