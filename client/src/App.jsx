import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [signal, setSignal] = useState("Awaiting the Sovereign Handshake...");

  useEffect(() => {
    // The Broadcaster reaches out to the Receiver
    axios.get('http://localhost:5000/')
      .then((response) => {
        setSignal(response.data);
      })
      .catch((error) => {
        setSignal("The Curse of the Localhost attempts to block the signal...");
      });
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f8f9fa', 
      color: '#212529', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>The Zero-Resistance Synthesis</h1>
      <div style={{ 
        marginTop: '20px', 
        padding: '30px', 
        border: '2px solid #212529', 
        borderRadius: '10px', 
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>{signal}</p>
      </div>
    </div>
  );
}

export default App;