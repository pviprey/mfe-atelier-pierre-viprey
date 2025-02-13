import React from 'react';
import { createRoot } from 'react-dom/client';

// Dynamically import the remote components
async function loadRemoteComponents() {
  try {
    const { default: Header } = await import('mfe/header');
    const { default: Button } = await import('mfe/button');

    // Mount Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      const root = createRoot(headerContainer); // 👈 Utilisation de createRoot
      root.render(React.createElement(Header));

      // ReactDOM.render(React.createElement(Header), headerContainer);
    }

    // Mount Button
    const buttonContainer = document.getElementById('button-container');
    if (buttonContainer) {
      const root = createRoot(buttonContainer);
      root.render(React.createElement(Button));    
    }
  } catch (error) {
    console.error('Error loading remote components:', error);
  }
}

// Execute when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadRemoteComponents();
});
