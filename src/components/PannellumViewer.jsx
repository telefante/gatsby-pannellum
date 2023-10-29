import React, { useEffect, useState } from 'react';
import { Pannellum } from 'react-pannellum';

const PannellumViewer = ({ jsonDataFile }) => {
  const [panoramaConfig, setPanoramaConfig] = useState(null);

  useEffect(() => {
    // Import JSON data dynamically from the specified file
    const data = require(`${jsonDataFile}`);
    console.log(data);

    const imageKey = 'panorama.jpg'; // Replace with your image name
    if (data[imageKey] && data[imageKey].hotspots) {
      const config = {
        type: 'equirectangular',
        panorama: `/${imageKey}`,
        hotSpots: data[imageKey].hotspots,
      };
      setPanoramaConfig(config);
    } else {
      console.error(`Hotspots not found for image: ${imageKey}`);
    }
  }, [jsonDataFile]);

  return (
    <div id="panorama-container" style={{ width: '100%', height: '500px' }}>
      {panoramaConfig && <Pannellum width="100%" height="100%" {...panoramaConfig} />}
    </div>
  );
};

export default PannellumViewer;
