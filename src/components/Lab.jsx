import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookLabAppointment() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [selectedLab, setSelectedLab] = useState('');
  const [cart, setCart] = useState([]);

  const labs = [
    { name: 'Lab A', testsAvailable: 10 },
    { name: 'Lab B', testsAvailable: 15 },
    { name: 'Lab C', testsAvailable: 20 },
    { name: 'Lab D', testsAvailable: 12 },
    { name: 'Lab E', testsAvailable: 18 },
  ];

  const tests = [
    { id: 1, name: 'Blood Test', price: 50, parameters: 'CBC, Glucose, Lipid Profile' },
    { id: 2, name: 'Urine Test', price: 30, parameters: 'Routine, Microscopy' },
    { id: 3, name: 'X-ray', price: 80, parameters: 'Chest X-ray' },
    { id: 4, name: 'MRI Scan', price: 200, parameters: 'Brain MRI' },
    { id: 5, name: 'ECG', price: 40, parameters: 'Electrocardiogram' },
    { id: 6, name: 'CT Scan', price: 150, parameters: 'Head CT Scan' },
    { id: 7, name: 'Ultrasound', price: 60, parameters: 'Abdominal Ultrasound' },
    { id: 8, name: 'Endoscopy', price: 120, parameters: 'Upper GI Endoscopy' },
    { id: 9, name: 'Colonoscopy', price: 130, parameters: 'Colon Screening' },
    { id: 10, name: 'Allergy Test', price: 70, parameters: 'Allergens Panel' },
    { id: 4, name: 'MRI Scan', price: 200, parameters: 'Brain MRI' },
    { id: 4, name: 'MRI Scan', price: 200, parameters: 'Brain MRI' },
  ];

  const addToCart = (test) => {
    const updatedCart = [...cart, test];
    setCart(updatedCart);
  };

  const removeFromCart = (testId) => {
    const updatedCart = cart.filter(item => item.id !== testId);
    setCart(updatedCart);
  };

  const handleSubmit = () => {
    alert('Lab Appointment Scheduled!');
  };

  return (
    <div style={styles.container}>
      <video autoPlay loop muted style={styles.video}>
        <source src="labv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Book a Lab Appointment</h2>
        <div style={styles.scrollableContainer}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputContainer}>
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
          <div style={styles.inputContainer}>
            <label style={styles.label}>
              Select Lab:
              <select
                value={selectedLab}
                onChange={(e) => setSelectedLab(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Lab</option>
                {labs.map((lab, index) => (
                  <option key={index} value={lab.name}>
                    {lab.name}
                  </option>
                ))}
              </select>
            </label>
            {selectedLab && (
              <div style={styles.testsAvailable}>
                Tests available: {labs.find(lab => lab.name === selectedLab)?.testsAvailable}
              </div>
            )}
          </div>
          <div style={styles.testsGrid}>
            <h3>Predefined Tests</h3>
            <div style={styles.testsContainer}>
              {tests.map((test, index) => (
                <div key={index} style={styles.testItem}>
                  <div><strong>{test.name}</strong></div>
                  <div>Price: ${test.price}</div>
                  <div>Parameters: {test.parameters}</div>
                  <button style={styles.cartadd} onClick={() => addToCart(test)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
          {cart.length > 0 && (
            <div style={styles.cart}>
              <h3>Cart</h3>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            style={styles.submitButton}
            onClick={handleSubmit}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  formContainer: {
    width: '100%',
    maxWidth: '900px',
    padding: '2px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundcolor: 'rgba(255, 255, 255, 0.5)',
    color: '#333',
    overflow: 'hidden',
  },
  scrollableContainer: {
    maxHeight: '100vh',
    overflowY: 'auto',
    paddingRight: '0px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007bff',
  },
  inputContainer: {
    marginBottom: '3px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  select: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  testsGrid: {
    marginTop: '20px',
  },
  testsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '10px',
  },
  testItem: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
  },
  testsAvailable: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#007bff',
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
    marginTop: '20px',
  },
  cart: {
    marginTop: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
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
    backgroundSize: 'fill',
    backgroundPosition: 'center',
    objectFit: 'fill',
  },
  cartadd: {
    marginTop: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '20px',
  }
};

export default BookLabAppointment;
