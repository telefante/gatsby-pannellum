import React, { useEffect } from 'react';
import Pannellum from 'react-pannellum';

const PannellumViewer = () => {
  useEffect(() => {
    // Load JSON data dynamically
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const config = {
          ...data['../static/panorama.jpg'], // Replace with your image name
          autoLoad: true,
        };
        Pannellum.viewer('panorama-container', config);
      });
  }, []);

  return <div id="panorama-container" style={{ width: '100%', height: '500px' }} />;
};

export default PannellumViewer;
