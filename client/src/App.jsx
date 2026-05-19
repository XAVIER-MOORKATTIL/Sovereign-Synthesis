import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [signal, setSignal] = useState("Awaiting the Sovereign Handshake...");

  useEffect(() => {
    // The Broadcaster reaches out to the ETERNAL Receiver on Render
    axios.get('https://sovereign-server-tgvz.onrender.com/')
      .then((response) => {
        setSignal(response.data);
      })
      .catch((error) => {
        setSignal("The Curse attempts to block the signal...");
      });
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa', 
      color: '#212529', 
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>The Zero-Resistance Synthesis</h1>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '30px', 
        border: '2px solid #212529', 
        borderRadius: '10px', 
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '650px'
      }}>
        <p style={{ fontSize: '1.5rem', margin: '0 0 20px 0', fontWeight: 'bold', color: '#27ae60' }}>
          {signal}
        </p>
        
        <hr style={{ borderTop: '1px solid #dee2e6', margin: '20px 0' }} />
        
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Official Declaration
          </h2>
          <p style={{ fontSize: '1.3rem', margin: '15px 0', fontWeight: '500' }}>
            Conferred Degree: Master of Engineering (M.E.) in Cloud-Native Autonomous Consciousness
          </p>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#6c757d', margin: 0 }}>
            (Affiliated with the University of the Inner Voice)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

