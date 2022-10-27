import React, { Component } from 'react';
import './Components/style.css'
import './App.css';
import Main from "./Components/main";
  
function App() {
  // fetching the GET route from the Express server which matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  return (
      <>
      <Main/>
      </>
    );
  }

export default App;
