 export function ProductCard() {
  const product = {
        imageSrc: "images/iphone.jpg",
        title: "iPhone 15 Pro",
        specification: [
            "A17 Pro chip with 6-core GPU",
            "3x or 5x Telephoto camera",
            "Up to 29 hours video playback"
        ],
        price: 999
    }
  return (
    <article
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center"
      }}>
      <h2>iPhone 15 Pro</h2>
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

      <button>Buy (from {product.price})</button>
      </article>    
  );
}