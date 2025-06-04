import React from 'react';

function App() {
  return (
    <div style={{ 
      background: '#773FF0', 
      minHeight: '100vh', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <img 
        src="/images/logo-volemi.png" 
        alt="Volemi Logo" 
        style={{ 
          height: '80px', 
          marginBottom: '20px' 
        }} 
      />
      <p style={{ fontSize: '24px' }}>
        ¡Estoy haciendo una web app de Volemi en React!
      </p>
    </div>
  );
}

export default App;