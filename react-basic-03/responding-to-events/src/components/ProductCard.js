 export function ProductCard({product, background = "slategray", onPurchase}) {
  return (
    <article
      style={{
        background,
        border: "1px solid black",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center"
      }}>
      <h2>{product.title}</h2>
      <img 
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
      </ul>

      <button onClick={() => onPurchase(product)}>Buy (from {product.price})</button>
      </article>    
  );
}