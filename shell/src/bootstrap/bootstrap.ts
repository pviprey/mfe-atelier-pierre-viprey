import React from 'react';
import ReactDOM from 'react-dom';

// Dynamically import the remote components
async function loadRemoteComponents() {
  try {
    const { default: Header } = await import('header_mfe/header');
    const { default: Button } = await import('header_mfe/button');

    // Mount Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      ReactDOM.render(React.createElement(Header), headerContainer);
    }

    // Mount Button
    const buttonContainer = document.getElementById('button-container');
    if (buttonContainer) {
      ReactDOM.render(React.createElement(Button), buttonContainer);
    }
  } catch (error) {
    console.error('Error loading remote components:', error);
  }
}

// Execute when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadRemoteComponents();
});
