import './App.css';
import Card from './components/Card.jsx';
import ProductCard from './components/ProductCard.jsx';

// mission 1
const product = {
  name: '무선 키보드',
  price: 39000,
  brand: 'EZTECH',
};

// mission 2
const products = [
  { id: 1, name: '무선 키보드', price: 39000, brand: 'EZTECH' },
  { id: 2, name: '무선 마우스', price: 29000, brand: 'EZTECH' },
  { id: 3, name: '모니터', price: 199000, brand: 'EZTECH' },
];
const productItem = products.map((p) => <ProductCard key={p.id} name={p.name} price={p.price} brand={p.brand} />);

function App() {
  return (
    <>
      <h1>mission 1</h1>
      <Card name={product.name} price={product.price} brand={product.brand} />
      <h1>mission 2</h1>
      {productItem}
    </>
  );
}

export default App;
////
