import styles from './productCard.module.css';

function ProductCard({ name, price, brand }) {
  return (
    <article className={styles.item}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{brand}</p>
    </article>
  );
}

export default ProductCard;
