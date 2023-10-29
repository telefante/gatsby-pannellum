import React from 'react';
import Layout from '../components/layout';
import PannellumViewer from '../components/PannellumViewer';

const PanoramaPage = () => (
  <Layout>
    <h1>Pannellum Viewer</h1>
    <PannellumViewer jsonDataFile="./data.json" />
  </Layout>
);

export default PanoramaPage;
