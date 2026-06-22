import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';

const product = {
  name: '무선 키보드',
  price: 39000,
  brand: 'EZTECH',
};

function App() {
  return <Card name='무선 키보드' price='39000' brand='EZTECH' />;
}

export default App;
